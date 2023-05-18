import { Notify } from "notiflix/build/notiflix-notify-aio";

const delayInput = document.querySelector('.form [name="delay"]');
const stepInput = document.querySelector('.form [name="step"]');
const amountInput = document.querySelector('.form [name="amount"]');
const button = document.querySelector(".form");

button.addEventListener("submit", setPromis);

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position: position, delay: delay });
      } else {
        rej({ position: position, delay: delay });
      }
    }, delay);
  });
}

function setPromis(event) {
  event.preventDefault();
  const delayNum = Number(delayInput.value);
  console.log(delayNum)
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);
    for (let i = 0; i < amount; i += 1) {
      createPromise(i+1, delayNum+(step*i))
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
}


