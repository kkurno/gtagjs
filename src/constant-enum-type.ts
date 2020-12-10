declare global {
  interface Window { dataLayer?: any[]; }
}

export enum ErrorText {
  REQUIRE_ID = 'ID is required',
  NEED_INITIALIZATION = 'You need to initialize by running "initialize" function',
  ALREADY_INITIALIZED = 'You have already initialized',
};

export type GtagJsSingletonData = {
  id: string;
  enableLog: boolean;
}

export type Command = 'js' | 'config' | 'get' | 'set' | 'event' | 'consent'
