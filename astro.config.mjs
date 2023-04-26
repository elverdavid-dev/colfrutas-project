import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import {inject} from '@vercel/analytics'

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(),inject()]
});