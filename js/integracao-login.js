
//LOGIN DOADOR
document.getElementById("formDonator").onsubmit = function(event) {

    event.preventDefault();

    // PEGAR OS DADOS DIGITADO NO LOGIN (EMAIL E SENHA)
    const emailDoador = document.getElementById("email_doador").value;
    const senhaDoador = document.getElementById("senha_doador").value;

    // OBJETO QUE SERÁ ENVIADO NA REQUISIÇÃO
    const loginDoador = {
        email : emailDoador,
        senha : senhaDoador
    }

    //FAZENDO A REQUISIÇÃO
    const api = axios.create({
        baseURL :  "http://localhost:8080",
    })

    api.post("doadores/auth", loginDoador)
        .then(res => {
            //console.log(res.data)
            window.location.href="./dashboard/dashboard-doador-principal.html"
            alert("Login efetuado com sucesso!")
        })
        .catch(err => {
            alert("Erro ao logar")
        })

}

//LOGIN BANCO DE SANGUE
document.getElementById("formBloodDonorCenter").onsubmit = function(event) {

    event.preventDefault();

    // PEGAR OS DADOS DIGITADO NO LOGIN (EMAIL E SENHA)
    const emailBanco = document.getElementById("email_banco").value;
    const senhaBanco = document.getElementById("senha_banco").value;

    // OBJETO QUE SERÁ ENVIADO NA REQUISIÇÃO
    const loginBanco = {
        email : emailBanco,
        senha : senhaBanco
    }

    //FAZENDO A REQUISIÇÃO
    const api = axios.create({
        baseURL : "http://localhost:8080",
    })

    api.post("banco/auth", loginBanco)
        .then(res => {
            //console.log(res.data)
            window.location.href="./dashboard/bancodesangue-principal.html"
            alert("Login efetuado com sucesso!")
        })
        .catch(err => {
            alert("Erro ao logar")
        })

}