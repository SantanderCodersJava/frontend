var LeafIcon = L.Icon.extend({
    options: {
        // shadowUrl: 'img/location-pin.png',
        iconSize:     [25, 41],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

var iconeVermelho = new LeafIcon({iconUrl: 'img/location-pin.png'});
const access_token = 'pk.eyJ1IjoiZGVpdmFvIiwiYSI6ImNrZ2IzZ2ZtcjBkNTEyeW9qdTM4OWJ2MmcifQ.lY5VLKm2s_io2UnOMeEFTg';

L.icon = (options) => {
    return new L.Icon(options);
}

const mapa = document.getElementById("mapa");

const leafletMapa = L.map(mapa, 
    { 
        center: [-23.5455769,-46.6300977],
        zoom: 15 
    }
);

const baseMap = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${access_token}`, {} ); 

baseMap.addTo(leafletMapa);

document.getElementById("form-locais-mapa").addEventListener("submit", async (e)=> {
    e.preventDefault();

 //   const cidade = document.getElementById("cidade").value;
 //   const uf = document.getElementById("uf").value;
    const content = document.getElementById("conteudo-tabela");

   // const enderecosFiltrados = enderecos.filter(e => e.cidade === cidade && e.estado === uf );
    
    axios.get("http://localhost:8080/banco")
    .then(res => {
        const banco = res.data;
        console.log(banco)

        const filtro = banco.filter(f => f.endereco.cidade === document.getElementById("cidade").value && f.endereco.regiao === document.getElementById("regiao").value);
        console.log(filtro)
        
        content.innerHTML = filtro.map(f =>     
            `<tr>
                <td>${f.nome}</td>
                <td>${f.endereco.rua}</td>                
                <td>${f.endereco.numero}</td>
                <td>${f.endereco.bairro}</td>
                <td><a href="">agendar</a></td>
            </tr>`      
        ).join('')  
        
        console.log(filtro.map(f => f.endereco))
        filtro.forEach(f => {
            const pop = L.popup()
            .setLatLng([f.endereco.latitude, f.endereco.longitude])
            .setContent(`<p>${f.nome}</p>`)

            L.marker([f.endereco.latitude, f.endereco.longitude], {icon: iconeVermelho, title : f.endereco.rua}).bindPopup(pop).addTo(leafletMapa);
            console.log("pins")       
        })

        
        
    })
    .catch(err => {
        console.log(err);        
    })
    


   // L.LatLng(enderecosFiltrados[0].cidade, enderecosFiltrados[0].longitude);    
        
  //  renderMap(enderecosFiltrados[0].latitude, enderecosFiltrados[0].longitude);
      
 
})

