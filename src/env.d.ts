/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  POSTS_PER_PAGE: string;
  CLOUDINARY_CLOUD_NAME: string;
  XATA_BRANCH: string;
  XATA_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
