// let matrix = [
//     [1,2,3,4],
//     [5,6.7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// function traversal(mat){

//     for(let i = 0 ; i < mat.length ; i++){
//         for(let j = 0 ; j < mat[i].length ; j++){
//             process.stdout.write(mat[i][j] + " ")
//         }
//     }

// }

// traversal(matrix)

// column wise traversal mat output = 1,4,7,2,5,8,3,6,9

// function colTraversal(mat){

//     for(let i = 0 ; i < mat[0].length ; i++){
//         for(let j = 0 ; j < mat.length ; j++){
//             process.stdout.write(mat[j][i] + " ")
//         }
//     }

// }

// colTraversal(matrix)

//Spiral traversal  = 1,2,3,6,9,8,7,4,5

// function spiral(mat) {
//   let srow = 0;
//   let scol = 0;
//   let erow = mat.length - 1;
//   let ecol = mat.length - 1;

//   while (srow <= erow && scol <= ecol) {
//     for (let i = scol; i <= ecol; i++) {
//       process.stdout.write(mat[srow][i] + " ")
//     }

//     for (let i = srow + 1; i <= erow; i++) {
//         if(srow === erow){
//             break;
//         }
//       process.stdout.write(mat[i][ecol] + " ")
//     }

//     for (let i = ecol - 1; i >= scol; i--) {
//       process.stdout.write(mat[erow][i] + " ")
//     }

//     for (let i = erow - 1; i >= srow + 1; i--) {
//         if(scol ===ecol){
//             break;
//         }
//       process.stdout.write(mat[i][scol] + " ");
//     }
//     srow++;
//     erow--;
//     scol++;
//     ecol--
//   }
// }

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// spiral(matrix);



//zigzag matrix travercel


// function zigzag(mat){

    // let row = 0;

    // for(let i = 0 ; i <= mat.length-1 ; i++){
    //     process.stdout.write((mat[row][i]) + " ")

    //     if(i === mat.length-1){
    //         for(let j = mat.length-1 ; j>= 0 ; j--){
    //             process.stdout.write(mat[row+1][j] + " ")

    //             if(j === 0){
    //                 for(let k = 0 ; k <= mat.length-1 ; k++){
    //                     process.stdout.write(mat[row+2][k] + " ")
    //                 }
    //             }
    //         }
    //     }
    // }


//     for(let i = 0 ; i < mat.length ; i++){
//         if(i % 2 === 0){
//             for(let j = 0 ; j < mat[i].length ; j++){
//                 process.stdout.write(mat[i][j] + " ")
//             }
//         }else{
//             for(let k = mat.length - 1 ; k >= 0 ; k--){
//             process.stdout.write(mat[i][k] + " ")
//         }
//         }
        
//     }

// }

// let mat = [ 
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// zigzag(mat)


 //row wise traverdal 


//  function rowTraversal(arr){

//     for(let i = 0 ; i <= arr.length-1 ; i++){

//         for(let j = 0 ; j <= arr[i].length-1 ; j++){

//             process.stdout.write(arr[i][j] + " ")
//         }
//     }
   

//  }

//  let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//  ]

//  rowTraversal(arr);



//column wise traversal


// function columnTraversal(arr){

//     for(let i = 0 ; i <= arr.length-1 ; i++){
//         for(let j = 0 ; j <= arr.length-1 ; j++){
//             process.stdout.write(arr[j][i] + " ")
//         }
//     }

// }

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//  ]

// columnTraversal(arr);



//diagonal traversal


// function diagonalTraversal(arr){

//     for(let i = 0 ; i <= arr.length -1 ; i++){
//         process.stdout.write(arr[i][i] + " ")
//     }
//     let row = 0;
//       for(let i = arr.length-1 ; i >= 0 ; i--){
//         process.stdout.write(arr[row][i] + " ")
//         row++;
//     }

// }

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//  ]

//  diagonalTraversal(arr);


//spiral matrix

// function spiralMat(arr){

//    let srow = 0 ; erow = arr.length-1;
//    let scol = 0 ; ecol = arr.length-1;
   
//   while(srow <= erow && scol <= ecol){
//     for(let i = scol ; i<= ecol ; i++){
//     process.stdout.write(arr[srow][i] + " ")
//    }
//    for(let i = srow + 1 ; i <= erow ; i++){
//     process.stdout.write(arr[i][ecol] + " ")
//    }
//    for(let i = ecol - 1 ; i>= scol ; i--){
//     process.stdout.write(arr[erow][i] + " ")
//    }
//    for(let i = erow-1 ; i >= srow+1 ; i--){
//     process.stdout.write(arr[i][scol] + " ")
//    }

//   srow++;
//   scol++;
//   ecol--;
//   erow--;
//   }
 

// }


// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
//  ]

//  spiralMat(arr);



//zigzag traversal

// function zigzag(arr){

//     for(let i = 0 ; i <= arr.length-1 ; i++){
//         if(i % 2 === 0){
//             for(let j = 0 ; j <= arr[i].length-1 ; j++){
//                 process.stdout.write(arr[i][j] + " ")
//             }
//         }else{
//             for(let k = arr[i].length-1 ; k >= 0 ; k--){
//                 process.stdout.write(arr[i][k] + " ")
//             }
//         }
//     }

// }

// let arr = [
//     [1,2,3],
//     [5,6,7],
//     [9,10,11]
//  ]

//  zigzag(arr);


//boundary traversal 

function boundary(arr){
    let srow = 0; erow = arr.length-1;
    let scol = 0; ecol = arr.length-1;

    for(let i = scol ; i <= ecol ; i++){
        process.stdout.write(arr[srow][i] + " ")
    }
    for(let j = srow + 1 ; j <= erow ; j++){
        process.stdout.write(arr[j][ecol] + " ")
    }
    for(let k = ecol - 1 ; k >= 0 ; k--){
        process.stdout.write(arr[erow][k] + " ")
    }
    for(let l = erow - 1 ; l >= srow + 1 ; l--){
        process.stdout.write(arr[l][scol] + " ")
    }

}
let arr = [
    [1,2,3],
    [5,6,7],
    [9,10,11]
 ]

 boundary(arr)