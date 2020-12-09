import { ErrorText, GtagJsSingletonData, Command } from '../constant-enum-type';

import GtagJsSingleton from './singleton';

import { warn } from '../utils/console';
import { checkIsBrowser } from '../utils/compatibility';
import { addGtagScriptDom } from '../utils/dom';

export const gtag = (command: Command, ...arg: any[]) => {
  if (!checkIsBrowser()) return;
  if (!GtagJsSingleton.getData().id) {
    warn(ErrorText.NEED_INITIALIZATION);
    return;
  }
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push([command, ...arg]);
};

export const initialize = (id: string, option?: { gtag?: any, lib?: Omit<GtagJsSingletonData, 'id'> }) => {
  if (!checkIsBrowser()) return;
  if (!id) {
    warn(ErrorText.REQUIRE_ID);
    return;
  }

  gtag('js', new Date());
  gtag('config', id, option?.gtag);

  if (option?.lib) GtagJsSingleton.setData({ id, ...option.lib });

  addGtagScriptDom(id);
};
