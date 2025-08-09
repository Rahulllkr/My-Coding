// while loop
//1.
let n = 5
let factorial = 1;
while (n > 0){
    factorial = factorial*n;
    n--;
}
console.log(factorial);

let original = 54345;
let num = original
let reverseNum = 0;

//2.
while( num > 0){
    let lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = Math.floor(num/10);
  

}
console.log(original === reverseNum ? true:false);



//Logic Building pattern problems

//1.Square of stars

// for(let i = 1 ; i<=5 ; i++){
//     let line = "";
//     for(let j = 1 ; j<=5 ; j++){
//         line += "*";
//     }
//     console.log(line);
// }

//2.Right angle triangle of stars

// for(let i = 1 ; i <= 5 ; i++){
//     let line = "";
//     for(let j = 1 ; j <= i ; j++){
//         line += "*";
//     }
//     console.log(line);
// }

//3.Triangle of numbers

// for(let i = 1 ; i <= 5 ; i++){
//     let line = "";
//     for(let j = 1 ; j <= i ; j++){
//         line += j;
//     }
//     console.log(line);
// }

//4.Reverse triangle of stars

// for(let i = 5 ; i >=1 ; i--){
//     let line = "";
//     for(let j = 1 ; j <= i ;j++){
//         line += "*";

//     }
//     console.log(line);
    
// }

//5.Right aligned triangle

// for(let i = 1 ; i <= 5 ; i++){
//     let line = "";
//     for(let space = 1 ; space <= 5-i ; space++){
//          line += " ";
//     }
//     for(let star = 1 ; star <= i ; star++){
//         line += "*"
//     }
//     console.log(line);
// }

//6.Number Pyramid

// for(let i = 1 ; i <= 5 ; i++){
//     let line = "";
//     for(let space = 1 ; space <= 5-i ; space++){
//         line = line + " ";
//     }
//     for(let num = 1 ; num <= i ; num++){
//         line += num;
//     }
//     for(let num = i-1 ; num >= 1; num--){
//         line += num;
//     }
//     console.log(line);
// }


//lec-4:Know Basic Math

//1.count Digit

function countDigit(num){
    let count = 0;
    while(num > 0){
        count++
        num = Math.floor(num/10)
    }
    return count;

}
let num = 549876
console.log(countDigit(num))

//2.Reverse Digit Of Number

function reverseNUm(digit){
    let rev = 0;
    while(digit > 0){
        let last = digit%10;
        rev = rev * 10 + last;
        digit = Math.floor(digit/10);
    }
    return rev;
}
let digit = 123456;
console.log(reverseNUm(digit));

//3.Check if a Number Palindrome or Not

function checkPalindromNumber(num){
    let original = num;
    let rev = 0;
    while(num > 0){
        let last = num%10;
        rev = rev * 10 + last;
        num = Math.floor(num/10);
    }

     return rev == original ? "Palindrom Number":"Not Palindrom Number"
}
let num = 123321;
console.log(checkPalindromNumber(num));

//4.Find GCD of Two Number;

function findGCD(n1,n2){
    let mininumNumber = Math.min(n1,n2)
    let GCD = 1;
    for(let i = 0 ; i <= mininumNumber ; i++){
        if(n1 % i === 0 && n2 % i === 0){
            GCD = i;
        }
    }
    return `GCD of ${n1} and ${n2} is : ${GCD}`;
}
let n1 = 20;
let n2 = 15;
console.log(findGCD(n1,n2))

//5.Check if a Number is Arstrong Number or Not;

function armstrongNumber(num){
    let power = String(num).length
    let sum = 0;
    let originalNum = num;
    while(num > 0){
        let last = num%10;
        sum = sum + Math.pow(last,power);
        num = Math.floor(num/10);
    }
    return sum === originalNum ? true:false;
}
let num = 153;
console.log(armstrongNumber(num));

//6.Print all Divisors of a given Number;

function allDivisors(num){
    let output = []
    for(let i = 1  ; i <= num ; i++){
        if(num % i === 0){
            output.push(i)
        }
    }
    return output;
}
let num = 12;
console.log(allDivisors(num));

//7.Check if a number is Prime or Not;

function checkPrime(n){
    let count = 0;
    for(let i = 1 ; i <= n ; i++){
        if(n % i === 0){
            count++
        }
    }
    return count === 2 ? true : false;
}
let n = 11;
console.log(checkPrime(n));

