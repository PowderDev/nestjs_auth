declare namespace NodeJS {
  export interface ProcessEnv {
    JWT_ACCESS_SECRET: string;
    JWT_REFRESH_SECRET: string;
    REDIS_HOST: string;
    REDIS_PORT: string;
  }
}
