//find the maximum number
// let arr = [3,5,1,8,2]

// function maximum(arr){
//     let max = 0
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     console.log(max);

// }

// maximum(arr);


//sum of all elements

// let arr = [1,2,3,4,5]

// function sum(arr){
// let sum = 0;
// for(let i = 0 ; i < arr.length ; i++){
//     sum += arr[i]
// }
// console.log(sum)
// }
// sum(arr);



//reverse an array

// let arr = [1,2,3,4,5]

// function reverse(arr){

//     let last =arr.length-1;
//     let first = 0;

//     while ( first < last){
//         [arr[first],arr[last]] = [
//             arr[last],arr[first]
//         ]
//           first++
//           last--
//     }

//     return arr;

// }

// console.log(reverse(arr));



//Count Even or Odd Number

// const arr = [1,4,3,6,8,9]
// function count(arr){

//     let evenCount = 0;
//     let oddCount = 0;

//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] % 2 === 0){
//             evenCount++;
//         }else{
//             oddCount++
//         }
//     }

//     console.log(`Even Count ${evenCount} : Odd Count ${oddCount}`)

// }
// count(arr);



//check if array is sorted


// const arr = [1,2,3,4,5]

// function checkSorted(arr){

//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] > arr[i+1]){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkSorted(arr));





//rotate array by 1

// const arr = [1,2,3,4]

// function rotateArray(arr){

//     let last = arr[arr.length-1]
//    arr.pop()
//    arr.unshift(last)
//    console.log(arr);

// }

// rotateArray(arr);



//Index of the target element after sorting

// let arr = [6,27,2,3,1,5]
// let target = 27;

// function indexOfEle(arr,target){

//     for(let i = 0 ; i < arr.length ; i++){
//         for(let j = i ; j < arr.length ; j++){
//             if(arr[i] > arr[j]){
//                 [arr[i],arr[j]] = [
//                     arr[j],arr[i]
//                 ]
//             }
//         }
//         if(arr[i] === target){
//             return i;
//         }
//     }

    // for(let i = 0 ; i < arr.length ; i++){
    //     if(arr[i] === target){
    //         return i;
    //     }
    // }
    

// }

// console.log(indexOfEle(arr,target));


//insert a given value at given index target in array without remove any element


// const arr = [1,2,3,5]
// const target = 3;
// const value = 4;

// function insertion(arr,target,value){

//     for(let i = arr.length ; i > target ; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[target] = value;

//     console.log(arr);

// }

// insertion(arr,target,value);


// delete element with given index 

// const arr = [10,20,30,40,50]
// const index = 4;

// function deletion(arr,index){
//     for(let i = index ; i < arr.length; i++){
//         arr[i] = arr[i+1]
//     }
//     arr.length = arr.length - 1 ;
//     console.log(arr);
// }

// deletion(arr,index);



//insertion practice question

// const arr = [5,10,15,20]  //output -> [5,99,10,15,20]

// target = 1;

// value = 99

// function insertion(arr,target,value){

//     for(let i = arr.length ; i > target ; i--){
//         arr[i] = arr[i-1];
//     }
//     arr[target] = value

//     console.log(arr);

// }

// insertion(arr,target,value)


// const arr = [1,2,3] //output -> [0,1,2,3]
// let target = 3 , value = 100;

// function insertion(arr,target,value){

//     for(let i = arr.length ; i > target ; i--){
//         arr[i] = arr[i-1];
//     }
//     arr[target] = value

//     console.log(arr);

// }

// insertion(arr,target,value)



//deletion practice question

// const arr  = [99,1,2,3] //output -> [1,2,3]

// let target = 3;

// function deletion(arr,target){
// for(let i = target ; i < arr.length ; i++){
//     arr[i] = arr[i+1];
// }
// arr.length = arr.length -1;
// console.log(arr);

// }

// deletion(arr,target)


//insert 70 at index 2,then delete index 4;

const arr = [10,20,30,40,50]
let insertAt = 2;
let deleteAt = 4;
function deleteInsertion(arr,insertAt,deleteAt){

    for(let i = arr.length ; i > insertAt ; i--){
        arr[i] = arr[i-1]
    }
    arr[insertAt] = 70;
    for(let i = deleteAt ; i < arr.length-1 ; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length -1;

    console.log(arr);
}

deleteInsertion(arr,insertAt,deleteAt);



