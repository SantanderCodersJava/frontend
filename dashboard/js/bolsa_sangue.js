
Chart.defaults.scale.gridLines.drawOnChartArea = false; //retirar as linhas do gráfico
Chart.defaults.global.defaultFontFamily = "Open Sans";
Chart.defaults.global.defaultFontSize = 15;

$(function() {
    var optionsBolsa = {
      responsive: true,
      legend: {
        position: "bottom",
    },
};
  
    var dataBolsa = {
      labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul','ago', 'set', 'out', 'nov', 'dez'],
      datasets: [{
        label: "A+",
            fill: false,
            lineTension: 0,
            borderColor: 'rgb(25,25,112)',
            backgroundColor: 'transparent',
            pointBorderColor: 'rgb(25,25,112)',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: [100, 90, 30, 60, 100, 67, 70],
        },
        {
            label: "A-",
            fill: false,
            lineTension: 0,
            borderColor: 'rgb(100,149,237)',
            backgroundColor: 'transparent',
            pointBorderColor: 'rgb(100,149,237)',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: [90, 60, 130, 60, 110, 97, 70],
        },
        {
            label: "B+",
            fill: false,
            lineTension: 0,
            borderColor: 'rgb(30,144,255)',
            backgroundColor: 'transparent',
            pointBorderColor: 'rgb(30,144,255)',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: [190, 60, 100, 50, 40, 93, 75],
        },
        {
            label: "B-",
            fill: false,
            lineTension: 0,
            borderColor: 'rgb(0,100,0)',
            backgroundColor: 'transparent',
            pointBorderColor: 'rgb(0,100,0)',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: [45, 100, 130, 60, 110, 97, 70],
        },
        {
            label: "O+",
            fill: false,
            lineTension: 0,
            borderColor: 'rgb(238,9,9)',
            backgroundColor: 'transparent',
            pointBorderColor: 'rgb(238,9,9)',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: [40, 120, 85, 15, 100, 77, 63],
        },
        {
            label: "O-",
            fill: false,
            lineTension: 0,
            borderColor: 'rgb(255,69,0)',
            backgroundColor: 'transparent',
            pointBorderColor: 'rgb(255,69,0)',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: [25, 145, 60, 78, 132, 91, 76],
        },
        {
            label: "AB+",
            fill: false,
            lineTension: 0,
            borderColor: 'rgb(255,255,0)',
            backgroundColor: 'transparent',
            pointBorderColor: 'rgb(255,255,0)',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: [30, 145, 60, 78, 132, 91, 76],
        },
        {
            label: "AB-",
            fill: false,
            lineTension: 0,
            borderColor: 'rgb(128,0,0)',
            backgroundColor: 'transparent',
            pointBorderColor: 'rgb(128,0,0)',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            data: [35, 145, 60, 78, 132, 91, 76],
        }]
    };
  
    var optionsAgend = {
      responsive: true,
      legend: {
        position: "bottom",
    },
      
    };
  
    var data1 = {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul','ago', 'set', 'out', 'nov', 'dez'],
      datasets: [{
        label: "confirmados",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(33, 107, 57,0.7)",
        borderColor: "rgba(33, 107, 57,1)",
        borderWidth: 4,
        data: [33, 22, 99]
      }, {
        label: "cancelados",
        fill: false,
        lineTension: 0,
        borderColor: 'rgb(238,9,9)',
        backgroundColor: 'rgb(238,9,9,0.7)',
        pointBorderColor: 'rgb(238,9,9)',
        borderWidth: 4,
        data: [78, 45, 96]
      },]
    };
  
  
    function gerarGraficos() {
      var graficoSangue = document.getElementById("grafico_sangue").getContext("2d");
      var LineChart = new Chart(graficoSangue, {
        type: 'line',
        data: dataBolsa,
        options: optionsBolsa
      });
  
      var graficoAgendamento = document.getElementById("grafico_agendamento").getContext("2d");
      var LineChart2 = new Chart(graficoAgendamento, {
        type: 'line',
        data: data1,
        options: optionsAgend
      });
    }
  
    gerarGraficos();
  });




