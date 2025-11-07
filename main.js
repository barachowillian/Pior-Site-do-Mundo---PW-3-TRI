// main.js - scripts simples e confusos
console.log('Bem vindo ao console da pior página do mundo');

function abrirCardapio(){
  window.location.href = 'cardapio.html';
}

var carrinho = [];

function adicionar(id){
  var nomes = {1: 'Hamburguer Classicão', 2: 'Queen Winx', 3: 'Fritas de Papel'};
  var precos = {1: 1000, 2: 50, 3: 0.01};
  carrinho.push({id:id, nome: nomes[id], preco: precos[id]});
  atualizarCarrinho();
}

function atualizarCarrinho(){
  var lista = document.getElementById('carrinho-lista');
  if(!lista) return;
  lista.innerHTML = '';
  for(var i=0;i<carrinho.length;i++){
    var li = document.createElement('li');
    li.textContent = carrinho[i].nome + ' - R$ ' + carrinho[i].preco;
    lista.appendChild(li);
  }
}

function finalizar(){
  if(carrinho.length === 0){
    alert('Carrinho vazio. Compra não realizada.');
    return;
  }
  var total = carrinho.reduce(function(a,b){return a + b.preco;},0);
  alert('Compra finalizada! Total: R$ ' + total + '\\nObrigado por sofrer com a gente.');
  carrinho = [];
  atualizarCarrinho();
}

function enviarCadastro(){
  var nome = document.getElementById('nome');
  if(nome && nome.value.length < 1){
    alert('Coloca o nome aí, pelo amor.');
    return false;
  }
  alert('Cadastro enviado (ou não).');
  return false;
}

window.addEventListener('load', function(){
  atualizarCarrinho();
});
