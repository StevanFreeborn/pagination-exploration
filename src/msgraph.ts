import { env } from "./env.js";

export function msGraph() {
  let accessToken: string | null = null;
  let tokenExpiration: number | null = null;

  async function getAccessToken() {
    if (accessToken && tokenExpiration && Date.now() < tokenExpiration) {
      return accessToken;
    }

    const response = await fetch(
      `https://login.microsoftonline.com/${env.MS_GRAPH_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: env.MS_GRAPH_CLIENT_ID,
          client_secret: env.MS_GRAPH_CLIENT_SECRET,
          scope: "https://graph.microsoft.com/.default",
          grant_type: "client_credentials",
        }),
      },
    );

    if (response.ok === false) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();
    accessToken = data.access_token;
    tokenExpiration = Date.now() + data.expires_in * 1000;

    return accessToken;
  }

  return {
    getUsers: function* () {
      let number = 0;

      while (true) {
        yield number++;
      }
    },
  };
}
