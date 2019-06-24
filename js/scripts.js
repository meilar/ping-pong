$(document).ready(function() {

  var numbers = []
  var numberSwitch = [];

  for (var index = 1; index <= userNum; index += 1) {
    numbers.push(index);
    alert(index);
  };

  numbers.forEach(function(number) {
    if ((number % 3 == 0) && (number % 5 != 0)) {
      numberSwitch.push("ping");
    } else if ((number % 5 == 0) && (number % 3 != 0)) {
      numberSwitch.push("pong");
    } else if ((number % 3 == 0) && (number % 5 == 0)) {
      numberSwitch.push("pingpong")
    } else {
      numberSwitch.push(number);
    };
  });

  $("form#user-input").submit(function(event) {
    var userNum = parseInt($("input#userNum").val());
    alert("User number is " + userNum);
    alert("output array" + numberSwitch);
    event.preventDefault();
    $(".result").show();
  });
  $("button#reset").click(function(event) {
    location.reload();
  });
});
