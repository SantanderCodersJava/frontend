/* Executa apenas após a página estar carregada */
$(document).ready (function() {
    /* Adiciona máscaras, deixando os campos CNPJ, telefone, cep e número configurados */
    $("#cnpj").mask("00.000.000/0000-00")
    $("#telefone").mask("(00) 0000-0000")
    $("#telefonecontato").mask("(00) 0000-0000")
    $("#cep").mask("00000-000")
    $("#num").mask("0.000", {reverse: true})

    /* Validação dos campos da seção Dados da Instituição */
    $("#form").validate({
        rules:{
            nome:{
                minlength: 10,
                minWords: 2,
                required:true
            },
            contato:{
                minlength: 10,
                minWords: 2,
                required:true
            },
            cnpj:{
                cnpjBR: true,
                required:true
            },
            email_institucional:{
                email: true,
                required:true
            },
            telefone:{
                minlength: 10,
                required: true
            },
            rules:{
                cep:{
                    postalcodeBR: true,
                    required:true
                }        
            }
        }        
    })

})