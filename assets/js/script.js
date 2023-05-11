$(function () {
  // Gets the current time and displays it in the header
  function displayCurrentTime() {
    var currentDayEl = $('#currentDay');
    var now = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
    currentDayEl.text(now);
  }

  // Updates the time every one second
  setInterval(displayCurrentTime, 1000);

  // Makes the container for each time block from 8AM to 8PM
  var hours = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  for (var x = 0; x < hours.length; x++) {
    var taskContainerEl = $('#task-container');
    var divContainer = $('<div>');
    divContainer.attr('id', hours[x]);
    // Adds classes to the newly created div, including the class responsible for the color change
    divContainer.addClass('row', 'time-block', changeColor(hours[x]));
    // Adds the time label and renders the tasks that were set to each time block, also provives an unique hour/time id to each button 
    divContainer.html(`<div class="col-2 col-md-1 hour text-center py-3">${changeHour(hours[x])}</div>
   <textarea class="col-8 col-md-10 description" rows="3">${localStorage.getItem(hours[x]) || ''}</textarea>
   <button class="btn saveBtn col-2 col-md-1" aria-label="save" id='${hours[x]}'>
     <i class="fas fa-save" aria-hidden="true"></i>
     </button>`);

    taskContainerEl.append(divContainer);
  }

  // Compares the current hour reading with the current time block, that were previously determined
  function changeColor(hour) {
  // Identifies the current hour in a 24hr reading format
  var currentHour = dayjs().format('HH');
    if (hour > currentHour) {
      divContainer.addClass('future');
    } else if (hour === currentHour) {
      divContainer.addClass('present');
    } else {
      divContainer.addClass('past');
    }
  }

  // Replaces hour into XX AM or XX PM format on the webpage
  function changeHour(hour) {
    switch (hour) {
      case '08':
        return '8 AM';
      case '09':
        return '9 AM';
      case '10':
        return '10 AM';
      case '11':
        return '11 AM';
      case '12':
        return '12 PM';
      case '13':
        return '1 PM';
      case '14':
        return '2 PM';
      case '15':
        return '3 PM';
      case '16':
        return '4 PM';
      case '17':
        return '5 PM';
      case '18':
        return '6 PM';
      case '19':
        return '7 PM';
      case '20':
        return '8 PM';
    }
  }

  // Saves tasks on click into the local storage
  var saveButtonEl = $('.saveBtn');
  saveButtonEl.on('click', function () {
    localStorage.setItem(this.id, this.previousElementSibling.value)
  })
});