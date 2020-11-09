let mySidenav = document.getElementById("mySidenav");
let principal = document.querySelector(".principal");

let btnAbrir = document.getElementById("btn-abrir");
let btnFechar = document.querySelector(".closebtn");


let larguraDaJanela = window.innerWidth;
console.log(larguraDaJanela);

// regra para abrir o menu quando clicar no menu no canto esquerdo da tela
if(larguraDaJanela <= 768) {
    btnAbrir.addEventListener("click", function openNav() {
        mySidenav.style.width = "180px";
        principal.style.margin = "0 0 0 200px";
    });
}
    if(larguraDaJanela <= 450) {
        btnAbrir.addEventListener("click", function openNav() {
            mySidenav.style.width = "150px";
            principal.style.margin = "0 0 0 180px";
        });
    }

        if(larguraDaJanela >= 1200) {
            btnAbrir.addEventListener("click", function openNav() {
                mySidenav.style.width = "200px";
                principal.style.margin = "0 0 0 240px";
                    
            });
        }

// regra para fechar o menu lateral
btnFechar.addEventListener("click", function closeNav() {
    mySidenav.style.width = "0";
    principal.style.marginLeft = "100px";
});


