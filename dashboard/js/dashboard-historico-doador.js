let mySidenav = document.getElementById("mySidenav");
let principal = document.querySelector(".principal");

let btnAbrir = document.getElementById("btn-abrir");
let btnFechar = document.querySelector(".closebtn");


let larguraDaJanela = window.innerWidth;
console.log(larguraDaJanela);

// regra para abrir o menu quando clicar no menu no canto esquerdo da tela

    if(larguraDaJanela <= 360) {
        btnAbrir.addEventListener("click", function openNav() {
            mySidenav.style.width = "150px";
            principal.style.padding = "0 0 0 0px";
        });
    }

    if(larguraDaJanela <= 768) {
        btnAbrir.addEventListener("click", function openNav() {
            mySidenav.style.width = "180px";
            principal.style.padding = "0 0 0 0px";
        });
    }

    if(larguraDaJanela > 768) {
        btnAbrir.addEventListener("click", function openNav() {
            mySidenav.style.width = "200px";
            principal.style.padding = "0 0 0 200px";              
        });
    }

// regra para fechar o menu lateral
btnFechar.addEventListener("click", function closeNav() {
    mySidenav.style.width = "0";
    principal.style.paddingLeft = "0";
});
