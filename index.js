const title = document.querySelector("#title");

const BASE_COLOR = "rgb(9, 132, 227)";
const OTHER_COLOR = "rgb(0, 184, 148)";
function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
  console.log(title.style.color);
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();
