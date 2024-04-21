var botScore=0;
var userScore=0;
var botC=0;

const head=document.querySelector("#head");
const tail=document.querySelector("#tail");
const coin=document.querySelector("#fig");
const user=document.querySelector("#user");
const comp=document.querySelector("#bot");
const msg=document.querySelector("#msg");

const botChoice=()=>{
    let opt=["head","tail"];
    let botC=Math.floor(Math.random()*2);
    return opt[botC];
}



const playGame=(userChoice)=>{
    if(userChoice===botC){
        win(botC);
    }else{
        loss(botC);
    }
}

function win(botC){
    userScore++;
    user.innerText=userScore;
    msg.style.backgroundColor="green";
    msg.innerText="you won the toss";

    if(botC=="head"){
        coin.style.animation="flipHead 3s forwards";
    }else{
        coin.style.animation="flipTail 3s forwards";
    }
}

function loss(botC){
    botScore++;
    comp.innerText=botScore;
    msg.style.backgroundColor="red";
    msg.innerText="you lost the toss";
    if(botC=="head"){
        coin.style.animation="flipHead 3s forwards";
    }else{
        coin.style.animation="flipTail 3s forwards";
    }
}

head.addEventListener("click",()=>{
    botC=botChoice();
    const userChoice=head.getAttribute("id");
    playGame(userChoice);
});
tail.addEventListener("click",()=>{
    botC=botChoice();
    userChoice=tail.getAttribute("id");
    playGame(userChoice);
});