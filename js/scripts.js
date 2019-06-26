// Business Logic
var pingPong = function(userNumber) {
  var alteredArray = [];
  for (var index = 1; index <= userNumber; index += 1) {
    if ((index % 3 == 0) && (index % 5 != 0)) {
      alteredArray.push("ping");
    } else if ((index % 5 == 0) && (index % 3 != 0)) {
      alteredArray.push("pong");
    } else if ((index % 3 == 0) && (index % 5 == 0)) {
      alteredArray.push("pingpong")
    } else {
      alteredArray.push(index);
    };
  };
  return alteredArray;
}


// UI Logic
$(document).ready(function() {

  $("form#user-input").submit(function(event) {
    var userNum = parseInt($("input#userNum").val());
    event.preventDefault();
    var outputArray = pingPong(userNum);
    console.log('output', outputArray);
    outputArray.forEach(function(number) {
      alert(number);
      $("ul#numList").append("<li>" + number + "</li>");
    });
    $(".result").show();
  });
  $("button#reset").click(function(event) {
    location.reload();
  });
});
