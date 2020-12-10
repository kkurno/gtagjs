import { ErrorText, GtagJsSingletonData, Command } from '../constant-enum-type';

import GtagJsSingleton from './singleton';

import { warn } from '../utils/console';
import { checkIsBrowser } from '../utils/compatibility';
import { addGtagScriptDom } from '../utils/dom';

export function gtag(command: Command, ...arg: any[]) {
  if (!checkIsBrowser()) return;
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push(arguments);
};

export const initialize = (id: string, option?: { gtag?: any, lib?: Omit<GtagJsSingletonData, 'id'> }) => {
  if (!checkIsBrowser()) return;
  if (GtagJsSingleton.getData().id) {
    warn(ErrorText.ALREADY_INITIALIZED);
  }
  if (!id) {
    warn(ErrorText.REQUIRE_ID);
    return;
  }

  GtagJsSingleton.setData({ id, ...(option?.lib ?? {}) });

  gtag('js', new Date());
  gtag('config', id, option?.gtag ?? {});
  addGtagScriptDom(id);
};

export default { gtag, initialize };
