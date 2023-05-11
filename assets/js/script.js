$(function () {

  // Updates the current date and time in the header every one second
  function displayCurrentTime() {
    var currentDayEl = $('#currentDay');
    var now = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
    currentDayEl.text(now);
  }
  setInterval(displayCurrentTime, 1000);

});