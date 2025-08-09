// let numbers = new Set();

// numbers.add(10)
// numbers.add(20)
// numbers.add(30)
// numbers.add(10)
// numbers.add(40)

// console.log(numbers)
// console.log(typeof numbers) // object
// console.log(numbers.has(40)) // true
// console.log(numbers.values()) // [set iterator] {10,20,30,40}
// console.log(numbers.delete(10))
// console.log(numbers)
// console.log(numbers.size)




// Iterating a set

// let fruits = new Set();

// fruits.add("Apple")
// fruits.add("Banana")
// fruits.add("Papaya")

// for(let fruit of fruits){
//     console.log(fruit);
// }



// Make a function that is remove of all dublicates of array

// let arr = [1,2,2,3,4,4,5]

// function checkDublicates(arr){

//     let newObj = new Set()

//     for(let ele of arr){
//         newObj.add(ele)
//     }

//     console.log(newObj);

// }

// checkDublicates(arr);




//Check unique character in string

// function uniqChar(str){
//     //logic is, if all char are different so push in set and check the str and set length if equal that means all char are different else not.

//     let check = new Set(str)

//     if(str.length === check.size){
//         return true;
//     }else{
//         return false
//     }

// }

// // let str = "abcd"
// let str = "aacd"

// console.log(uniqChar(str))




//count unique elements

// function count(arr){

//     let count = 0;
//     let set = new Set(arr);

//     for(let ele of set){
//         if(ele){
//             count++
//         }
//     }

//     console.log(count);

// }

// let arr = [1,2,3,4,1,2,5,5]

// count(arr);


//check common element 


// function checkCommon(arr1,arr2){

//     let diff = new Set(arr1)

//     for(let ele of arr2){
//         // console.log(ele)
//         if(diff.has(ele)){
//             console.log(`${ele} is Common`)
//         }else{
//             console.log(ele,"Not Is Common")
//         }
//     }

// }

// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,3]

// checkCommon(arr1,arr2)



// remove dublicates from string

// function dub(str){

//     let diff = new Set(str);

//     let newStr = ""

//     for(let char of diff){
//         newStr = newStr + char
//     }

//     console.log(newStr)

// }

// let str = "programming"

// dub(str);


//first repeated character in string

// function first(str){

//     let diff = new Set(str)
//     let count = 0;

//     for(let char of str){
//         if(diff.has(char)){
//             count++;
//         }
//         if(count === 2){
//             return char;
//         }
//     }

//     return null;

// }

// let str = "abcdbea"

// console.log(first(str))



//find missing number


// function missing(arr,n){

//     let container = new Set(arr)

//     for(let i = 1 ; i < n ; i++){
//         if(!container.has(i)){
//             return i
//         }
//     }

//     return "No missing Number"

// }

// let arr = [1,2,4,5]
// let n = 5
// console.log(missing(arr,n))



//are two string Anagrams

// function anagram(s1,s2){

//     let container = new Set(s1);
//     let count = 0;

//     if(s1.length !== s2.length)return false;
    
//     for(let char of s2){

//         if(!container.has(char)){
//             count++
//         }
//         if(count === 2){
//             return false
//         }

//     }

//     return true;

// }

// let str1 = "listen"
// let str2 = "silent"
// console.log(anagram(str1,str2))



//Unique words count in sentence


// function count(str){

//     str = str.split(" ")
//     let container = new Set(str)
//     console.log(container)

//     console.log(container.size)

// }
// let str = "this is is a test test string"
// count(str)




//find the interception of arrays

// function interception(arr1,arr2){

//     let res = new Set()
//     let diff = new Set(arr1)

//     for(let i = 0 ; i < arr1.length-1; i++){

//         if(diff.has(arr2[i])){
//             res.add(arr2[i])
//         }
//     }
//     return res;

// }


// let arr1 = [1,2,3,4]
// let arr2 = [3,4,5,6]

// console.log(interception(arr1,arr2));







// function sum(mat){
//     let firstSum = 0;
//     let secondSum = 0;
//     let srow = 0 ; 
//     let scol = 0;
//     let erow = mat.length-1 ; 
//     let ecol = mat.length-1;

//    while(srow <= erow && scol <= ecol){

//      for(let i = scol ; i <= ecol ; i++){
//         firstSum += (mat[srow][i])
//     }
//     for(let i = srow+1 ; i <= erow  ; i++){
//         firstSum += mat[i][ecol];

    
//     }  
//     srow++;
//     scol++;
//     erow--;
//     ecol--;
//    }

//    let row = 0;
//    let col = 0;
//    for(let i = row; i <= mat.length-1 ; i++){
//        secondSum += mat[i][col];
//        col++;
//    }

//     console.log(firstSum);
//     console.log(secondSum);

// }

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// sum(arr);


function fibo(n){
    if(n == 0) return 0;
    if(n === 1) return 1

        let last = fibo(n-1);
        let secondLast = fibo(n-2);
        return last+secondLast;
}
console.log(fibo(6))

console.log("My Github Set Successfully")

