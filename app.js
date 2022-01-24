const form = document.querySelector(".Quizz-form");
let tabResults= [];



form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        const elt= document.querySelector(`input[name="q${i}"]:checked`);
        
        if(elt){
            tabResults.push(elt.value)
        }    
    }
    console.log(tabResults);
    tabResults = [];
})
