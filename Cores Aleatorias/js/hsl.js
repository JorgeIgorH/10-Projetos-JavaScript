const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * (100 + 1)) + "%";
  const lightness = Math.floor(Math.random() * (100 + 1)) + "%";
  const hsl = "hsl(" + hue + ", " + saturation + ", " + lightness + ")";

    color.textContent = hsl;
    document.body.style.backgroundColor = hsl;
})

