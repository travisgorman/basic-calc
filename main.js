

document.querySelector('button').onclick = function(){

  // console.log( 'travis' );
  
  var num1 = document.querySelector( '#num1' ).value;
  var num2 = document.querySelector( '#num2' ).value;

  if ( isNaN( num1 ) ) {
    alert('Numbers Only, Please');

  } else {

    sum = Number( num1 ) + Number( num2 );
    
    document.querySelector('.display').innerHTML = sum;
  }
  
  console.log( sum );
};


