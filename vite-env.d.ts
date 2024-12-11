/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BE_DATABASE_URL_DEV: string;
  readonly BE_DATABASE_URL_PROD: string;
  readonly BE_MINIO_ACCESS_KEY_DEV: string;
  readonly BE_MINIO_SECRET_KEY_DEV: string;
  readonly BE_MINIO_ACCESS_KEY_PROD: string;
  readonly BE_MINIO_SECRET_KEY_PROD: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
