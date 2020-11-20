   //UPLOAD DE ARQUIVOS

   const fileInput = document.getElementById("imagem")

   let caminhoImg
   
   fileInput.addEventListener("change", (event) => {
   const img = event.target.files[0]

   const formData = new FormData()

   formData.append("image", img)

   
   axios.post("http://localhost:8080/doadores/upload", formData)
   .then(res => {
           caminhoImg = res.data
           console.log(caminhoImg)

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

    let tipoSanguineo = []

   let tiposSangue = {};

    for(let i = 0; i < inputTipoSangue.length; i++){
        if(inputTipoSangue[i].checked) {

            tiposSangue = {
                tipoDeSangue : inputTipoSangue[i].value,
                quantidade_tipo : 0

            }
            tipoSanguineo.push(tiposSangue)
        }
    }
    console.log(tipoSanguineo)
    
    //------------------
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
        bancosangue : {
            nome : nome,
            email : emailinstitucional,
            cnpj : cnpj,
            telefone : tel,
            nome_contato : nomeContato,
            email_contato : emailContato,
            telefone_contato : telContato,
            cargo : cargo,
            senha : senha,
            caminho_img : caminhoImg,
        }      
    }


    // FAÇO A REQUISIÇÃO
    const api = axios.create({
        baseURL: "http://localhost:8080",
    })



    await api.post("/enderecos", endereco)
    .then(res => {
        idBanco = res.data.id_banco
        let sangue = {}
        for(let i = 0; i < tipoSanguineo.length; i++) {
            sangue = {
                id_banco : idBanco,
                tipo_de_sangue: tipoSanguineo[i].tiposSangue.tipoDeSangue,
                quantidade_tipo: tipoSanguineo[i].tiposSangue.quantidade_tipo,
            }
           await api.post("/tiposanguineo", sangue)
            .then(res => {
                alert("solicitação feita com sucesso!")
            })
            .catch(err => {
                alert("Erro na solicitação");
            })
        }
        
        alert("Banco de sangue cadastrado com sucesso!")
    })
    .catch(err => {
        alert("Erro ao cadastrar");
    })

}
