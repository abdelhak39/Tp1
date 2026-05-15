let maDiv = document.createElement("div");
document.body.appendChild(maDiv);

let paragraphe = document.createElement("p");
paragraphe.textContent = "Ceci est un paragraphe";
maDiv.appendChild(paragraphe);

paragraphe.textContent = "Le texte a été modifié";

paragraphe.style.backgroundColor = "lightblue";
paragraphe.style.textAlign = "center";
paragraphe.style.padding = "10px";

maDiv.addEventListener("click", function () {
    paragraphe.textContent = "Un clic a été détecté";
});