let randomNumber = NumberOfPlayer()
let tentative = 1
const button = document.querySelector('button');
const h1 = document.querySelector('h1')
const body = document.querySelector('body')
const Moins = document.querySelector('#moins')
const Plus = document.querySelector('#plus')


function giveNumber(){
    return parseInt(document.getElementById("in").value);
    // return prompt(`choisis un nombre compris entre 1 et 50`)
}

function giveRandomNumber(){
    let num = prompt(`Joueur 1 Choisis un nombre a faire deviner compris entre 0 et 50`)
    while (num > 50 || num < 0 ){
        num = prompt(`Joueur 1 Choisis un nombre a faire deviner compris entre 0 et 50`)
    }
    return parseInt(num)
}



function didIWin(givenNumber,randomNumber){
    if (givenNumber == randomNumber){
        win()
        // alert(`Bravo ! Vous avez deviné le nombre`)
        // return true
    }
    else if (givenNumber > randomNumber){
        h1.innerText = 'Le nombre est plus petit \n  tentative numéro :' + tentative
        let num = parseInt(Plus.innerText)
        if (givenNumber<num){
            Plus.innerText = givenNumber
        }
        tentative = tentative +1
        // alert(`Plus petit`)
        // return false
    }
    else if (givenNumber < randomNumber){
        h1.innerText = 'Le nombre est plus grand \n  tentative numéro :' + tentative
        var num1 = parseInt(Moins.innerText);
        if (givenNumber > num1){
            Moins.innerText = givenNumber
        }
        tentative = tentative +1
        // alert(`Plus grand`)
        // return false
    }
}

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

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

button.addEventListener('click', () => {
    let givenNumber = giveNumber()
    didIWin(givenNumber,randomNumber)
})



// function gamePlay(){
//     let randomNumber = giveRandomNumber()
//     // let randomNumber = 5
//     let givenNumber = parseInt(giveNumber())
//     while (didIWin(givenNumber,randomNumber) == false){
//         givenNumber = giveNumber()
//     }
// }

