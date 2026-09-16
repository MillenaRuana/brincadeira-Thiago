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


// Também impede o clique
botaoNao.addEventListener("click", function (event) {
    event.preventDefault();
    fugir();
});


// ============================
// FUNÇÃO PARA FAZER O NÃO FUGIR
// ============================

function fugir() {

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const larguraTela = document.documentElement.clientWidth;
    const alturaTela = document.documentElement.clientHeight;

    const margem = 15;

    const limiteX = Math.max(
        margem,
        larguraTela - larguraBotao - margem
    );

    const limiteY = Math.max(
        margem,
        alturaTela - alturaBotao - margem
    );

    const novaX =
        margem +
        Math.random() * Math.max(0, limiteX - margem);

    const novaY =
        margem +
        Math.random() * Math.max(0, limiteY - margem);

    botaoNao.style.position = "fixed";

    botaoNao.style.left = novaX + "px";

    botaoNao.style.top = novaY + "px";

    botaoNao.style.transform = "none";

    botaoNao.style.margin = "0";

    botaoNao.style.zIndex = "999999";

    botaoNao.style.display = "block";

    botaoNao.style.visibility = "visible";

    botaoNao.style.opacity = "1";
}
