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
    
    const nomeDoador = document.getElementById("nome-doador").value = usuario.nome;
    const rgDoador = document.getElementById("rg-doador").value = usuario.rg;
    const dtNasc = document.getElementById("dt-nasc-doador").value = usuario.dataNascimento;
    const email = document.getElementById("email-doador").value = usuario.email;
    const cpf = document.getElementById("cpf-doador").value = usuario.cpf;
    const telefone = document.getElementById("telefone-doador").value = usuario.telefone;
  
    const ruaDoador = document.getElementById("rua-doador").value = usuario.rua;
    const numero = document.getElementById("numero-doador").value = usuario.numero;
    const complemento = document.getElementById("complemento-doador").value = usuario.complemento;
    const bairro = document.getElementById("bairro-doador").value = usuario.bairro;
    const cidade = document.getElementById("cidade-doador").value = usuario.cidade;
    const estado = document.getElementById("uf-doador").value = usuario.estado;
    const cep = document.getElementById("cep-doador").value = usuario.cep;  

    const sexo = document.getElementsByName("gender").value = usuario.sexo;

    let opcaoSexo = '';

    for(let i = 0; i < sexo.length; i++){
      if(sexo[i].checked) {
          opcaoSexo = sexo[i].value;
      }
  }

/*
    usuario = {
      nome: nomeDoador,
      rg: rgDoador,
      dataNascimento: dtNasc,
      email: email,
      cpf: cpf,
      telefone: telefone,
      sexo: opcaoSexo,
      endereco: {
        rua: ruaDoador,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep,
        latitude: null,
        longitude: null,
      }
    }  

*/

    
    

}catch(err) {
  console.log(err)
}

/*
usuario = {
  nome: nome,
  rg: rgDoador,
  dataNascimento: dtNasc,
  email: email,
  cpf: cpf,
  telefone: telefone,
  sexo: opcaoSexo,
  endereco: {
    rua: ruaDoador,
    numero: numero,
    complemento: complemento,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    cep: cep,
    latitude: null,
    longitude: null,
  }
}  

console.log(usuario)*/

}

