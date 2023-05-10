var currentDayEl = $('#currentDay');

function displayCurrentTime () {
  var now = dayjs().format('dddd, MMMM D, YYYY h:mm A');
  currentDayEl.text(now);
}
setInterval(displayCurrentTime, 1000);

var hours =['09', '10', '11', '12', '13', '14', '15', '16', '17'];