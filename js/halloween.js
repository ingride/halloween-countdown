var halloweenDay = 31;
var halloweenMonth = 10;

var x = setInterval(function () {
  var now = new Date();
  if (now.getMonth() == halloweenMonth - 1 && now.getDate == halloweenDay) {
    document.getElementById("counter").innerHTML = "HAPPY HALLOWEEN";
  }
  else {
    var halloweenYear = now.getFullYear();
    if (now.getMonth() > 9) {
      halloweenYear++;
    }
    var countDownDate = new Date(`${halloweenMonth}/${halloweenDay}/${halloweenYear}`);
    var distance = countDownDate - now.getTime();

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    document.getElementById("counter").innerHTML = days + "D " + hours + "H "
      + minutes + "m " + seconds + "s ";
  }
}, 1000);