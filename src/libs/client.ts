import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'bt-tomo',
  apiKey: process.env.API_KEY || '',
});
