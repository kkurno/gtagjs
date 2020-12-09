import { ErrorText, GtagJsSingletonData, Command } from '../constant-enum-type';
import GtagJsSingleton from './singleton';
import { warn } from '../utils/console';

export const gtag = (command: Command, ...arg: any[]) => {
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push([command, ...arg]);
};

export const initialize = (id: string, option?: { gtag?: any, lib?: GtagJsSingletonData }) => {
  if (!id) {
    warn(ErrorText.REQUIRE_ID);
    return;
  }

  gtag('js', new Date());
  gtag('config', id, option?.gtag);

  if (option?.lib) GtagJsSingleton.setData(option.lib);
};
