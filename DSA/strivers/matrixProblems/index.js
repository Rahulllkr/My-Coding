//Create a Matrix
// let rows = 4;
// let columns = 2;
// let matrix = [];

// for(let i = 0 ; i < rows ; i++){
//     let row = [];
//     for(let j = 0 ; j < columns ; j++){
//         row.push(5)
//     }
//     matrix.push(row);
// }
// console.log(matrix);


//Print a Matrix
// let matrix = [
//     [10,20],
//     [30,40],
//     [50,60]
// ]

// for(let i = 0 ; i < matrix.length ; i++){
//     for(let j = 0 ; j < matrix[2].length ; j++){

//         console.log(matrix[i][j]);


//     }
// }


//Sum of all matrix element
// let matrix = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]

// let sum = 0;

// for(let i = 0 ; i<matrix.length ; i++){
//     for(let j = 0 ; j < matrix[i].length ; j++){
//         sum += matrix[i][j];
//     }
// }
// console.log(sum);


//Transpose of Matrix

// let matrix = [
//     [1,2,3],
//     [4,5,6]
// ]
// let transpose = [];

// for(let i = 0 ; i < matrix[0].length ; i++){
//     let row = [];
//     for(let j = 0 ; j < matrix.length ; j++){

//         row.push(matrix[j][i]);

//     }
//     transpose.push(row);
    
// }
// console.log(transpose);


//Diagonal Elements

// let matrix = [
//     [9,8,7],
//     [6,5,4],
//     [3,2,1]
// ]

// for(let i = 0 ; i < matrix.length ; i++){
//     console.log(matrix[i][i]);
// }


//create matrix 3*3 matrix filled with 0s

// let matrix = [];
// for(let i = 0 ; i < 3 ; i++){
//     let row = [];
//     for(let j = 0 ; j < 3 ; j++){
//         row.push(0);
//     }
//     matrix.push(row);
// }

// console.log(matrix);


// Count how many times number 1 appears

// let matrix = [
//     [1,2,1],
//     [3,1,4],
//     [5,6,1]
// ]

// let count = 0;

// for(let i = 0 ; i < matrix.length ; i++){
//     for(let j = 0 ; j < matrix[i].length ; j++){
//         if(matrix[i][j] === 1){
//             count++
//         }
//     }
// }
// console.log(count);

//find the maximum number in the matrix

// let matrix = [
//     [5,2,8],
//     [4,7,1],
//     [8,3,6]
// ]

// let maxElement = -Infinity;

// for(let i = 0 ; i < matrix.length ; i++){
//     for(let j = 0 ; j < matrix[i].length ; j++){
//         if(matrix[i][j] > maxElement){
//             maxElement = matrix[i][j];
//         }
//     }
// }

// console.log(maxElement);

//Print all elements of last row;

// let matrix = [
//     [3,4,5],
//     [6,7,8],
//     [9,10,11]
// ]

// let j = matrix[matrix.length-1]

// for(let i = 0 ; i < j.length ; i++ ){
//     console.log(j[i]);
// }


//Print all elements of first column;

// let matrix = [
//     [11,12,13],
//     [14,15,16],
//     [17,18,19]
// ]

// for(let i = 0 ; i < matrix.length ; i++){
//     console.log(matrix[i][0])
// }

// Replace all even elements with 0s in matrix;

// let matrix = [
//     [1,2,3],
//     [4,5,6]
// ]

// for(let i = 0 ; i < matrix.length ; i++){
//     for(let j = 0 ; j < matrix[i].length ; j++){
//         if(matrix[i][j] % 2 === 0){
//             matrix[i][j] = 0;
//         }
//     }
// }

// console.log(matrix);

//

