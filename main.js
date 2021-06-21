//Watch Time Section
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  //Color Button Section
var clrBtn1 = document.getElementById('color-btn1')
var clrBtn2 = document.getElementById('color-btn2')
var clrBtn3 = document.getElementById('color-btn3')
var clrBtn4 = document.getElementById('color-btn4')
var watchBand = document.getElementById('watch')

clrBtn1.addEventListener('click', function(){
    var watchImg = 'https://i.imgur.com/Mplj1YR.png'
    watchBand.src = watchImg;
})
clrBtn2.addEventListener('click', function(){
    var watchImg = 'https://i.imgur.com/PTgQlim.png'
    watchBand.src = watchImg;
})
clrBtn3.addEventListener('click', function(){
    var watchImg = 'https://i.imgur.com/iOeUBV7.png'
    watchBand.src = watchImg;
})
clrBtn4.addEventListener('click', function(){
    var watchImg = 'https://i.imgur.com/xSIK4M8.png'
    watchBand.src = watchImg;
})

//Features Button Section

var timeBtn = document.getElementById('time-btn')
var rateBtn = document.getElementById('heart-rate-btn')
var timeNow = document.getElementById('time')
var heartRate = document.getElementById('heart-rate')
rateBtn.addEventListener('click', function(){
    timeNow.style.display = "none"
    heartRate.style.display = "block"
})

timeBtn.addEventListener('click', function(){
    timeNow.style.display = "block"
    heartRate.style.display = "none"
})