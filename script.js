const form = document.querySelector(".form-quizz");

let tableauResultat = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log(document.querySelector("input[name='q1']:checked").value);



    for (let index = 1; index < 6; index++) {
        tableauResultat.push(document.querySelector(`input[name='q${index}']:checked`).value)
    }

    // console.log(tableauResultat);

    verifFunc(tableauResultat);

    tableauResultat = [];

});

function verifFunc(tabResultats) {
 
    for(let i = 0; i < 5; i++){

        if (tableauResultat[i] === reponses[i]) {
            //Se il primo elemento del primo array e il primo elemento del secondo array sono strettamente uguali

            verifTableau.push(true);

        }else {

            verifTableau.push(false);
        }
    

    }

    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);

    verifTableau = [];
}



function afficherResultats (tabCheck) {
    //*Creaiamo un nuovo array con tuttli gli elementi che sono strettamente diversi da "True" e ne ricaviamo la lunghezza
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);


    // Facciamo uno switch per definire i diversi casi punteggio del quiz in base la valore della variabile "nbDeFautes".

    switch (nbDeFautes) {

        //Con il metodo InnerText aggiungiamo del testo 

        //Con il metodo InnerHtml aggiungiamo dell'HTML
       case 0:
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';
    }

}

function couleursFonction(tabValBool) {

    for (let j = 0; j < tabValBool.length; j++) {

        if (tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }



    }



};

toutesLesQuestions.forEach( item => {
//Per ogni blocco di domande cliccato aggiungo il background bianco
    item.addEventListener( 'click', () => {

        item.style.background = "white";

    } )

});







