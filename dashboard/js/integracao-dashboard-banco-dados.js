const api = axios.create({
  baseURL: "http://localhost:8080",
})



console.log("script carregado")

document.body.onload = async function(event) {

event.preventDefault();
 
try{
  const banco = await api.get(`/banco/${JSON.parse(localStorage.getItem("__login-info")).email}`)

  
  .then(res=> res.data)
    console.log(banco)

  // DADOS BANCO DE SANGUE

  /*document.getElementById("nome").value = banco.nome;
  document.getElementById("cnpj").value = banco.cnpj;
  document.getElementById("emailinstitucional").value = banco.email;
  document.getElementById("telefone").value = banco.telefone;
  */

  //DADOS CONTATO
  document.getElementById("contato").value = banco.nomeContato;
  document.getElementById("telefonecontato").value = banco.telefoneContato;  
  document.getElementById("emailContato").value = banco.emailContato;
  document.getElementById("cargo").value = banco.cargo;

  // DADOS DE ENDEREÇO
  document.getElementById("cep").value = banco.endereco.cep;  
  document.getElementById("bairro").value = banco.endereco.bairro; 
  document.getElementById("rua").value = banco.endereco.rua;  
  document.getElementById("numero").value = banco.endereco.numero;      
  document.getElementById("comp").value = banco.endereco.complemento;
  document.getElementById("cidade").value = banco.endereco.cidade;
  document.getElementById("uf").value = banco.endereco.estado;   


}catch(err) {
  console.log(err)
}

}

