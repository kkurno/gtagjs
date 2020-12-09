import { checkIsBrowser } from './compatibility';

const hostPath = 'https://www.googletagmanager.com/gtag/js';

export const addGtagScriptDom = (id: string) => {
  if (!checkIsBrowser()) return;
  const scriptElem = document.createElement('script');
  scriptElem.src = `${hostPath}?id=${id}`;
  scriptElem.type = 'text/javascript';
  scriptElem.async = true;
  document.body.appendChild(scriptElem);
};
