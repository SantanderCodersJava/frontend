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

  // DADOS PESSOAIS
  document.getElementById("nome-doador").value = usuario.nome;
  document.getElementById("rg-doador").value = usuario.rg;
  document.getElementById("dt-nasc-doador").value = usuario.dataNascimento;
  document.getElementById("email-doador").value = usuario.email;
  document.getElementById("cpf-doador").value = usuario.cpf;
  document.getElementById("telefone-doador").value = usuario.telefone;
  
  //DADOS ENDEREÇO
  document.getElementById("rua-doador").value = usuario.enderecos[0].rua;
  document.getElementById("numero-doador").value = usuario.enderecos[0].numero;
  document.getElementById("complemento-doador").value = usuario.enderecos[0].complemento;
  document.getElementById("bairro-doador").value = usuario.enderecos[0].bairro;
  document.getElementById("cidade-doador").value = usuario.enderecos[0].cidade;
  document.getElementById("uf-doador").value = usuario.enderecos[0].estado;
  document.getElementById("cep-doador").value = usuario.enderecos[0].cep;  


  //PEGANDO O TIPO SEXO E DEIXANDO O INPUT RADIO CHECKADO
  let radios = document.getElementsByName("gender")

  for(let i = 0; i < radios.length; i++) {
    if(radios[i].value === usuario.sexo) {
      radios[i].checked = true
    }
  }

  const imgTipoSangue = document.getElementById("tipoSangue")

  const tipoSangue = usuario.tipoSanguineo
  console.log(tipoSangue)

  switch(tipoSangue) {
    case tipoSangue == 'APOSITIVO':
      console.log(tipoSangue)
      imgTipoSangue.setAttribute("src", '../img/Apositive.png')
      break;
    case tipoSangue == 'ANEGATIVO':
      console.log(tipoSangue)
      imgTipoSangue.setAttribute("src", '../img/Anegative.png')
      break;
    case tipoSangue == 'BPOSITIVO':
      console.log(tipoSangue)
      imgTipoSangue.setAttribute("src", '../img/Bpositive.png')
      break;
    case tipoSangue == 'BNEGATIVO':
      console.log(tipoSangue)
      imgTipoSangue.setAttribute("src", '../img/Bnegative.png')
      break;
    case tipoSangue == 'ABPOSITIVO':
      console.log(tipoSangue)
      imgTipoSangue.setAttribute("src", '../img/ABpositive.png')
      break;
    case tipoSangue == 'ABNEGATIVO':
      console.log(tipoSangue)
      imgTipoSangue.setAttribute("src", '../img/ABnegative.png')
      break;
    case tipoSangue == 'OPOSITIVO':
      console.log(tipoSangue)
      imgTipoSangue.setAttribute("src", '../img/Opositive.png')
      break;
    case tipoSangue == 'ONEGATIVO':
      console.log(tipoSangue)
      imgTipoSangue.setAttribute("src", '../img/Onegative.png')
      break;
    default:
      console.log(tipoSangue)
      imgTipoSangue.setAttribute("src", '../img/nao-sei.png')
  }
 
}catch(err) {
  console.log(err)
}

}

