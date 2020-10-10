const clockContianer = document.querySelector(".js-clock"),
  clockTitle = clockContianer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const amOrPm = date.getHours() <= 12 ? "AM" : "PM";
  const seconds = date.getSeconds();
  clockTitle.innerText = `(${amOrPm})${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
