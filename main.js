// map .first input #num1 to num1 parameter
// 

function add( num1, num2 ){
  var sum = num1 + num1;
  return sum;
}

// on click, `#button` calls `add()`, 
// passing in the values of `#num1` and `#num2` as its arguments

// inject the return value into the `h1` of `.display`

// console.dir(document.querySelector('#button'));

document.querySelector('#button').onclick = function(){
  console.log(
      document.querySelector('#num1')
    + document.querySelector('#num2')
  )
};


console.log( document.querySelector('#num2') );
