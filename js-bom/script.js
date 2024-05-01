document.querySelector(".start").addEventListener("click", function () {
  var hours = +(document.getElementById("hour").value);
  var minutes = +(document.getElementById("minute").value);
  var seconds = +(document.getElementById("second").value);
  var seconds = hours * 3600 + minutes * 60 + seconds;
  var screen = document.getElementById("screen");
  var start = document.querySelector(".start");
  start.disabled = true;
  var interval = setInterval(function () {
    if (seconds <= 0) {
      clearInterval(interval);
      screen.innerHTML = "Alarm finished";
      start.disabled = false;
      var sound = document.querySelector(".sound");
      sound.play();
      return;
    }
    var second = seconds % 60;
    var minute = Math.floor((seconds % 3600) / 60);
    var hours = Math.floor(seconds / 3600);

    screen.textContent = hours + "hour " + minute + "minute " + second + "second";
    seconds--;
  }, 1000);
});
