//Color-code each time block based on past, present, and future when the time block is viewed.
//Allow a user to enter an event when they click a time block
//Save the event in local storage when the save button is clicked in that time block.
//Persist events between refreshes of a page -->
$(document).ready(function () {
  const currentDay = dayjs();
  $("#currentDay").text(currentDay.format("D MMM YYYY"));
});

//Present time blocks for standard business hours when the user scrolls down (9 - 17).
for (let i = 9; i <= 17; i++) {
  let currentHour = dayjs().hour();
  let rowEl = $("<div>").addClass("row");
  let hourEl = $("<div>")
    .addClass("col-2 hour")
    .text(dayjs(i, "H").format("hA"));
  let eventEl = $("<input>").addClass("col-8 event").attr("id", i);
  let saveBtn = $("<button>").addClass("col-2 saveBtn").text("Save");

  if (i < currentHour) {
    eventEl.addClass("past");
  } else if (i === currentHour) {
    eventEl.addClass("present");
  } else {
    eventEl.addClass("future");
  }

  rowEl.append(hourEl, eventEl, saveBtn);
  $(".container").append(rowEl);
}

//handleTaskSubmit
//printTask
