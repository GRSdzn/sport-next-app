'use client';
/**
 * EmblaCarousel - Компонент слайдера с управляемыми размерами
 *
 * Использование:
 *
 * 1. Базовое использование (размеры по умолчанию из CSS):
 * <EmblaCarousel slides={SLIDES} options={{ loop: true }} />
 *
 * 2. С кастомными размерами через пропсы:
 * <EmblaCarousel
 *   slides={SLIDES}
 *   options={{ loop: true }}
 *   slideWidth="600px"
 *   slideHeight="400px"
 *   slideGap="20px"
 * />
 *
 * 3. Изменение размеров для адаптива:
 * Размеры по умолчанию настроены в EmblaCarouselStyle.scss:
 * - Desktop: width: 589px, height: 358px
 * - Tablet: width: 450px, height: 280px
 * - Mobile: width: 300px, height: 200px
 *
 * Вы можете изменить их напрямую в файле стилей или через пропсы
 */
import React, { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { EmblaOptionsType, EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import '@/components/ui/Slider/EmblaCarouselStyle.scss';

const TWEEN_FACTOR_BASE = 0.6;

const numberWithinRange = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  slideWidth?: string;
  slideHeight?: string;
  slideGap?: string;
  dots?: boolean;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options, slideWidth, slideHeight, slideGap, dots = true }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [isReady, setIsReady] = React.useState(false);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const tweenFactor = useRef(TWEEN_FACTOR_BASE);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  // Собираем DOM элементы слайдов
  const setTweenNodes = useCallback((api: EmblaCarouselType) => {
    tweenNodes.current = api
      .slideNodes()
      .map((slideNode) => slideNode.querySelector('.embla__slide__number') as HTMLElement);
  }, []);

  // Анимация масштаба слайдов
  const tweenScale = useCallback((api: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();
    const slidesInView = api.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    api.slideNodes().forEach((slideNode, index) => {
      if (isScrollEvent && !slidesInView.includes(index)) return;

      const scrollSnap = api.scrollSnapList()[index];
      let diffToTarget = scrollSnap - scrollProgress;

      // Loop correction
      if (engine.options.loop) {
        const loopItem = engine.slideLooper.loopPoints.find((lp) => lp.index === index);
        if (loopItem) {
          const target = loopItem.target();
          if (target !== 0) {
            // Исправляем прыжки при переходе из конца к началу и обратно
            const direction = Math.sign(target);
            diffToTarget = direction === -1 ? scrollSnap - (1 + scrollProgress) : scrollSnap + (1 - scrollProgress);
          }
        }
      }

      const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
      const scale = numberWithinRange(tweenValue, 0.3, 1);
      const tweenNode = tweenNodes.current[index];
      tweenNode.style.transform = `scale(${scale})`;
      tweenNode.style.transformOrigin = 'center center';
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    tweenScale(emblaApi);
    setIsReady(true);

    emblaApi.on('reInit', setTweenNodes).on('reInit', tweenScale).on('scroll', tweenScale).on('slideFocus', tweenScale);
  }, [emblaApi, setTweenNodes, tweenScale]);

  // Inline стили для кастомизации размеров (если переданы пропсы)
  const customStyles = {
    '--slide-width': slideWidth,
    '--slide-height': slideHeight,
    '--slide-gap': slideGap || '0px',
    opacity: isReady ? 1 : 0,
    transition: 'opacity 0.2s ease-in-out',
  } as React.CSSProperties;

  return (
    <section className="embla" style={customStyles} data-ready={isReady}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, i) => (
            <div className={`embla__slide${i === selectedIndex ? ' is-selected' : ''}`} key={i}>
              <div className="embla__slide__number">
                <Image
                  src={slide}
                  alt={`Slide ${i + 1}`}
                  fill
                  sizes="(max-width: 480px) 300px, (max-width: 768px) 450px, 589px"
                  className="embla__slide__image"
                  priority={i === 0}
                />
                <div className="embla__slide__overlay" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {dots && (
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
                aria-label={`Перейти на слайд ${index + 1}`}
                aria-pressed={index === selectedIndex}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EmblaCarousel;
