//Save the event in local storage when the save button is clicked in that time block.
//Persist events between refreshes of a page -->
$(document).ready(function () {
  const currentDay = dayjs();
  $("#currentDay").text(currentDay.format("D MMM YYYY"));

  const currentTime = dayjs().hour();
  const timeSlot = $(".time-row");
  const saveBtn = $(".saveBtn");

  addColours();
  saveToStorage();
  getFromStorage();

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

  //Allow user to save the task in the local storage
  function saveToStorage() {
    saveBtn.on("click", function (e) {
      e.preventDefault();
      const line = $(this).closest(".time-row");
      const taskId = line.attr("data-time");
      const dataInput = line.find(".task-input").val();

      localStorage.setItem(taskId, dataInput);
    });
  }

  //get from localStorage
  function getFromStorage() {
    timeSlot.each(function () {
      let rowTime = parseInt($(this).attr("data-time"), 10);
      let savedTask = localStorage.getItem(rowTime);

      if (savedTask !== null) {
        $(this).find(".task-input").val(savedTask);
      }
    });
  }
});
