const enderecos = [
    {
        nome : "Banco de sangue 1",
        estado : "SP",
        cidade : "São Paulo",
        img : "img/img-banco.jpg",
        endereco : "Parque Santa Monica, São Carlos - SP, 13561-060",
        latitude: -22.0105824,
        longitude: -47.899969
    },
    {
        nome : "Banco de sangue 2",
        estado : "SP",
        cidade : "São Paulo",
        img : "img/img-banco2.jpg",
        endereco : "R. Paulino Botelho de Abreu Sampaio, 800 - Jardim Bethania, São Carlos - SP, 13561-060",
        latitude: -22.0117875,
        longitude: -47.9008562
    },
    {
        nome : "Banco de sangue 3",
        estado : "RJ",
        cidade : "Rio de Janeiro",
        img : "img/img-banco3.jpg",
        endereco : "R. Luís Vaz de Camões, 111 - Vila Celina, Rio de Janeiro - SP, 13566-448",
        latitude: -21.9939394,
        longitude: -47.891533
    }
]
   
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [25, 41],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

var iconeVermleho = new LeafIcon({iconUrl: 'img/location-pin.png'});

const access_token = 'pk.eyJ1IjoiZGVpdmFvIiwiYSI6ImNrZ2IzZ2ZtcjBkNTEyeW9qdTM4OWJ2MmcifQ.lY5VLKm2s_io2UnOMeEFTg';



L.icon = (options) => {
    return new L.Icon(options);
}

const mapa = document.getElementById("mapa");

const leafletMapa = L.map(mapa, 
    { 
        center: [-22.0116526, -47.9012114],
        zoom: 15 
    }
);

const baseMap = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${access_token}`, {} ); 

baseMap.addTo(leafletMapa);

document.getElementById("form-locais-mapa").addEventListener("submit", (e)=> {
    e.preventDefault();

    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("uf").value;
    const content = document.getElementById("conteudo-tabela");

    const enderecosFiltrados = enderecos.filter(e => e.cidade === cidade && e.estado === uf );
       
    content.innerHTML = enderecosFiltrados.map(e =>     
        `<tr>
            <td>${e.nome}</td>
            <td>${e.endereco}</td>
            <td>10.0</td>
            <td><a href="">agendar</a></td>
        </tr>`      
    ).join('')

   // L.LatLng(enderecosFiltrados[0].cidade, enderecosFiltrados[0].longitude);    
        
  //  renderMap(enderecosFiltrados[0].latitude, enderecosFiltrados[0].longitude);
      
    enderecosFiltrados.forEach(e => {
        const pop = L.popup()
        .setLatLng([e.latitude, e.longitude])
        .setContent(`<p>${e.nome}</p><img src='${e.img}'/>`, {width: 800})

        L.marker([e.latitude, e.longitude], {icon: iconeVermleho, title : e.endereco}).bindPopup(pop).addTo(leafletMapa);
    
    })
})

