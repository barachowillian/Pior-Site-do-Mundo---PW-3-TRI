function irParaCadastro() {
    window.location.href = "cadastro.html";
  }
  
  function validarCadastro() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmarSenha").value;
  
    if (!nome || !email || !senha || !confirmar) {
      alert("Preencha todos os campos corretamente.");
      return;
    }
  
    if (senha !== confirmar) {
      alert("As senhas não correspondem.");
      return;
    }
  
    window.location.href = "cardapio.html";
  }
  
  function mostrarCardapio() {
    const c = document.getElementById("cardapio");
    c.classList.remove("invisivel");
  }
  