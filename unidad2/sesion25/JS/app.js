// document.querySelector ("h1") o  (".boton") o ("#demo")


 const  parrafo  =document.getElementById("demo");
// let text = ""; //texto vacio
// 
// for (let i =0 ;i<10; i++){
// text +=i + "<br>"
// }
// parrafo.innerHTML = text;
let text = "";

const animes = ["SNK", "Naruto", "Saint Saya", "Los 7 pecados capitales", "Tokio Ghoul"];

for (let i = 0; i < animes.length; i++) {
    text += animes[i] + "<br>" + `<img src="./img/imagen${i}.jpg" >` + "<br>";
}
parrafo.innerHTML = text;
