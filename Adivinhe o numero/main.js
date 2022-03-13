let btn = document.getElementById('btn');
let output = document.getElementById('outputt');

let number = [Math.floor(Math.random() * 100)];


btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML = `Você acertou, o número foi ${number}`
        alert("Você acertouuuu");
    } else if (input < number){
        output.innerHTML = "Número muito baixo!"
    };
    if (input > number){
        output.innerHTML = "Númeor muito alto!"
    };
});

