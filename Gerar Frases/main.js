let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.” – Clarice Lispector', 
    '“Dê a quem você ama: asas para voar, raízes para voltar e motivos para ficar.” – Dalai Lama',
    '“Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!” – Rui Barbosa',
    '“É melhor conquistar a si mesmo do que vencer mil batalhas.” – Buda',
    '“Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto.” – Provérbio Chinês',
    '“É mais fácil obter o que se deseja com um sorriso do que à ponta da espada.” – William Shakespeare ',
    '“Liberdade é pouco. O que eu desejo ainda não tem nome.” – Clarice Lispector',
    '“De todos os animais selvagens, o homem jovem é o mais difícil de domar.” – Platão',
    '“Só existem dois dias no ano que nada pode ser feito. Um se chama ontem e o outro se chama amanhã, portanto hoje é o dia certo para amar, acreditar, fazer e principalmente viver.” – Dalai Lama',
    '“A gente tem o direito de deixar o barco correr. As coisas se arranjam, não é preciso empurrar com tanta força.” – Clarice Lispector',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})

