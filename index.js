const title = document.getElementById("title");
function handleClick() {
  if (title.style.color === "red") {
    title.style.color = "blue";
  } else {
    title.style.color = "red";
  }
}
title.addEventListener("click", handleClick); // dir 매서드는 원하는 객체의 매서드를 모두 보여줌(console.log)
