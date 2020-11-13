
document.getElementById("form-cadastro-doador").onsubmit = function( event ){

    event.preventDefault();

    // PEGA OS VALORES QUE O USUARIO DIGITOU NO CADASTRO DE PESSOA FISICA
    const nomeDoador = document.getElementById("nome-doador").value;
    const rgDoador = document.getElementById("rg-doador").value;
    const dtNasc = document.getElementById("dt-nasc-doador").value;
    const email = document.getElementById("email-doador").value;
    const cpf = document.getElementById("cpf-doador").value;
    const telefone = document.getElementById("telefone-doador").value;
    const senha = document.getElementById("senha-doador").value;
    const ruaDoador = document.getElementById("rua-doador").value;
    const numero = document.getElementById("numero-doador").value;
    const complemento = document.getElementById("complemento-doador").value;
    const bairro = document.getElementById("bairro-doador").value;
    const cidade = document.getElementById("cidade-doador").value;
    const estado = document.getElementById("uf-doador").value;
    const cep = document.getElementById("cep-doador").value;  


    const sexo = document.getElementsByName("gender");
    let opcaoSexo = '';

    for(let i = 0; i < sexo.length; i++){
        if(sexo[i].checked) {
            opcaoSexo = sexo[i].value;
        }
    }

    const tipoSangue = document.getElementsByName("type");
    let opcaoTipoSangue = '';

    for(let i = 0; i < tipoSangue.length; i++){
        if(tipoSangue[i].checked) {
            opcaoTipoSangue = tipoSangue[i].value;
        }
    }

    //------------------
    
    // OBJETO QUE EU ENVIO NO POST DA REQUISIÇÃO
    const doador =  {
        nome : nomeDoador,
        rg : rgDoador,
        data_nascimento : dtNasc,
        email : email,
        cpf : cpf,
        telefone : telefone,
        sexo : opcaoSexo,
        tipo_sanguineo : opcaoTipoSangue,
        senha : senha,
        caminho_img : "xxxxx",
        enderecos : [
            {
                rua : ruaDoador,
                numero : numero, 
                complemento : complemento, 
                bairro : bairro,
                cidade : cidade,
                estado : estado,
                cep : cep,
                latitude : null,
                longitude : null
            }
        ]
    }

    // FAÇO A REQUISIÇÃO
    const api = axios.create({
        baseURL: "http://localhost:8080",
    })

    api.post("/doadores", doador)
    .then(res => {
        alert("Doador cadastrado com sucesso!")
    })
    .catch(err => {
        alert("Erro ao cadastrar");
    })

}







