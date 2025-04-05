import { msGraph } from "./msgraph.js";

const graph = msGraph();

for await (const user of graph.getUsers()) {
  console.log(`Retrieved user: ${user.displayName} (${user.id})`);
}


