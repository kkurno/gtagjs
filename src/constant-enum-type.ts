declare global {
  interface Window { dataLayer?: any[]; }
}

export enum ErrorText {
  REQUIRE_ID = 'ID is required',
};

export type GtagJsSingletonData = {
  enableLog: boolean;
}

export type Command = 'js' | 'config' | 'get' | 'set' | 'event'
