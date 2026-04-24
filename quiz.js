const QUESTIONS = [
    ["Quelle est la capitale de la France ?", "Paris"],
    ["Combien de jours y a-t-il dans une semaine ?", "7"],
    ["Quelle est la couleur du ciel ?", "Bleu"],
    ["2 + 2 = ?", "4"],
    ["Quel est le plus grand océan du monde ?", "Pacifique"]
];

function lancerQuiz() {
    let score = 0;

    for (let i = 0; i < QUESTIONS.length; i++) {
        let question = QUESTIONS[i][0];
        let reponseCorrecte = QUESTIONS[i][1];

        let reponseUser = prompt(question);

        if (reponseUser == reponseCorrecte) {
            alert("Réponse juste");
            score++;
        } else {
            alert("Réponse fausse");
        }
    }

    alert("Résultat final : " + score + " / " + QUESTIONS.length);
}