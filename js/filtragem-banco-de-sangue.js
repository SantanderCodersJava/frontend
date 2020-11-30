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
        center: [-23.5455769,-46.6300977],
        zoom: 15 
    }
);

const baseMap = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${access_token}`, {} ); 

baseMap.addTo(leafletMapa);

document.getElementById("form-locais-mapa").addEventListener("submit", (e)=> {
    e.preventDefault();

 //   const cidade = document.getElementById("cidade").value;
 //   const uf = document.getElementById("uf").value;
    const content = document.getElementById("conteudo-tabela");

   // const enderecosFiltrados = enderecos.filter(e => e.cidade === cidade && e.estado === uf );
    
    axios.get("http://localhost:8080/banco")
    .then(res => {
        const banco = res.data;

        content.innerHTML = banco.map(b =>     
            `<tr>
                <td>${b.nome}</td>
                <td>${b.endereco.rua}</td>
                <td>${b.endereco.bairro}</td>
                <td>${b.endereco.numero}</td>
                <td><a href="">agendar</a></td>
            </tr>`      
        ).join('')

        console.log(banco.map(b => b.endereco))
        .forEach(e => {
            const pop = L.popup()
            .setLatLng([e.latitude, e.longitude])
            .setContent(`<p>${e.nome}</p>`)

            L.marker([e.latitude, e.longitude], {icon: iconeVermleho, title : e.endereco}).bindPopup(pop).addTo(leafletMapa);       
        })
    })
    .catch(err => {

    })
    


   // L.LatLng(enderecosFiltrados[0].cidade, enderecosFiltrados[0].longitude);    
        
  //  renderMap(enderecosFiltrados[0].latitude, enderecosFiltrados[0].longitude);
      
 
})

