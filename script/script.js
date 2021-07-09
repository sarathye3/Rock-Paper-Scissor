'use strict';
let [userScore,computerScore]=[0,0];
let computerChoice =['Rock','Paper','Scissor'];
let results;
function choice(input){
    let randomNumber=Math.trunc(Math.random()*3);
    document.getElementById("user-choice").innerHTML=`You choose <span>${input.toUpperCase()}</span>`;
    document.getElementById("computer-choice").innerHTML=`Computer choose <span>${computerChoice[randomNumber].toUpperCase()}</span>`;
    if(input==='Rock'){
        if(computerChoice[randomNumber]=='Rock'){
            results='Draw';
        }
        else if(computerChoice[randomNumber]=='Paper'){
            results='Loose';computerScore++;
        }
        else if(computerChoice[randomNumber]=='Scissor'){
            results='Win';userScore++;
        }
    }
    else if(input=='Paper'){
        if(computerChoice[randomNumber]=='Rock'){
            results='Win';userScore++;
        }
        else if(computerChoice[randomNumber]=='Paper'){
            results='Draw';
        }
        else if(computerChoice[randomNumber]=='Scissor'){
            results='Loose';computerScore++;
        }
    }
    else if(input=='Scissor'){
        if(computerChoice[randomNumber]=='Rock'){
            results='Loose';computerScore++;
        }
        else if(computerChoice[randomNumber]=='Paper'){
            results='Win';userScore++;
        }
        else if(computerChoice[randomNumber]=='Scissor'){
            results='Draw';
        }
    }
    document.getElementById("user-score").innerText=userScore;
    document.getElementById("computer-score").innerText=computerScore;
    document.getElementById("result").innerHTML=`${results}`;
}