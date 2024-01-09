//Color-code each time block based on past, present, and future when the time block is viewed.
//Allow a user to enter an event when they click a time block
//Save the event in local storage when the save button is clicked in that time block.
//Persist events between refreshes of a page -->
$(document).ready(function () {
  const currentDay = dayjs();
  $("#currentDay").text(currentDay.format("D MMM YYYY"));

  const currentTime = dayjs().hour();
  const timeSlot = $(".time-row");
  const saveBtn = $("saveBtn");
  const hourEl = $(".hour");
  const inputEl = $(".task-input");

  addColours();
  //Check if the current hour is past/present/futures
  //add a special colour for each time slot

  function addColours() {
    timeSlot.each(function () {
      let rowTime = parseInt($(this).attr("data-time"), 10);
      console.log(rowTime);
      console.log(currentTime);
      if (currentTime === rowTime) {
        $(this).find(".task-input").addClass("present");
      } else if (currentTime < rowTime) {
        $(this).find(".task-input").addClass("future");
      } else if (currentTime > rowTime) {
        $(this).find(".task-input").addClass("past");
      }
    });
  }
});
