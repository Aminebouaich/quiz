const btn = document.getElementById("HTMLidBoutton");
let chiffreATrouver = Math.ceil(Math.random() * 30);
console.log(chiffreATrouver);
let tentativeRestante = 5;

let reponseDuJoueur = document.getElementById("HTMLid_InputNumber");
let textTentative = document.getElementById("HTMLid_Texte_IlVousReste");
// let plusOuMoins = document.getElementById("HTMLidPlusOuMoins");
const elementClasses = textTentative.classList;
// let winOrLose = document.getElementById("HTMLid_Texte_YouWinOrLoose");



function CheckTheResult() {
    let chiffreDuJoueur = parseInt(reponseDuJoueur.value);
    tentativeRestante--;

    textTentative.innerHTML = `${tentativeRestante} Tentatives restantes.`
    textTentative.innerHTML += `<br/> Essayez encore ! 
    `
    for (i = 0; i < elementClasses.length; i++) {
        elementClasses.remove(elementClasses[i]);
    }

    if (chiffreATrouver === chiffreDuJoueur) {
        textTentative.innerHTML = "You Win !";
        tentativeRestante = 5;
        chiffreATrouver = Math.ceil(Math.random() * 30);
        textTentative.setAttribute("class", "gagner");
    } 
    else if (tentativeRestante === 0) {
        textTentative.innerHTML = " GAME OVER ";
        tentativeRestante = 5;
        chiffreATrouver = Math.ceil(Math.random() * 30);
        textTentative.setAttribute("class", "perdu");
    } 
    else if (chiffreATrouver > chiffreDuJoueur) {
        textTentative.innerHTML += " <br> C'est Plus !"
        textTentative.setAttribute("class", "tentative");
    } 
    else if (chiffreATrouver < chiffreDuJoueur) {
        textTentative.innerHTML += " <br> C'est Moins !"
        textTentative.setAttribute("class", "tentative");
    }

}

