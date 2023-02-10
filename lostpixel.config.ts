import type { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [{ path: '/', name: 'landing' }],
    baseUrl: 'http://127.0.0.1:3000/',
  },
  lostPixelProjectId: 'cldxvj6dq0791ox0eiw6kkoy1',
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
