var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

var numberSwitch = [];

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

$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    var userNum = parseInt($("input#userNum").val());
    alert("User number is " + userNum);
    event.preventDefault();
    $(".result").show();

    var numbers = [1];
    for (var index = 1; index <= userNum; index += 1) {
      number.push(index);
      alert(index);
    };
  });
  $("button#reset").click(function(event) {
    location.reload();
  });
});
