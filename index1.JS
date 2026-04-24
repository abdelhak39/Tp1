let nombreSecret = Math.floor(Math.random() * 10) + 1;

let tentative = 0;
let proposition;

while (proposition != nombreSecret) {
    proposition = Number(prompt("Devinez un nombre entre 1 et 10"));
    tentative++;

    if (proposition > nombreSecret) {
        alert("Le nombre est plus petit ⬇️");
    } 
    else if (proposition < nombreSecret) {
        alert("Le nombre est plus grand ⬆️");
    } 
    else {
        alert("🎉 Bravo ! Vous avez trouvé le nombre");
        alert("Nombre de tentatives = " + tentative);
    }
}