type Env = {
  MS_GRAPH_CLIENT_ID: string;
  MS_GRAPH_CLIENT_SECRET: string;
  MS_GRAPH_TENANT_ID: string;
}

function parseEnv(env: NodeJS.ProcessEnv): Env {
  if (!env.MS_GRAPH_CLIENT_ID) {
    throw new Error('MS_GRAPH_CLIENT_ID is not defined');
  }

  if (!env.MS_GRAPH_CLIENT_SECRET) {
    throw new Error('MS_GRAPH_CLIENT_SECRET is not defined');
  }

  if (!env.MS_GRAPH_TENANT_ID) {
    throw new Error('MS_GRAPH_TENANT_ID is not defined');
  }

  return {
    MS_GRAPH_CLIENT_ID: env.MS_GRAPH_CLIENT_ID,
    MS_GRAPH_CLIENT_SECRET: env.MS_GRAPH_CLIENT_SECRET,
    MS_GRAPH_TENANT_ID: env.MS_GRAPH_TENANT_ID,
  };
}

export const env = parseEnv(process.env);
