window.onload = function() {
  alert("Bem-vindo à Hamburgueria da Winx! Prepare-se para a pior experiência visual da sua vida.");

  let cores = ["red", "yellow", "lime", "cyan", "pink", "blue"];
  setInterval(() => {
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
  }, 500);

  let titulo = document.getElementById("titulo-principal");
  setInterval(() => {
    titulo.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${1 + Math.random() * 0.5})`;
  }, 200);

  document.addEventListener("mousemove", (e) => {
    let span = document.createElement("span");
    span.textContent = "*";
    span.style.position = "absolute";
    span.style.left = e.pageX + "px";
    span.style.top = e.pageY + "px";
    span.style.color = ["lime", "yellow", "pink", "cyan"][Math.floor(Math.random() * 4)];
    span.style.fontSize = Math.random() * 30 + "px";
    document.body.appendChild(span);
    setTimeout(() => span.remove(), 300);
  });
};
