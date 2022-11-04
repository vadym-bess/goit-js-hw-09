import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputArea = document.querySelector("#datetime-picker");
console.log(inputArea);

function flatpickr(selector, options) {
    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
          console.log(selectedDates[0]);
        },
      };
}