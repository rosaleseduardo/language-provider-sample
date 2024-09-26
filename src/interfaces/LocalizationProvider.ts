import type { Resource } from 'i18next';
import type { DateTime } from 'luxon';
import type { useTranslation } from 'react-i18next';

export type Locale = 'en_US' | 'es_CO' | 'fr_FR';

export type Currencies = 'USD' | 'EUR' | 'COP';

export type Directions = 'ltr' | 'rtl';

export type HourFormat = '12-hour' | '24-hour';

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

export interface Timezone {
  zoneName: string;
  isDST: boolean;
  hourFormat: HourFormat;
}

export interface i18nextConfig {
  namespaces: {
    translation: Resource;
  };
}

export type SupportedLanguages = {
  [K in Locale]: {
    settings: LanguageSettings;
    i18n: i18nextConfig;
  };
};

export interface LocalizationProviderProps {
  children: React.ReactElement;
}

export interface LangOptions {
  label: string;
  value: Locale;
}

export interface Input {
  date: string;
  format: string;
  timeZone: string;
  longVariant: boolean;
}

export interface i18nextContext {
  setCurrentLanguage: (locale: Locale) => void;
  langIsSelected: (props: LanguageSettings) => boolean;
  currentLangSettings: LanguageSettings;
  defaultLangCount: number;
  helpers: {
    langAsOptions: LangOptions[];
    getTimeZoneInfo: (date?: DateTime) => Timezone;
  };
  hooks: {
    useLocalizedInfo: () => {
      getDate: (
        dateOption?: 'Yesterday' | 'Tomorrow',
        timeZone?: string,
      ) => string;
      displayDate: (props?: Partial<Input>) => string;
      displayTime: (props?: Partial<Input>) => string;
    };
    useTranslation: typeof useTranslation;
  };
  utils: {
    formatDate: (date: string, format: string) => string;
  };
}
