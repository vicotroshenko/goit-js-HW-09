import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonStartDate = document.querySelector('[data-start]');
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
	return setTimer(selectedDates[0])
		
  },
};
flatpickr("#datetime-picker", options);


let timerId = null;
const TIME_INTERVAL = 1000;
buttonStartDate.disabled = true;

function setTimer(date) {
	const currentTime = new Date().getTime();
	const chosenTime = date.getTime();
	if(chosenTime - currentTime < 0){
		buttonStartDate.disabled = true;
		return Notify.failure('Please choose a date in the future');
	}
	buttonStartDate.disabled = false;
	const clickButton = buttonStartDate.addEventListener('click', () => startTimer(date));
}

function startTimer(date) {
	timerId = setInterval(() => {
		const currentTime = new Date().getTime();
		const chosenTime = date.getTime();
		buttonStartDate.disabled = true;
		const timeDifference = chosenTime - currentTime;
		convertMs(timeDifference) 
		
	}, TIME_INTERVAL)
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return setMarkup({ days, hours, minutes, seconds });
	
};

function setMarkup({days, hours, minutes, seconds}){
	if(days < 0){
		return clearInterval(timerId);
	} 
	console.log(`${days}:${hours}:${minutes}:${seconds}`)
	daysEl.textContent = pad(days);
	hoursEl.textContent = pad(hours);
	minutesEl.textContent = pad(minutes);
	secondsEl.textContent = pad(seconds);
}

function pad(value) {
	return String(value).padStart(2, "0")
}


