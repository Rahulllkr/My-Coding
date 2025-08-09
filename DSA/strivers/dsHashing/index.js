//Array Hashing
// function main(arr){

//     let hash = {};
//     for(let i = 0 ; i<arr.length ; i++){
//         let num = arr[i];
//         hash[num] = (hash[num] || 0) + 1;
//     }

//     let queries = [1,3,5,6,4,2]
//     for(let i = 0 ; i<queries.length ; i++){
//         let num = queries[i];
//         console.log(hash[num] || 0);
//     }



// }
// let arr = [1,2,5,4,7,9,5];

// main(arr);

//String Hashing

// function main(str){
//     let hash = new Array(26).fill(0); 

//     for(let i = 0 ; i < str.length ; i++){
//         const index = str.charCodeAt(i) - 'a'.charCodeAt(0)
//         hash[index]++
//     }

//     const query = ['a','b','d','c']
//     for(let i = 0 ; i < query.length ; i++){
//         const c = query[i];
//         const index = c.charCodeAt(0)-'a'.charCodeAt(0)
//         console.log(`Count of ${c}: ${hash[index]}`);

//     }


// }

// let str = "abcadga"
// main(str);