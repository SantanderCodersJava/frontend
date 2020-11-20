


document.getElementById("formulario-cadastro").onsubmit = function( event ){

    event.preventDefault();

    // PEGA OS VALORES QUE O USUARIO DIGITOU NO CADASTRO DE PESSOA FISICA
    const razao = document.getElementById("razao-social").value;
    const cnpj = document.getElementById("cnpj").value;
    const emailEmp = document.getElementById("email-empresa").value;
    const tel = document.getElementById("telefone").value;
    const nomeContato = document.getElementById("nome-contato").value;
    const ie = document.getElementById("ie").value;
    const fundacao = document.getElementById("fundacao").value;
    const tel2 = document.getElementById("telefone2").value;
    const emailContato = document.getElementById("emailContato").value;
    
    // DADOS DE ENDEREÇO
    const cep = document.getElementById("cep").value;  
    const bairro = document.getElementById("bairro").value;  
    const rua = document.getElementById("rua").value;  
    const numero = document.getElementById("numero").value;      
    const compl = document.getElementById("comp").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("uf").value;
    /**/

    const porteQtd = document.getElementsByName("porte");

    let qtdColaboradores = 0;

    for(let i = 0; i < porteQtd.length; i++){
        if(porteQtd[i].checked) {
            qtdColaboradores = porteQtd[i].value;
        }
    }

    
    //------------------
    // OBJETO QUE EU ENVIO NO POST DA REQUISIÇÃO
    const endereco =  {
                rua : rua,
                numero : numero, 
                complemento : compl, 
                bairro : bairro,
                cidade : cidade,
                estado : estado,
                cep : cep,
                latitude : null,
                longitude : null,
                empresa : { 
                    razao_social : razao,
                    email_empresa : emailEmp,
                    cnpj_empresa : cnpj,
                    telefone_1 : tel,
                    telefone_2 : tel2,
                    data_fundacao : fundacao,
                    inscricao_estadual : ie,
                    nome_contato : nomeContato,
                    email_contato : emailContato,
                    quantidade_colaboradores : qtdColaboradores
                }        
    }


    // FAÇO A REQUISIÇÃO
    const api = axios.create({
        baseURL: "http://localhost:8080",
    })

    api.post("/enderecos", endereco)
    .then(res => {
        alert("Empresa cadastrada com sucesso!")
    })
    .catch(err => {
        alert("Erro ao cadastrar");
    })

}







