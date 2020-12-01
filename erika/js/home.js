
/*modal de cadastro*/
const modalCadastro = document.getElementById("modalCadastro");
const cadastroBtn = document.getElementById("cadastroBtn");
var fecharModal = document.getElementsByClassName("fecharModal"); /*array com todos os (x) dos modais*/

/*quando o usuário clicar no botão de cadastro, o modal de cadastro abre*/ 
cadastroBtn.onclick = function() {
    modalCadastro.style.display = "block";
}

/*quando o usuário clicar no botão de login, o modal de login abre*/ 
const modalLogin = document.getElementById("modalLogin");
const loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = function() {
    modalLogin.style.display = "block";
}

/*modal de login*/
/*array com todos dos botões class="btn "*/
const loginOpcao = document.getElementById("loginOpcao")
const btns = loginOpcao.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const clicadoBtn = document.getElementsByClassName(" active");
    const login = document.getElementsByClassName("formLogin");

    clicadoBtn[0].className = clicadoBtn[0].className.replace(" active", ""); /*retira "active" da classe do botão não clicado*/
    btns[i].className += " active"; /*adiciona "active" ao nome da classe do botão clicado*/

    login[0].className = login[0].className.replace("display", ""); /*retira "display" da classe do login*/
    login[i].className += " display"; /*adiciona "display" da classe do login*/
  });
}

/*funções para todos os modais*/
/*quando o usuário clicar no (x), o modal fecha (arrumar)*/ 
fecharModal[0].onclick = function() {
  modalCadastro.style.display = "none";
}
fecharModal[1].onclick = function() {
    modalLogin.style.display = "none";
}

/*quando o usuário clicar fora, o modal fecha*/
window.onclick = function(event) {
  if (event.target == modalCadastro) {
    modalCadastro.style.display = "none";
  }
  if(event.target == modalLogin){
    modalLogin.style.display = "none";
  }
}


