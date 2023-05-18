function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const refs = {
	buttonStart: document.querySelector('[data-start]'),
	buttonStop: document.querySelector('[data-stop]'),
	bodyRef: document.querySelector('body'),
};

refs.buttonStart.addEventListener('click', onChangeColor);
refs.buttonStop.addEventListener('click', stopChangingColor);

let timerId = null;
refs.buttonStop.disabled  = true;

function onChangeColor(event) {
	timerId = setInterval(() => {
		refs.bodyRef.style.backgroundColor = getRandomHexColor();
	}, 1000);
	refs.buttonStart.disabled  = true;
	refs.buttonStop.disabled  = false;
};

function stopChangingColor() {
	clearInterval(timerId);
	refs.buttonStart.disabled  = false;
	refs.buttonStop.disabled  = true;
};
