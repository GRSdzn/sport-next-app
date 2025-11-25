import React from 'react';
import './FormattedContent.scss';
import { EventDescription, DescriptionBlock } from '@/types/event-list/event-list.type';

export interface FormattedContentProps {
  content: EventDescription;
  className?: string;
}

/**
 * Компонент для рендеринга форматированного контента
 * Поддерживает параграфы и маркированные списки
 *
 * @example
 * // Простая строка (обратная совместимость)
 * <FormattedContent content="Простой текст с\nпереносом строки" />
 *
 * @example
 * // Форматированный контент
 * <FormattedContent content={[
 *   { type: 'paragraph', content: 'Вступительный текст' },
 *   { type: 'list', items: ['Пункт 1', 'Пункт 2'] }
 * ]} />
 */
export const FormattedContent: React.FC<FormattedContentProps> = ({ content, className = '' }) => {
  /**
   * Рендерит простую строку с поддержкой переносов строк
   */
  const renderStringContent = (text: string) => {
    return text.split('\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  /**
   * Рендерит один блок форматированного контента
   */
  const renderBlock = (block: DescriptionBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="formatted-content__paragraph">
            {renderStringContent(block.content)}
          </p>
        );

      case 'list':
        return (
          <ul key={index} className="formatted-content__list">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} className="formatted-content__list-item">
                {renderStringContent(item)}
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  // Если контент - простая строка, рендерим как параграф
  if (typeof content === 'string') {
    return (
      <div className={`formatted-content ${className}`.trim()}>
        <p className="formatted-content__paragraph">{renderStringContent(content)}</p>
      </div>
    );
  }

  // Рендерим массив блоков
  return <div className={`formatted-content ${className}`.trim()}>{content.map(renderBlock)}</div>;
};
