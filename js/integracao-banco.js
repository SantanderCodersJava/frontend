
document.getElementById("formulario-cadastro").onsubmit = function( event ){

    event.preventDefault();

    // PEGA OS VALORES QUE O USUARIO DIGITOU NO CADASTRO DE PESSOA FISICA
    const nome = document.getElementById("nome").value;
    const cnpj = document.getElementById("cnpj").value;
    const nomeContato = document.getElementById("contato").value;
    const telContato = document.getElementById("telefonecontato").value;
    const emailinstitucional = document.getElementById("emailinstitucional").value;
    const tel = document.getElementById("telefone").value;
    const emailContato = document.getElementById("emailContato").value;
    const cargo = document.getElementById("cargo").value;
    const senha = document.getElementById("senha").value;

    // DADOS DE ENDEREÇO
    const cep = document.getElementById("cep").value;  
    const bairro = document.getElementById("bairro").value;  
    const rua = document.getElementById("rua").value;  
    const numero = document.getElementById("numero").value;      
    const compl = document.getElementById("comp").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("uf").value;
    /**/

    const inputTipoSangue = document.getElementsByClassName("rbpositivo");

   /* let tiposSangue = {};

    for(let i = 0; i < inputTipoSangue.length; i++){
        if(inputTipoSangue[i].checked) {

            tiposSangue = {
                tipoDeSangue : inputTipoSangue[i].value,
                quantidade_tipo : 0
            }
        }
    }
    */
    
    //------------------
    // OBJETO QUE EU ENVIO NO POST DA REQUISIÇÃO
    const banco =  {

    nome : nome,
	email : emailinstitucional,
	cnpj : cnpj,
	telefone : tel,
	nome_contato : nomeContato,
	email_contato : emailContato,
	telefone_contato : telContato,
	cargo : cargo,
	senha : senha,

        enderecos : [
            {
                rua : rua,
                numero : numero, 
                complemento : compl, 
                bairro : bairro,
                cidade : cidade,
                estado : estado,
                cep : cep,
                latitude : null,
                longitude : null
            }
        ]
    }

    console.log(banco)

    // FAÇO A REQUISIÇÃO
    const api = axios.create({
        baseURL: "http://localhost:8080",
    })

    api.post("/banco", banco)
    .then(res => {
        alert("Banco de sangue cadastrado com sucesso!")
    })
    .catch(err => {
        alert("Erro ao cadastrar");
    })

}