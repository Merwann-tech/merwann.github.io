// Initialise le nombre à deviner selon le mode de jeu (1 ou 2 joueurs)
let randomNumber = NumberOfPlayer()
// Initialise le compteur de tentatives à 1
let tentative = 1
// Récupère les different element html
const button = document.querySelector('button');
const h1 = document.querySelector('h1')
const body = document.querySelector('body')
const Moins = document.querySelector('#moins')
const Plus = document.querySelector('#plus')

/**
 * Retourne le nombre saisi par le joueur dans le champ d'entrée avec l'id "in".
 * @returns {number} Le nombre saisi par le joueur.
 */
function giveNumber(){
    return parseInt(document.getElementById("in").value);
}

/**
 * Demande au Joueur 1 de choisir un nombre entre 0 et 50 à faire deviner.
 * Continue de demander tant qu'un nombre valide n'est pas saisi.
 * @returns {number} Le nombre choisi à faire deviner.
 */
function giveRandomNumber(){
    let num = prompt(`Joueur 1 Choisis un nombre a faire deviner compris entre 0 et 50`)
    while (num > 50 || num < 0 ){
        num = prompt(`Joueur 1 Choisis un nombre a faire deviner compris entre 0 et 50`)
    }
    return parseInt(num)
}


/**
 * Vérifie si le nombre donné correspond au nombre à deviner.
 * Met à jour l'interface pour indiquer si la proposition est trop grande, trop petite ou correcte.
 * @param {number} givenNumber - Le nombre proposé par le joueur.
 * @param {number} randomNumber - Le nombre à deviner.
 */
function didIWin(givenNumber,randomNumber){
    if (givenNumber == randomNumber){
        win()
    }
    else if (givenNumber > randomNumber){
        h1.innerText = 'Le nombre est plus petit \n  tentative numéro :' + tentative
        let num = parseInt(Plus.innerText)
        if (givenNumber<num){
            Plus.innerText = givenNumber
        }
        tentative = tentative +1
    }
    else if (givenNumber < randomNumber){
        h1.innerText = 'Le nombre est plus grand \n  tentative numéro :' + tentative
        var num1 = parseInt(Moins.innerText);
        if (givenNumber > num1){
            Moins.innerText = givenNumber
        }
        tentative = tentative +1
    }
}

/**
 * Gère le scénario de victoire en mettant à jour l'interface avec un message de félicitations et un GIF.
 * Le message varie selon le nombre de tentatives.
 */
function win(){
    if (tentative <= 1){
        body.innerHTML = '<h1>Bravo ! Vous avez deviné le nombre en seulement ' + tentative + ' tentative</h1>' 
        body.innerHTML += '<img src="https://media1.tenor.com/m/6vjzHxepwDkAAAAC/pout-kiss.gif" alt="gif">'            
    }
    else if (tentative<=7){
        body.innerHTML = '<h1>Bravo ! Vous avez deviné le nombre en seulement ' + tentative + ' tentatives</h1>'
        body.innerHTML += '<img src="https://media1.tenor.com/m/6vjzHxepwDkAAAAC/pout-kiss.gif" alt="gif">'
    }
    else{
        body.innerHTML = '<h1>Bravo ! Vous avez deviné le nombre en ' + tentative + ' tentatives</h1>'
        body.innerHTML += '<img src=https://media.tenor.com/gmHrOv0ibXUAAAAM/pourri.gif" alt="gif">'  
    }
}

/**
 * Demande à l'utilisateur s'il souhaite jouer à deux joueurs.
 * Si oui, demande un nombre à deviner ; sinon, génère un nombre aléatoire.
 * @returns {number} Le nombre à deviner.
 */
function NumberOfPlayer(){
    let player = confirm("Voulez-vous jouer à deux joueurs ?")
    if (player == true){
        let randomNumber = giveRandomNumber()
        return randomNumber
    }
    else{
        let randomNumber =  getRandomArbitrary(0,50)
        console.log(randomNumber)
        return randomNumber
    }

}

/**
 * Génère un entier aléatoire entre min et max (inclus).
 * @param {number} min - La valeur minimale.
 * @param {number} max - La valeur maximale.
 * @returns {number} Un entier aléatoire entre min et max.
 */
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Écouteur d'événement pour le clic sur le bouton.
 * Récupère la proposition du joueur et vérifie si elle correspond au nombre à deviner.
 */
button.addEventListener('click', () => {
    let givenNumber = giveNumber()
    didIWin(givenNumber,randomNumber)
})



