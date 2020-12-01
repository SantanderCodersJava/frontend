
document.getElementById("form-agendamento-doador").onsubmit = function( event ){

    event.preventDefault();

    // PEGA OS VALORES QUE O USUARIO DIGITOU NO CADASTRO DE PESSOA FISICA
    const nomeDoador = document.getElementById(id_doador).value;
    const nomeBanco =  document.getElementById(id_banco)
    const dataAgendamento = document.getElementById("dataAgendamento").value;
    const dataDoacao = document.getElementById("dataDaocao").value;
    const horario = document.getElementById("horario").value;
    
 }
// OBJETO QUE EU ENVIO NO POST DA REQUISIÇÃO

const doador =  {
    id_doador : id_doador,
        banco : {
            id_banco : id_banco,
                agendamento : {
                    data_agendamento: data_agendamento,
                    horario: horario,

                }
            }
        }

  // FAÇO A REQUISIÇÃO
  const api = axios.create({
    baseURL: "http://localhost:8080",
})

api.post("/agendamento", doador)
.then(res => {
    alert("Agendamento cadastrado com sucesso!")
})
.catch(err => {
    alert("Erro ao agendar");
})


