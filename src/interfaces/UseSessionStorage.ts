import type { Locale } from '@interfaces';

export interface SessionStorageInput {
  key: string;
  defaultValue: Locale;
}

export type SessionStorageOutput = [Locale, (newValue: Locale) => void];
