const form = document.querySelector(".Quizz-form");
let tabResults= [];
const responses = ['a', 'c', 'b', 'a'];
const emojis = ['✔️','✨','👀','😭'];
const titleResult = document.querySelector('.results h2');
const helpResult = document.querySelector('.help');
const scoreResult = document.querySelector('.score');
const allQuestions = document.querySelectorAll('.question-block');
let verifTable = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 5; i++) {
        const elt= document.querySelector(`input[name="q${i}"]:checked`);
        
        if(elt){
            tabResults.push(elt.value)
        }    
    }
    verifFunc(tabResults);
    tabResults = [];
})

function verifFunc (tabResults) {
    for(let i=0; i < 4; i++){
        if(responses[i]===tabResults[i]){
            verifTable.push(true);
        }
        else{
            verifTable.push(false);
        }
    }
    //console.log(verifTable);
    showResults(verifTable);
}

function showResults(tabChecked){
    const numberFaults = tabChecked.filter(el => el !== true).length;
    //console.log(numberFaults);
    switch(numberFaults) {

        case 0:
            titleResult.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            helpResult.innerText = ''
            scoreResult.innerText = '4/4'
            break;
        case 1:
            titleResult.innerText = `✨ Vous y êtes presque ! ✨`
            helpResult.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            scoreResult.innerText = '3/4'
            break;
        case 2:
            titleResult.innerText = `✨ Encore un effort ... 👀`
            helpResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            scoreResult.innerText = '2/4'
            break;
        case 3:
            titleResult.innerText = `👀 Il reste quelques erreurs. 😭`
            helpResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            scoreResult.innerText = '1/4'
            break;
        case 4:
            titleResult.innerText = `😭 Peux mieux faire ! 😭`
            helpResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            scoreResult.innerText = '0/4'
            break;

            default:
                'Oops, cas innatendu.';
}
}