const readline = require('readline').createInterface({

  input: process.stdin,

  output: process.stdout

});



readline.question('', n => {

  let mat = [];

  let count = 0;

  readline.on('line', (line) => {

    mat.push(line.split(' ').map(Number));

    count++;

    if(count == n) {

      alternateMatrixSum(mat, n);

      readline.close();

    }

  });

});



function alternateMatrixSum(mat, n) {

  let black=0;

  let white=0;

  for(let i=0;i<n;i++){

    if(i%2==0){

    for(let j=0;j<n;j++){

      if(j%2==0){

      black=black+mat[i][j];

      }else{

      white=white+mat[i][j];

    }}}else{

      for(let j=0;j<n;j++)

      if(j%2!=0){{

        black=black+mat[i][j];

      }}else{

      white=white+mat[i][j];

      }}



    

  }

  console.log(black)

  console.log(white)

  }