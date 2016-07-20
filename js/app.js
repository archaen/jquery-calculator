$( document ).ready(function() {

  //when a button(span) is pushed add value to screen if it doesn't have an ID
  $('span').on('click', function(){
    if (!this.id) {
      $('#screen').append($( this ).text());
    }
  })

  //c button clears screen
  $('#clear').on('click', function(){
    $('#screen').empty()
  })
  // operator object place computer readable forms

  //evaluate expressions and check for bad format
  $('#equals').on('click', function(){
    var screenInput = $('#screen').text().replace( 'x', "*").replace('÷', '/');
    console.log(screenInput);
    $('#screen').empty().append(eval(screenInput));
  })

//   Click the equals button to evaluate the arithmetic expression shown in the screen.
// If the expression is in format operand(+|-|x|÷)operand, evaluate the expression and update the screen with the result.
// If the expression isn't in the correct format or when attempting to divide by zero, update the screen with the message Error.

});
