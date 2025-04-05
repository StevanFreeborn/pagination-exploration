import { msGraph } from "./msgraph.js";

const graph = msGraph();

for (const user of graph.getUsers()) {
  console.log("user", user);
}