//Lec-5:Learn Basic Recurtion

//1.Understand recurtion by print something N times

function counting(n, count = 1) {
    if (count == n) {
      console.log(count);
    } else {
      console.log(count);
      return counting(n, count + 1);
    }
  }
let n = 10;
counting(n);

  
//2.Print Name n times using recurtion

function printName(n,times = 1){
    if(times == n){
        console.log("Name")
    }else{
        console.log("Name")
        return printName(n,times+1)
    }
    
    }
    let n = 6
    printName(n);

//3.Print 1 to N using recurtion

function printNum (n,count = 1){
    if(count == n){
        console.log(count);
    }else{
        console.log(count);
        printNum(n,count+1)
    }

}
let n = 10
printNum(n);

//4.Print N to 1 using recurtion

function printNto1(n){
    if(n == 0)return;
    console.log(n)
    printNto1(n-1);

}
let n = 5;
printNto1(n);

//5.Sum of first N Natural Number;

// using for loop
function sumOfNum(n) {
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
         sum = sum + i;
    }
    return sum;
}
let n = 11;
console.log(sumOfNum(n));

//using sum of N Natural number formula = n(n+1)/2
function sumOfNum(n) {
    let sum  = n*(n+1)/2
    return sum;
}
let n = 11;
console.log(sumOfNum(n));

//using recurtion
function sumOfNum(n) {
   if(n == 0){
    return 0;
   }
   return n+sumOfNum(n-1)
}
let n = 11;
console.log(sumOfNum(n));

//6.Factorial of number : iterative and recursive;

//using iterative
function factorial(n) {

    let fact = 1;
    for(let i = 1 ; i <= n ; i++){
        fact = fact * i;
    }
    return fact;

}
let n = 3;
console.log(factorial(n));

//using recurtion
function factorial(n) {

    if( n == 0){
        return 1;
    }
    return n*factorial(n-1);

}
let n = 6;
console.log(factorial(n));

//7. Reverse a given Array

//using an empty array with loop
function reverse(arr){

    let newArr = [];
    for(let i = arr.length-1 ; i >= 0 ; i--){
        newArr.push(arr[i]);
    }
    return newArr;


}
let arr = [1,2,3,4,5]
console.log(reverse(arr));

//without extra array with iterative two pointer
function reverse(arr) {

    
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    let temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
    p1++;
    p2--;
  }
  return arr;


}
let arr = [1, 2, 3, 4, 5, 6];
console.log(reverse(arr));

// using recursive method
function reverse(arr, start, end) {

  if (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverse(arr, start + 1, end - 1);
  }

  return arr;
  
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(reverse(arr, 0, arr.length - 1));

//8.check if the given string is Palindrome or not

//using loop
function checkPalindrome(str) {

  let left = 0;
  let right = str.length - 1;
  while (left < str.length / 2) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
  
}
let str = "abcbacba";
console.log(checkPalindrome(str));

//using recurtion
function palindrome(i,str){

  if(i >= str.length/2){
    return true;
  }
  if(str[i] !== str[str.length-1-i]){
    return false;
  }
  return palindrome(i+1,str);


}
let str = "malayalam";

console.log(palindrome(0,str));

//9.Print Fibonacci Series up to Nth term ;

//using loop 

let n = 5;
if(n == 0){
  console.log(0)
}else{
  let fib = new Array(n+1);
  fib[0] = 0;
  fib[1] = 1;
  for(let i = 2 ; i <= n ; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  console.log(`Fibonacchi Series of ${n}th term`)
  for(let i = 0 ; i <= n ; i++){
    process.stdout.write(`${fib[i]} `)
  }
}

//using loop

let n = 4;
if(n == 0){
  console.log(0)
}else{
  let secondLast = 0;
  let last = 1;
  process.stdout.write(secondLast + " " + last + " ")
  let cur;
  for(let i = 2 ; i<= n ; i++ ){
    cur = secondLast + last
    secondLast = last;
    last = cur;
    process.stdout.write(cur + " ")
  }
}

//using recurtion
function fib(n){
if(n <= 1){
  return n;
}else{
  let last = fib(n-1);
  let secondlast = fib(n-2);
  return last+secondlast;
}
}
let n = 4
console.log(fib(n));

