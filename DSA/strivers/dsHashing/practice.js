// const c = "c";
// const distance = c.charCodeAt(0)-"a".charCodeAt(0)

// console.log(distance);


// let say we want to count how many times each letter shows up;

const word = "aabcab"

const hash = new Array(26).fill(0);
let letter;
let i;

for( i = 0 ; i < word.length ; i++){
    letter = word.charCodeAt(i)-"a".charCodeAt(0);
    hash[letter]++;
   
}

console.log(`count of ${word[0]} : ${hash[0]}`);
console.log(`count of ${word[2]} : ${hash[1]}`);
console.log(`count of ${word[3]} : ${hash[2]}`);


//1.find character charCode ;

function charCode(letter){
    return letter.charCodeAt(0)
};

let lett = "e"
console.log(charCode(lett));

//2. Distance from a

function distance(char){

    return char.charCodeAt(0)-"a".charCodeAt(0);

}
let char = "z";
console.log(distance(char));

//3.count letter in a string

function count(str){
    const hash = new Array(26).fill(0);

    for(let i = 0 ; i < str.length ; i++){
        const letter = str.charCodeAt(i)-"a".charCodeAt(0)
        hash[letter]++;
        
    }
    console.log(`count of a : ${hash[0]}`);
    console.log(`count of b : ${hash[1]}`);
    console.log(`count of c : ${hash[2]}`);
    console.log(`count of e : ${hash[4]}`);
    
};
let str = "abcabcee"
count(str);

//4.find if character is vowel
let ch = "r"
const vowel = (ch) => {
    let vowels = ["a","e","i","o","u"]
    return vowels.includes(ch);

}

console.log(vowel(ch));

//5.create an array of character positions;

function position(str){
    const positions = [];
    for(let i = 0 ; i < str.length ; i++){
        const pos = str.charCodeAt(i) - "a".charCodeAt(0)
        positions.push(pos);
    }
    return positions;
};

let w = "abcxyz"
console.log(position(w));

//6.letter counter

function letterCounter(str){

    const hash = new Array(26).fill(0)

    for(let i = 0 ; i < str.length ; i++){
        const letter = str.charCodeAt(i) - "a".charCodeAt(0);
        hash[letter]++;

    }
    console.log(`count of ${str[0]} : ${hash[0]}`);
    console.log(`count of ${str[1]} : ${hash[15]}`);
    console.log(`count of ${str[3]} : ${hash[11]}`);
    console.log(`count of ${str[4]} : ${hash[4]}`);
};

let apple = "apple"
letterCounter(apple);

//7.letter finder

function catt(str){
    let position = []
    for(let i = 0 ; i < str.length ; i++){
        const letter = str.charCodeAt(i)-"a".charCodeAt(0)
        position.push(letter);
    }
    return position;
};

let cat = "cat"
console.log(catt(cat));

//8.Guess the secret letter
function guess(str){
    const secret = "g".charCodeAt()-"a".charCodeAt(0);
    if(secret === str){
        console.log("correct")
    }else if(secret > str){
        console.log("Too Early !")
    }else{
        console.log("Too Late !")
    }
};

let guessMe = 6
guess(guessMe);

//9.Find missing letter

function missingLetter(str){
  for(let i = 0 ; i < str.length ; i++){
    const current = str.charCodeAt(i);
    const next = str.charCodeAt(i+1);
    if(next !== current+1){
        console.log(String.fromCharCode(current+1));
    }
  }
  console.log("Now No Missing Letter");
};

missingLetter("acdf");

//10.Shift all letter by +1.

function shiftByOne(str){
    let Shift = "";
    for(let i = 0 ; i < str.length ; i++){
        let current = str.charCodeAt(i);
        if(current === 122){
            current = 97;
        }else{
            current++;
        }
        Shift += String.fromCharCode(current);
    }
    return Shift;

};

console.log(shiftByOne("abc"));

//11.Shift all letter by +3 from itself.

function shiftByThree(str){
    let shift = "";

    for(let i = 0 ; i < str.length ; i++){

        let current = str.charCodeAt(i);
        if(current === 122){
            current = 99;
        }else{
            current += 3;
        }
        shift = shift + String.fromCharCode(current);
    }

    return shift;
};
console.log(shiftByThree("abc"));

//12.Count all vowel in a string.

function countVowels(str){

    let vowel = "aeiou"
    let count = 0;

    for(let i = 0 ; i < str.length ; i++){
        if(vowel.includes(str[i])){
            count++
        }
    }
    return count;

};

console.log(countVowels("education"));

//13.letter between two characters.

function btwTwo(start,end){
    const starting = start.charCodeAt(0);
    const ending = end.charCodeAt(0);

    for(let i = starting ; i <= ending ; i++){
        console.log(String.fromCharCode(i));
    };

}
btwTwo("d","g");