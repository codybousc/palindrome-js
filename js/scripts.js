var palindrome = function(word) {
var x = word;
var n = x.split("").reverse().join('');

  if (x === n) {
    return true;
  }
  else {
    return false;
  }
};


$(document).ready(function(){
  $("form#palindrome").submit(function(event){
    var user_input = $("input#user_word").val();
    var palind = palindrome(user_input);

    if(palind === true) {
      $(".not").hide();
      $("#result").show();
    } else {
      $(".not").show();
    }
    event.preventDefault();
  });

});
