const clock = document.querySelector("#clock");

setInterval(function () {
  const currentTime = new Date().toLocaleTimeString();
  clock.innerHTML = currentTime;
}, 1000);
