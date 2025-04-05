declare namespace NodeJS {
  interface ProcessEnv {
    MS_GRAPH_CLIENT_ID: string | undefined;
    MS_GRAPH_CLIENT_SECRET: string | undefined;
    MS_GRAPH_TENANT_ID: string | undefined;
  }
}
