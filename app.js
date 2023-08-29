let btn = document.querySelector("button");
// console.dir(btn);
btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  let div = document.querySelector("#hyper");

  div.innerText = randomColor;
  div.style.backgroundColor = randomColor;

  console.log("Color Updated");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  return color;
}
