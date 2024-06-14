const ibagens = [
  "cachorro1.jpg",
  "cachorro2.jpg",
  "capivara1.png",
  "capivara2.jpg",
  "capivara3.jpg",
  "cavalo1.jpg",
  "cavalo2.jpg",
  "foca1.jpg",
  "foca2.jpg",
  "gato1.jpg",
  "gato2.jpg",
  "piriquito1.jpg",
  "piriquito2.gif",
];

const txtLegenda = document.getElementById("texto");
const meme = document.getElementById("meme");

function gerar() {
  if (txtLegenda.value) {
    meme.innerHTML = "";
    let img = document.createElement("img");
    img.className = "ibagem";
    img.src = "./img/" + random();
    img.alt = "el meme";

    meme.appendChild(img);

    let legenda = document.createElement("h2");
    legenda.className = "legenda";
    legenda.textContent = txtLegenda.value;

    meme.appendChild(legenda);

    txtLegenda.value = "";
  }
}

function random() {
let i = Math.floor(Math.random() * ibagens.length);

return ibagens[i]
}
