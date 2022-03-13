let btn = document.getElementById('btn');
let output = document.getElementById('output');
let evenEl = document.getElementById('even');
let oddEl = document.getElementById('odd');



btn.addEventListener('click', function(){

    let str = document.getElementById("word").value;
    output.innerHTML = str.length;

    if(str.length%2 == 0){
        evenEl.style.background = "blue";
    } else {
        oddEl.style.background = "red";
    }
})

