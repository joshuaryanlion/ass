// function findNeighbors(node, matrix) {
//     // Only consider N, S, E, W nodes

//     // North

//     // South

//     // East

//     // West

//     // Your code here
// }

// function trenchTraversal(node, matrix, visited) {
//     // Don't bother traversing if it is to shallow

//     // Traverse the potential trench to count it's length
//     // Your code here
// }

// function identifyTrench(trenchMatrix) {
//     // Start at 0,0 and attempt to traverse any unvisited nodes
//     // Your code here
// }

// // Uncomment for local testing

// // // Example 0
// // const sonar_0 = [
// //     [-5, -5, -5],
// //     [-6, -5, -8],
// //     [-5, -7, -5]
// // ]

// // console.log(findNeighbors([1,1], sonar_0)) // => Expect [[2, 1], [1, 0], [1, 2]];

// // // Example 1
// // const sonar_1 = [
// //           [-5,-5,-5,-5,-5],
// //           [-5,-8,-8,-9,-7],
// //           [-5,-5,-5,-5,-8],
// //           [-5,-5,-5,-5,-5]
// // ]
// // console.log(identifyTrench(sonar_1)) // <- Expect 'true'

// // // Example 2
// // const sonar_2 = [
// //           [-5,-5,-5,-7,-5],
// //           [-5,-8,-8,-9,-5],
// //           [-5,-5,-5,-7,-5],
// //           [-5,-5,-5,-5,-5]
// // ]
// // console.log(identifyTrench(sonar_2)) // <- Expect 'false'

// // // Example 3
// // const sonar_3 = [
// //           [-5,-5,-5,-5,-5],
// //           [-5,-5,-5,-5,-5],
// //           [-5,-9,-9,-5,-5],
// //           [-5,-5,-5,-5,-5]
// // ]
// // console.log(identifyTrench(sonar_3)) // <- Expect 'false'


// /*************DO NOT MODIFY UNDER THIS LINE ***************/

function findNeighbors(node, matrix) {

    //make a new array to include neighbors

    const neighbors = []

    //destructure the node to get th row and col([row,col])

    const [row, col] = node

    //write the values that we need to add and subtract from row and col to find each neighbor including diagonal neighbors

    newNodes = [

        //top

        [-1, 0],

        //bottom

        [1, 0],

        //left

        [0, -1],

        //right

        [0, 1],

       

    ]

    //get value for the current node

    const currentNode = matrix[row][col]

    //for each of the new nodes array add them to current node to get the new nodes

    newNodes.forEach(nodes => {

        //destructure nodes new get row col node

        const [newRow, newCol] = nodes;

        //add new nodes value for row

        const neighborRow = row + newRow;

        //add new nodes value for col

        const neighborCol = col + newCol;

        //make sure the new nodes does not go out of bounds

        if (((neighborRow >= 0 && neighborRow < matrix.length)

            && (neighborCol >= 0 && neighborCol < matrix[row].length))) {

            //get new node's value

            const neighborNode = matrix[neighborRow][neighborCol]

            //see if difference between current node and neighboring nodes are (-1,0,1)

            if (neighborNode<-5) {

                //push the neighboring node into the new array that we made for neighbors

                neighbors.push([neighborRow, neighborCol])

            }


 

        }


 

    })


 

    return neighbors

}

// function findNeighbors(node, matrix) {
//     // Don't forget to include diagonal neighbors!!!
  
//     // Your code here
//     const row = node[0];
//     const col = node[1];
//     const neighbors = [];
  
//     // top
//     if (row > 0 && Math.abs(matrix[row - 1][col] - matrix[row][col]) <= 1) {
//       neighbors.push([row - 1, col]);
//     }
  
//     // top left
//     if (row > 0 && Math.abs(matrix[row - 1][col - 1] - matrix[row][col]) <= 1) {
//       neighbors.push([row - 1, col - 1]);
//     }
//     // top right
//     if (row > 0 && Math.abs(matrix[row - 1][col + 1] - matrix[row][col]) <= 1) {
//       neighbors.push([row - 1, col + 1]);
//     }
  
//     // bottom
//     if (row < matrix.length - 1 && Math.abs(matrix[row + 1][col] - matrix[row][col]) <= 1) {
//       neighbors.push([row + 1, col]);
//     }
  
//     // bottom left
//     if (row < matrix.length - 1 && Math.abs(matrix[row + 1][col - 1] - matrix[row][col]) <= 1) {
//       neighbors.push([row + 1, col - 1]);
//     }
  
//       // bottom right
//       if (row < matrix.length - 1 && Math.abs(matrix[row + 1][col + 1] - matrix[row][col]) <= 1) {
//           neighbors.push([row + 1, col + 1]);
//         }
//       // left
//       if (col > 0 && Math.abs(matrix[row][col - 1] - matrix[row][col]) <= 1) {
//           neighbors.push([row, col - 1]);
//         }
//       // right
//       if (col < matrix[row].length - 1 && Math.abs(matrix[row][col + 1] - matrix[row][col]) <= 1) {
//           neighbors.push([row, col +  1]);
//       }
//     console.log(neighbors);
//     return neighbors
//   }

function trenchTraversal(node, matrix, visited) {

 

    const [row,col]=node

 

    const stack=[node]

    let pathArray=[]

    visited.add(([row,col].toString()))

    while(stack.length){

        const current=stack.pop()

        pathArray.push(current)

        console.log(pathArray)

        const [currentRow,currentCol]=current

        const currentNode=matrix[currentRow][currentCol]

     

        const neighbors=findNeighbors(current,matrix)

        neighbors.forEach(neighbor=>{

            const neighborString=([neighbor[0],neighbor[1]].toString())

            if(!visited.has(neighborString)){

                visited.add(neighborString)

                stack.push(neighbor)

            }

            if (visited.has(neighbor[0]-1 && neighbor[1]-1)){

                return false

            }

        })

        if(pathArray.length>=3){

            console.log(true)

            return true

        }

       

    }

 

    return false

}


 

function identifyTrench(trenchMatrix) {

    const visited=new Set()

    const start=trenchMatrix[0][0]

   

   

    if (trenchTraversal(start,trenchMatrix,visited)){

        return true

    }

    // Start at 0,0 and attempt to traverse any unvisited nodes



 

    return null

}
module.exports = [identifyTrench, findNeighbors, trenchTraversal];