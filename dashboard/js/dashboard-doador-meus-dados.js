const api = axios.create({
  baseURL: "http://localhost:8080",
})

console.log("script carregado")
document.body.addEventListener("click", async function() {
  const nomeDoador = document.getElementById("nome-doador");
  const rgDoador = document.getElementById("rg-doador");
  const dtNasc = document.getElementById("dt-nasc-doador");
  const email = document.getElementById("email-doador");
  const cpf = document.getElementById("cpf-doador");
  const telefone = document.getElementById("telefone-doador");
  
  const ruaDoador = document.getElementById("rua-doador");
  const numero = document.getElementById("numero-doador");
  const complemento = document.getElementById("complemento-doador");
  const bairro = document.getElementById("bairro-doador");
  const cidade = document.getElementById("cidade-doador");
  const estado = document.getElementById("uf-doador");
  const cep = document.getElementById("cep-doador");  

  const sexo = document.getElementsByName("gender");
  let opcaoSexo = '';

  for(let i = 0; i < sexo.length; i++){
      if(sexo[i].value) {
          opcaoSexo = sexo[i].checked;
      }
  }


 
  const endereco =  {
      rua : ruaDoador,
      numero : numero, 
      complemento : complemento, 
      bairro : bairro,
      cidade : cidade,
      estado : estado,
      cep : cep,
      latitude : null,
      longitude : null,
      doador : {
          nome : nomeDoador,
          rg : rgDoador,
          dataNascimento : dtNasc,
          email : email,
          cpf : cpf,
          telefone : telefone,
          sexo : opcaoSexo,
          //caminhoImg : caminhoImg,
      }
  }

  try{
    const usuario = await api.get(`/doadores/${JSON.parse(localStorage.getItem("__login-info")).email}`)
  .then(res=> res.data)
  console.log(usuario)

  }catch(err) {
    console.log(err)
  }

  

})