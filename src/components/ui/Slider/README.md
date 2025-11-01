# EmblaCarousel - Компонент слайдера

Компонент карусели на основе библиотеки `embla-carousel-react` с удобным управлением размерами.

## Особенности

- ✅ Простое управление шириной и высотой слайдов
- ✅ Адаптивные размеры для разных устройств
- ✅ Возможность установки размеров через CSS или пропсы
- ✅ Эффект масштабирования (scale) при прокрутке
- ✅ Затемнение по краям viewport
- ✅ Кнопки навигации и точки-индикаторы
- ✅ Поддержка бесконечной прокрутки (loop)

## Использование

### 1. Базовое использование

```tsx
import EmblaCarousel from '@/components/ui/Slider/EmblaCarousel';

const SLIDES = [
  '/images/slides/slide1.png',
  '/images/slides/slide2.png',
  '/images/slides/slide3.png',
];

export const MyComponent = () => {
  return (
    <EmblaCarousel 
      slides={SLIDES} 
      options={{ loop: true }} 
    />
  );
};
```

### 2. С кастомными размерами через пропсы

```tsx
<EmblaCarousel 
  slides={SLIDES}
  options={{ loop: true }}
  slideWidth="600px"
  slideHeight="400px"
  slideGap="20px"
/>
```

### 3. Изменение размеров по умолчанию в CSS

Откройте файл `EmblaCarouselStyle.scss` и измените значения:

```scss
.embla {
  --slide-width: 700px;  // ширина слайда
  --slide-height: 450px; // высота слайда
  --slide-gap: 20px;     // отступ между слайдами
  
  // Для планшетов
  @include mixin.respond('tablet') {
    --slide-width: 500px;
    --slide-height: 350px;
  }
  
  // Для мобильных
  @include mixin.respond('mobile') {
    --slide-width: 280px;
    --slide-height: 180px;
  }
}
```

## Пропсы

| Prop | Тип | Обязательный | По умолчанию | Описание |
|------|-----|--------------|--------------|----------|
| `slides` | `string[]` | ✅ Да | - | Массив путей к изображениям |
| `options` | `EmblaOptionsType` | ❌ Нет | - | Опции Embla (loop, align и т.д.) |
| `slideWidth` | `string` | ❌ Нет | `589px` | Ширина слайда (например: "600px", "50vw") |
| `slideHeight` | `string` | ❌ Нет | `358px` | Высота слайда |
| `slideGap` | `string` | ❌ Нет | `0px` | Отступ между слайдами |

## Размеры по умолчанию

### Desktop (> 768px)
- Ширина: `589px`
- Высота: `358px`
- Отступ: `0px`

### Tablet (481-768px)
- Ширина: `450px`
- Высота: `280px`
- Отступ: `0px`

### Mobile (< 480px)
- Ширина: `300px`
- Высота: `200px`
- Отступ: `0px`

## Опции Embla

Компонент поддерживает все опции из `embla-carousel`:

```tsx
const OPTIONS = {
  loop: true,          // Бесконечная прокрутка
  align: 'center',     // Выравнивание слайдов
  skipSnaps: false,    // Пропуск снэпов
  draggable: true,     // Возможность перетаскивания
  dragFree: false,     // Свободное перетаскивание
  containScroll: false // Содержать скролл
};

<EmblaCarousel slides={SLIDES} options={OPTIONS} />
```

## Структура файлов

```
Slider/
├── EmblaCarousel.tsx              # Основной компонент
├── EmblaCarouselStyle.scss        # Стили
├── EmblaCarouselArrowButtons.tsx  # Кнопки навигации
├── EmblaCarouselDotButton.tsx     # Точки-индикаторы
└── README.md                      # Документация
```

## Примеры

### Квадратные слайды

```tsx
<EmblaCarousel 
  slides={SLIDES}
  slideWidth="400px"
  slideHeight="400px"
/>
```

### Широкоформатные слайды

```tsx
<EmblaCarousel 
  slides={SLIDES}
  slideWidth="800px"
  slideHeight="450px"
/>
```

### С отступами между слайдами

```tsx
<EmblaCarousel 
  slides={SLIDES}
  slideWidth="500px"
  slideHeight="300px"
  slideGap="20px"
/>
```

## Технические детали

### Эффект масштабирования

Слайдер использует эффект масштабирования (scale), который делает активный слайд больше, а боковые - меньше. Коэффициент масштабирования можно изменить в константе `TWEEN_FACTOR_BASE` в файле `EmblaCarousel.tsx`.

### Градиентное затемнение

Viewport слайдера имеет градиентное затемнение по краям для создания эффекта фокуса на центральном слайде. Градиент можно изменить в `.embla__viewport::before` в файле стилей.

## Поддержка браузеров

Компонент использует современные CSS свойства:
- CSS Custom Properties (переменные)
- Flexbox
- object-fit
- transform

Поддерживаются все современные браузеры (Chrome, Firefox, Safari, Edge).

