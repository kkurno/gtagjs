import GtagJsSingleton from '../core/singleton';

export const warn = (text: string) => {
  if (GtagJsSingleton.getData().enableLog) console.warn('[gtagjs]', text);
};
