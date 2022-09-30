
// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

const undirectedPath = (edges, src, dst) => {
  const graph = buildGraph(edges);
  return hasPath(graph, src, dst, new Set());
}

const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }


  return graph;
}
//depthfirst
const hasPath = (graph, src, dst, set) => {
  if (src === dst) return true;
  if (set.has(src)) return false;
  set.add(src);
  for (let n of graph[src]) {
    if (hasPath(graph, n, dst, set)) {
      return true;
    }
  }
  return false;
}



const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges, 'j', 'm'));// -> true
const edges2 = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges2, 'm', 'j'));// -> true
const edges3 = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges3, 'l', 'j'));// -> true
const edges4 = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges4, 'k', 'o'));// -> false
const edges5 = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges5, 'i', 'o'));// -> false
const edges6 = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


console.log(undirectedPath(edges6, 'a', 'b'));// -> true
const edges7 = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

console.log(undirectedPath(edges7, 'a', 'c'));// -> true
const edges8 = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

console.log(undirectedPath(edges8, 'r', 't'));// -> true
const edges9 = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

console.log(undirectedPath(edges9, 'r', 'b'));// -> false

const edges10 = [
  ['s', 'r'],
  ['t', 'q'],
  ['q', 'r'],
];

console.log(undirectedPath(edges10, 'r', 't'));// -> true