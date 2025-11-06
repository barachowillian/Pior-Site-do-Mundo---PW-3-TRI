function irParaCadastro() {
    window.location.href = "cadastro.html";
  }
  
  function validarCadastro() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmarSenha").value;
  
    if (!nome || !email || !senha || !confirmar) {
      alert("Por favor, preencha todos os campos antes de prosseguir.");
      return;
    }
  
    if (senha !== confirmar) {
      alert("As senhas informadas não coincidem. Verifique e tente novamente.");
      return;
    }
  
    alert("Cadastro realizado com sucesso!");
    window.location.href = "cardapio.html";
  }
  
  function mostrarCardapio() {
    const cardapio = document.getElementById("cardapio");
    cardapio.classList.remove("invisivel");
  }
  