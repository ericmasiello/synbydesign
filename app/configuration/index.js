export const TITLE = 'Syn By Design - Eric Masiello\'s portfolio';
export const UI_IDS = {
  logo: 'logo',
  appContents: 'appContents',
  about: 'about',
  portfolioList: 'portfolioList',
  portfolioDetail: 'portfolioDetail',
  changeLog: 'changeLog'
};

export const API_URL = '/wp/wp-json';

export const DESIGN_CATEGORIES = ['logos', 'illustration', 'flyers', 'business-cards'];
export const OTHER_CATEGORIES = ['other'];
export const WEB_CATEGORIES = ['web'];
export const MIX_CATEGORIES = ['mix'];
export const MIN_LIVE_SITE_BROWSER_WIDTH_MQ = 890;
export const WP_SLUGS = {
  CHANGE_LOG: 'change-log'
};

console.log('NODE_ENV', process.env.NODE_ENV);

export const API_DOMAIN = !process.env.NODE_ENV === 'production' ? 'http://www.synbydesign.com' : '';
