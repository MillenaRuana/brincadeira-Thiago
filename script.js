const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");


// ============================
// SIM ❤️
// ============================

botaoSim.addEventListener("click", function () {

    alert("EU SABIA! 😂❤️");

});


// ============================
// NÃO 😈
// ============================

// Computador
botaoNao.addEventListener("mouseenter", fugir);


// Celular
botaoNao.addEventListener("touchstart", function (event) {

    event.preventDefault();

    fugir();

});


// ============================
// FAZER O NÃO FUGIR
// ============================

function fugir() {

    const margem = 20;

    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;


    // Descobre o espaço REAL disponível

    const espacoX =
        larguraTela - larguraBotao - (margem * 2);

    const espacoY =
        alturaTela - alturaBotao - (margem * 2);


    // Se não houver espaço suficiente,
    // não deixa o botão sair da tela.

    const novaX =
        margem +
        Math.random() * Math.max(0, espacoX);


    const novaY =
        margem +
        Math.random() * Math.max(0, espacoY);


    // O botão passa a ocupar a tela inteira

    botaoNao.style.position = "fixed";

    botaoNao.style.transform = "none";

    botaoNao.style.left = novaX + "px";

    botaoNao.style.top = novaY + "px";

    botaoNao.style.zIndex = "99999";
}


// ============================
// SE CONSEGUIR CLICAR 😂
// ============================

botaoNao.addEventListener("click", function (event) {

    event.preventDefault();

    fugir();

});