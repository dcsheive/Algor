// graph = nodes + edges
// node is a point , edge is a connection between nodes
// directed graph has directions
/// a -> c
/// can only go from a to c, not back
// undirected graph has two way directions
// neighbor is a node that is accesible from current node
// adjacency list
// {
//     a: [b,c];
//     b: [d];
//     c: [e];
//     d: [];
//     e: [b];
//     f: [d];
// }

//  (a) -> (c)
//   |      |
//   v      v
//  (b) <- (d)
//   |
//   v
//  (e) <- (f)
// depth first traversal 
/// a, b, e
/// a, c, d, b, e

// breadth first traversal
/// a,b,c,d,e


//depth first uses a Stack
/// add node to stack
/// pop node, do logic
/// look at node neighbors
/// add neighbors to stack
/// repeat

//breadth first uses a Queue
/// add node to queue
/// pop node do logic
/// look at neighbors
/// add neighbors to queue
/// repeat

// cyclic path returns to start
// acyclic path has an end

const depthFirstPrint = (graph, source) => {
    const stack = [source];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current)
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
};

const depthFirstPrintRecursive = (graph, source) => {
    console.log(source)
    for (let neighbor of graph[source]) {
        depthFirstPrintRecursive(graph, neighbor);
    }
};


// const graph = {
//     a: ['b','c'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// }

const breadthFirstPrint = (graph, source) => {
    const queue = [source];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
};

// depthFirstPrint(graph, 'a');
// depthFirstPrintRecursive(graph, 'a');
// breadthFirstPrint(graph, 'a');


// haspath
// n nodes
// e edges
// time O(e)
// or O(n^2) edges = max connections between nodes
// space O(n)

// hasPath depthfirst
// const hasPath = (graph, source, dest) => {
//     if (source === dest) return true;
//     for (let neighbor of graph[source]) {
//         if(hasPath(graph, neighbor, dest)){
//             return true;
//         }
//     }
//     return false;
// };

// hasPath breadthfirst
const hasPath = (graph, src, dst) => {
    const queue = [src];
    while (queue.length > 0){
        const curr = queue.shift();
        if (curr === dst) return true;
        for (let neigh of graph[curr]){
            queue.push(neigh);
        }
    }
    return false;
}


const graph1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

console.log(hasPath(graph1, 'f', 'k')); // true

const graph2 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

console.log(hasPath(graph2, 'f', 'j')); // false

const graph3 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

console.log(hasPath(graph3, 'i', 'h')); // true
const graph4 = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],
};

console.log(hasPath(graph4, 'v', 'w')); // true
const graph5 = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],
};

console.log(hasPath(graph5, 'v', 'z')); // false