// Константы для валидации
export const MIN_NAME_LENGTH = 2;
export const MIN_PHONE_DIGITS = 10;
export const FORM_SUBMIT_DELAY = 1000;

// Регулярные выражения для фильтрации ввода
export const NAME_REGEX = /[^а-яА-ЯёЁa-zA-Z\s-]/g;
export const PHONE_REGEX = /[^0-9\s+()-]/g;
