const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hour}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`; //  если hours,minutes,seconds < 10 применяем тернарный оператор что бы числа начинали отсчет не как 1 а как 01
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
