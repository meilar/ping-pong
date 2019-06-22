$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    var userNum = parseInt($("input#userNum").val());
    alert("User number is " + userNum);
    event.preventDefault();
    $(".result").show();

    alert("2nd stage");
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
