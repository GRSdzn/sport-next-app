'use client';
/**
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
 */
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { EmblaOptionsType, EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import '@/components/ui/Slider/EmblaCarouselStyle.scss';

const TWEEN_FACTOR_BASE = 0.6;

/**
 * Минимальное количество слайдов для корректной работы бесконечного loop.
 * При align: 'center' нужно минимум 3 слайда (предыдущий, текущий, следующий),
 * но для плавной анимации и визуально корректного отображения рекомендуется 5+
 */
const MIN_SLIDES_FOR_INFINITE_LOOP = 5;

const numberWithinRange = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  slideWidth?: string;
  slideHeight?: string;
  slideGap?: string;
  dots?: boolean;
};

const calculateDuplicationFactor = (originalCount: number, minRequired: number): number => {
  if (originalCount >= minRequired) return 1;
  return Math.ceil(minRequired / originalCount);
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options, slideWidth, slideHeight, slideGap, dots = true }) => {
  const originalSlidesCount = slides.length;

  /**
   * Дублируем слайды только если:
   * 1. Включен loop режим
   * 2. Слайдов меньше минимально необходимого количества
   *
   * Это необходимо потому что Embla Carousel физически не может создать
   * бесконечный loop если слайдов недостаточно для заполнения viewport
   */
  const displaySlides = useMemo(() => {
    const shouldDuplicate = options?.loop && originalSlidesCount < MIN_SLIDES_FOR_INFINITE_LOOP;
    if (!shouldDuplicate) return slides;

    const duplicationFactor = calculateDuplicationFactor(originalSlidesCount, MIN_SLIDES_FOR_INFINITE_LOOP);
    return Array.from({ length: duplicationFactor }, () => slides).flat();
  }, [slides, options?.loop, originalSlidesCount]);

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [isReady, setIsReady] = React.useState(false);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const tweenFactor = useRef(TWEEN_FACTOR_BASE);

  const { selectedIndex } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  /**
   * Вычисляем индекс оригинального слайда для корректного отображения dots
   * Если слайды дублированы, берем остаток от деления на количество оригинальных слайдов
   */
  const originalSlideIndex = useMemo(() => {
    return selectedIndex % originalSlidesCount;
  }, [selectedIndex, originalSlidesCount]);

  const dotIndices = useMemo(() => {
    return Array.from({ length: originalSlidesCount }, (_, i) => i);
  }, [originalSlidesCount]);

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
      if (tweenNode) {
        tweenNode.style.transform = `scale(${scale})`;
        tweenNode.style.transformOrigin = 'center center';
      }
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    tweenScale(emblaApi);
    setIsReady(true);

    emblaApi.on('reInit', setTweenNodes).on('reInit', tweenScale).on('scroll', tweenScale).on('slideFocus', tweenScale);

    return () => {
      emblaApi.off('reInit', setTweenNodes).off('reInit', tweenScale).off('scroll', tweenScale).off('slideFocus', tweenScale);
    };
  }, [emblaApi, setTweenNodes, tweenScale]);

  // Inline стили для кастомизации размеров (если переданы пропсы)
  const customStyles = useMemo(
    () =>
      ({
        '--slide-width': slideWidth,
        '--slide-height': slideHeight,
        '--slide-gap': slideGap || '0px',
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
      }) as React.CSSProperties,
    [slideWidth, slideHeight, slideGap, isReady],
  );

  /**
   * Обработчик клика по точке навигации
   * Учитывает дублирование слайдов и прокручивает к правильному индексу
   */
  const handleDotClick = useCallback(
    (dotIndex: number) => {
      if (!emblaApi) return;

      // Находим ближайший индекс дублированного слайда, который соответствует оригинальному
      const currentIndex = emblaApi.selectedScrollSnap();
      const totalSlides = displaySlides.length;

      // Вычисляем все возможные индексы для этого оригинального слайда
      const targetIndices = [];
      for (let i = dotIndex; i < totalSlides; i += originalSlidesCount) {
        targetIndices.push(i);
      }

      // Выбираем ближайший индекс к текущей позиции
      const targetIndex = targetIndices.reduce((closest, current) => {
        const currentDistance = Math.abs(current - currentIndex);
        const closestDistance = Math.abs(closest - currentIndex);
        return currentDistance < closestDistance ? current : closest;
      });

      emblaApi.scrollTo(targetIndex);
    },
    [emblaApi, displaySlides.length, originalSlidesCount],
  );

  return (
    <section className="embla" style={customStyles} data-ready={isReady}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {displaySlides.map((slide, i) => (
            <div className={`embla__slide${i === selectedIndex ? ' is-selected' : ''}`} key={`${slide}-${i}`}>
              <div className="embla__slide__number">
                <Image
                  src={slide}
                  alt={`Slide ${(i % originalSlidesCount) + 1}`}
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
            {dotIndices.map((dotIndex) => (
              <DotButton
                key={dotIndex}
                onClick={() => handleDotClick(dotIndex)}
                className={'embla__dot'.concat(dotIndex === originalSlideIndex ? ' embla__dot--selected' : '')}
                aria-label={`Перейти на слайд ${dotIndex + 1}`}
                aria-pressed={dotIndex === originalSlideIndex}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EmblaCarousel;
