
function previewImagem(){
  var imagem = document.querySelector('input[name=imagem]').files[0];
  var preview = document.querySelector('#logo');

  var reader = new FileReader();

  reader.onloadend = function() {
      preview.src = reader.result;
  }

  if(imagem){
      reader.readAsDataURL(imagem);
  }else{
      preview.src = "../img/silhueta.png";
  }
}

const api = axios.create({
  baseURL: "http://localhost:8080",
})



console.log("script carregado")

document.body.onload = async function(event) {

event.preventDefault();
 
try{
  const usuario = await api.get(`/doadores/${JSON.parse(localStorage.getItem("__login-info")).email}`)

  
  .then(res=> res.data)
  console.log(usuario)
  document.getElementById("nomeDoador").innerText = usuario.nome;
  document.getElementById("nome-doador").value = usuario.nome;
  document.getElementById("rg-doador").value = usuario.rg;
  document.getElementById("dt-nasc-doador").value = usuario.dataNascimento;
  document.getElementById("email-doador").value = usuario.email;
  document.getElementById("cpf-doador").value = usuario.cpf;
  document.getElementById("telefone-doador").value = usuario.telefone;
  
  document.getElementById("rua-doador").value = usuario.enderecos[0].rua;
  document.getElementById("numero-doador").value = usuario.enderecos[0].numero;
  document.getElementById("complemento-doador").value = usuario.enderecos[0].complemento;
  document.getElementById("bairro-doador").value = usuario.enderecos[0].bairro;
  document.getElementById("cidade-doador").value = usuario.enderecos[0].cidade;
  document.getElementById("uf-doador").value = usuario.enderecos[0].estado;
  document.getElementById("cep-doador").value = usuario.enderecos[0].cep;  

  document.getElementById("data_doacao").innerText.toString() = usuario.agendamento[0].data;  
  document.getElementById("data_doacao").value = usuario.agendamento[0].data;  

  let radios = document.getElementsByName("gender")

  for(let i = 0; i < radios.length; i++) {
    if(radios[i].value === usuario.sexo) {
      radios[i].checked = true
    }
  }

}catch(err) {
  console.log(err)
}

}

function previewImagem(){
  var imagem = document.querySelector('input[name=imagem]').files[0];
  var preview = document.querySelector('#logo');

  var reader = new FileReader();

  reader.onloadend = function() {
      preview.src = reader.result;
  }

  if(imagem){
      reader.readAsDataURL(imagem);
  }else{
      preview.src = "../img/silhueta.png";
  }
}

