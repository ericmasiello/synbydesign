import * as mixpanel from 'mixpanel-browser';

let HAS_INITIALIZED = false;

export default (message: string, data?: object) => {
  if (!HAS_INITIALIZED) {
    mixpanel.init(process.env.MIXPANEL_TOKEN!);
    HAS_INITIALIZED = true;
  }
  mixpanel.track(message, data);
};
