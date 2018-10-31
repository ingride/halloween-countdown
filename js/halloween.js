var halloweenDay = 31;
var halloweenMonth = 10;

var x = setInterval(function () {
  var now = new Date();
  if (now.getMonth() === halloweenMonth - 1 && now.getDate() === halloweenDay) {
    document.getElementById("counter").innerHTML = "HAPPY HALLOWEEN! 🎃";
    document.getElementById("content").innerHTML = "";
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
        
    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    document.getElementById("content").innerHTML = "<h2>UNTIL HALLOWEEN</h2>";
  }
}, 1000);