/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  POSTS_PER_PAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
