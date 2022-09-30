
// Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

const largestComponent = (graph) => {
    let largest = 0;
    let visited = new Set();
    for (let n in graph){
        const count = countPath(graph, n, visited);
        if (count > largest) largest = count;
    }
    console.log(largest);
    return largest;
};


//breadthfirst
// const countPath  = (graph, src, visited) => {
//     const queue = [src];
//     let count = 0;
//     while (queue.length > 0){
//         const current = queue.shift()
//         if (visited.has(current)) continue;
//         visited.add(String(current));
//         for (let neighbor of graph[current]){
//             if (!visited.has(String(neighbor))){
//                 queue.push(neighbor);
//             }
//         }
//         count++;
//     }
//     return count;
// }

//depthfirst
const countPath = (graph,src,visited) => {
    if (visited.has(src)) return 0;
    let size = 1;
    visited.add(src);
    for( let neighbor of graph[src]){
        size += countPath(graph,neighbor,visited);
    }
    return size;
}

largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4
largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}); // -> 6
largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}); // -> 5
largestComponent({}); // -> 0
largestComponent({
  0: ['4','7'],
  1: [],
  2: [],
  3: ['6'],
  4: ['0'],
  6: ['3'],
  7: ['0'],
  8: []
}); // -> 3
