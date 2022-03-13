const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

  color.textContent = rgb;
  document.body.style.backgroundColor = rgb;
})
