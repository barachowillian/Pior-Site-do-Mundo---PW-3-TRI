// Cursor de varinha das Winx
document.body.style.cursor = "url('https://cur.cursors-4u.net/cursors/cur-2/cur116.cur'), auto";

// Mensagem inicial para assustar o visitante
setTimeout(() => {
  alert("Bem-vindo à Hamburgueria da Winx! Prepare-se para uma experiência inesquecivelmente questionável!");
}, 2000);

// Pop-ups aleatórios aparecendo na tela
setInterval(() => {
  const mensagens = [
    "Promoção relâmpago: coma 3 e ganhe um exame médico!",
    "Nova receita exclusiva: pão envelhecido artesanalmente!",
    "Desconto especial: mostre seu comprovante de antitoxina!",
    "Winx aprova (mentira, elas fugiram)!",
    "Brinde misterioso: pode ser purpurina... ou mofo!",
    "Coma agora e sinta a magia da indigestão!"
  ];

  const caixa = document.createElement("div");
  caixa.textContent = mensagens[Math.floor(Math.random() * mensagens.length)];
  caixa.style.position = "fixed";
  caixa.style.top = Math.random() * 80 + "%";
  caixa.style.left = Math.random() * 80 + "%";
  caixa.style.background = "magenta";
  caixa.style.color = "yellow";
  caixa.style.padding = "10px";
  caixa.style.border = "5px double lime";
  caixa.style.fontFamily = "Comic Sans MS";
  caixa.style.fontSize = "18px";
  caixa.style.zIndex = 9999;
  caixa.style.transform = `rotate(${Math.random() * 30 - 15}deg) scale(${1 + Math.random() * 0.5})`;
  caixa.style.boxShadow = "0 0 20px red";
  document.body.appendChild(caixa);
  setTimeout(() => caixa.remove(), 4000);
}, 6000);

// Efeitos sonoros ao passar o mouse nos botões
const botoes = document.querySelectorAll("button");
botoes.forEach(botao => {
  botao.addEventListener("mouseenter", () => {
    const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
    audio.volume = 0.5;
    audio.play();
    botao.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${1.2})`;
    setTimeout(() => botao.style.transform = "rotate(0deg) scale(1)", 300);
  });
});

// Efeito de rastro colorido ao mover o mouse
document.body.addEventListener("mousemove", (e) => {
  const span = document.createElement("span");
  span.textContent = "★";
  span.style.position = "absolute";
  span.style.left = e.pageX + "px";
  span.style.top = e.pageY + "px";
  span.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  span.style.fontSize = Math.random() * 40 + "px";
  span.style.pointerEvents = "none";
  document.body.appendChild(span);
  setTimeout(() => span.remove(), 700);
});

// Fundo piscando em cores diferentes
setInterval(() => {
  document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
}, 1500);
