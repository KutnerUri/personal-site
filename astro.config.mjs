// @ts-check
import { defineConfig, envField } from 'astro/config';

// Bun loads .env (and .env.local) into process.env before Astro starts.
const site = process.env.SITE_URL;
if (!site) throw new Error('SITE_URL is not set. Put it in .env, e.g. SITE_URL=https://example.nefzen.dev');

export default defineConfig({
  site,
  env: {
    schema: {
      SITE_NAME: envField.string({ context: 'server', access: 'public' }),
      // The "CODE" in CODE.goatcounter.com. Leave empty to turn analytics off.
      GOATCOUNTER_CODE: envField.string({ context: 'server', access: 'public', optional: true }),
    },
  },
});
