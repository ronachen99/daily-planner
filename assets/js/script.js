$(function () {

  // Updates the current date and time in the header every one second
  function displayCurrentTime() {
    var currentDayEl = $('#currentDay');
    var now = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
    currentDayEl.text(now);
  }
  setInterval(displayCurrentTime, 1000);

  // The following loop makes the container for each time block from 8AM to 8PM
  var hours = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  for (var x = 0; x < hours.length; x++) {
    var taskContainerEl = $('#task-container');
    var divContainer = $('<div>');
    divContainer.id = hours[x];
    // Adds class to the newly created div, including the class responsible for the color change
    divContainer.addClass('row', 'time-block', changeColor(hours[x]));
    // Renders time label and saved tasks within each time block
    divContainer.html(`<div class="col-2 col-md-1 hour text-center py-3">${changeHour(hours[x])}</div>
   <textarea class="col-8 col-md-10 description" rows="3">${localStorage.getItem(hours[x]) || ''}</textarea>
   <button class="btn saveBtn col-2 col-md-1" aria-label="save" id='${hours[x]}'>
     <i class="fas fa-save" aria-hidden="true"></i>
     </button>`);

    taskContainerEl.append(divContainer);
  }

});