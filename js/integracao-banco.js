   //UPLOAD DE ARQUIVOS

const api = axios.create({
    baseURL: "http://localhost:8080",
})

const fileInput = document.getElementById("imagem");

let caminhoImg;

fileInput.addEventListener("change", (event) => {
    const img = event.target.files[0];
    const formData = new FormData();

    formData.append("image", img);

    api.post("doadores/upload", formData)
    .then(res => {
        caminhoImg = res.data;
        console.log(caminhoImg);
    })
    .catch(err => {
        console.log(err);
    })
})

document.getElementById("formulario-cadastro").onsubmit = async function( event ){

    event.preventDefault();

    // PEGA OS VALORES QUE O USUARIO DIGITOU NO CADASTRO DE BANCO DE SANGUE
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

       
    // OBJETO QUE EU ENVIO NO POST DA REQUISIÇÃO
    const endereco = {
        rua : rua,
        numero : numero, 
        complemento : compl, 
        bairro : bairro,
        cidade : cidade,
        estado : estado,
        cep : cep,
        latitude : null,
        longitude : null,
        bancoSangue : {
            nome : nome,
            email : emailinstitucional,
            cnpj : cnpj,
            telefone : tel,
            nomeContato : nomeContato,
            emailContato : emailContato,
            telefoneContato : telContato,
            cargo : cargo,
            senha : senha,
            caminhoImg : caminhoImg,
        }      
    }


    // FAÇO A REQUISIÇÃO
    api.post("/enderecos", endereco)
    .then(res => {

        for(let i = 0; i < inputTipoSangue.length; i++){

            if(inputTipoSangue[i].checked) {    
                api.post("/tiposanguineo",  {bancoSangue : res.data.bancoSangue, tipoDeSangue : inputTipoSangue[i].value, quantidadeTipo : 0})
                .then(res => {
                   
                })
                .catch(err => {
                    alert("Erro na solicitação");
                })
            }
        } 

        alert("Banco de sangue cadastrado com sucesso!");    
    })
    .catch(err => {
        alert("Erro ao cadastrar");
    })

}
