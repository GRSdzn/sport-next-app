/**
 * Типы для форматированного контента событий
 */

/**
 * Параграф текста
 */
export interface ParagraphContent {
  type: 'paragraph';
  content: string;
}

/**
 * Маркированный список
 */
export interface ListContent {
  type: 'list';
  items: string[];
}

/**
 * Элемент форматированного описания
 * Может быть параграфом или маркированным списком
 */
export type DescriptionBlock = ParagraphContent | ListContent;

/**
 * Описание события
 * Может быть простой строкой (для обратной совместимости)
 * или массивом блоков контента (параграфы, списки)
 */
export type EventDescription = string | DescriptionBlock[];

/**
 * Пропсы для карточки события
 */
export interface EventCardProps {
  src: string;
  title: string;
  description?: string;
  detailDescription?: EventDescription;
  date?: string;
  alt?: string;
  className?: string;
  slides?: string[];
  carouselOptions?: Record<string, unknown>;
}
