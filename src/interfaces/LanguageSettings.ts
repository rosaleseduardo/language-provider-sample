import type { HourFormat } from './HourFormat';
import type { Locale } from './Locale';

export type Currencies = 'USD' | 'EUR' | 'COP';

export type Directions = 'ltr' | 'rtl';

export interface LanguageSettings {
  name: string;
  locale: Locale;
  currency: Currencies;
  textDirection: Directions;
  formats: {
    dateTime: string;
    date: { short: string; long: string };
    time: string;
    hour: HourFormat;
  };
}
