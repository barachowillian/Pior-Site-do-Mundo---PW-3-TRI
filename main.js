
alert("Bem-vindo(a) à Hamburgueria das Winx!");

function confundir() {
  const mensagens = [
    "Telefone temporariamente fora do ar.",
    "Em breve entraremos em contato.",
    "O formulário de contato está em manutenção."
  ];
  alert(mensagens[Math.floor(Math.random() * mensagens.length)]);
}

function validarCadastro() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmarSenha").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos antes de continuar.");
  } else if (senha !== confirmar) {
    alert("As senhas não conferem.");
  } else {
    alert(`Cadastro concluído com sucesso, ${nome}!`);
  }
}

// Animação da popup
setInterval(() => {
  const popup = document.querySelector(".popup");
  if (popup) {
    popup.style.right = Math.random() * 200 + "px";
    popup.style.bottom = Math.random() * 150 + "px";
  }
}, 1000);
