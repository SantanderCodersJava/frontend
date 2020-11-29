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


$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {
  
        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');
  
        //Verifica se campo cep possui valor informado.
        if (cep != "") {
  
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
  
            //Valida o formato do CEP.
            if(validacep.test(cep)) {
  
                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ibge").val("...");
  
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
  
                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ibge").val(dados.ibge);
                        $("#numero").focus();
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
  });
  
  //..............................................Preenchimento do Endereço através do CEP do doador
  $(document).ready(function() {
  
    function limpa_formulário_cep_doador() {
        // Limpa valores do formulário de cep.
        $("#cep-doador").val("");
        $("#rua-doador").val("");
        $("#bairro-doador").val("");
        $("#numero-doador").val("");
        $("#cidade-doador").val("");
        $("#uf-doador").val("");
        $("#ibge-doador").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep-doador").blur(function() {
  
        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');
  
        //Verifica se campo cep possui valor informado.
        if (cep != "") {
  
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
  
            //Valida o formato do CEP.
            if(validacep.test(cep)) {
  
                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua-doador").val("...");
                $("#bairro-doador").val("...");
                $("#cidade-doador").val("...");
                $("#uf-doador").val("...");
                $("#ibge-doador").val("...");
  
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
  
                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua-doador").val(dados.logradouro);
                        $("#bairro-doador").val(dados.bairro);
                        $("#cidade-doador").val(dados.localidade);
                        $("#uf-doador").val(dados.uf);
                        $("#ibge-doador").val(dados.ibge);
                        $("#numero").focus();
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep_doador();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep_doador();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep_doador();
        }
    });
  });
  
  $(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
  }); 
 
 
 //UPLOAD DE ARQUIVOS

const api = axios.create({
    baseURL: "http://localhost:8080",
})

const fileInput = document.getElementById("imagem");

let caminhoImg;

fileInput.addEventListener("change", async (event) => {
    const img = event.target.files[0]

    const formData = new FormData()

    formData.append("file", img)
    try{
        caminhoImg = await axios.post("http://localhost:8080/storage/upload", formData)
        .then(res => res.data)
    }catch(err) {
        console.log(err)
    }
   
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
