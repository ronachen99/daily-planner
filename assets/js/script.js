$(function () {
  // Retrieve time using dayjs and display it in the header
  function displayCurrentTime() {
    var currentDayEl = $('#currentDay');
    var now = dayjs().format('dddd, MMMM D, YYYY h:mm:ss A');
    currentDayEl.text(now);
  }

  // Update the retrieved time every one second
  setInterval(displayCurrentTime, 1000);

  // Create the container for each time block from 8AM to 8PM
  var hours = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  for (var x = 0; x < hours.length; x++) {
    var taskContainerEl = $('#task-container');
    var divContainer = $('<div>');
    // Add classes to the newly created div, including the class responsible for the color change
    divContainer.addClass('row', 'time-block', changeColor(hours[x]));
    // Add an id for the div container and set it to the hour within the array
    divContainer.attr('id', hours[x]);
    // Add the time label and render the tasks that were set to each time block, then provive an unique hour id to each button 
    divContainer.html(`<div class="col-2 col-md-1 hour text-center py-3">${changeHour(hours[x])}</div>
   <textarea class="col-8 col-md-10 description" rows="3">${localStorage.getItem(hours[x]) || ''}</textarea>
   <button class="btn saveBtn col-2 col-md-1" aria-label="save" id='${hours[x]}'>
     <i class="fas fa-save" aria-hidden="true"></i>
     </button>`);

    taskContainerEl.append(divContainer);
  }

  // Compare the current hour reading to the time blocks
  function changeColor(hour) {
    // Identify the current hour in a 24hr reading format
    var currentHour = dayjs().format('HH');
    if (hour > currentHour) {
      divContainer.addClass('future');
    } else if (hour === currentHour) {
      divContainer.addClass('present');
    } else {
      divContainer.addClass('past');
    }
  }

  // Replace hour into X:00 AM or X:00 PM format on the webpage
  function changeHour(hour) {
    switch (hour) {
      case '08':
        return '8:00 AM';
      case '09':
        return '9:00 AM';
      case '10':
        return '10:00 AM';
      case '11':
        return '11:00 AM';
      case '12':
        return '12:00 PM';
      case '13':
        return '1:00 PM';
      case '14':
        return '2:00 PM';
      case '15':
        return '3:00 PM';
      case '16':
        return '4:00 PM';
      case '17':
        return '5:00 PM';
      case '18':
        return '6:00 PM';
      case '19':
        return '7:00 PM';
      case '20':
        return '8:00 PM';
    }
  }

  // Save tasks on click into the local storage
  var saveButtonEl = $('.saveBtn');
  saveButtonEl.on('click', function () {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('.description').val())
  })
});