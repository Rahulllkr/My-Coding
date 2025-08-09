//check palindrome or not

function check(str){
// first convert to lowerCase and upperCase
// check current element is alphabet or not ele > ""
//two pointer approach se first and last value
str = str.toLowerCase()
let left = 0
let right = str.length-1

while(left < right){

    if(!isPalindrome(str[left])){
        left++;
        continue;
    }
    if(!isPalindrome(str[right])){
        right--;
        continue;
    }

    if(str[left] !==  str[right]){
        return false;
    }

    left++;
    right--;

    
}
return true
}

function isPalindrome(ch){

    let code = ch.charCodeAt(0)
    return (
        (code >= 48 && code <= 57) ||  
        (code >= 97 && code <= 122)
    )

}

// let str = "A man, a plan, a canal: Panama"
let str = "race a car"

console.log(check(str));