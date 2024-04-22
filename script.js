var botScore=0;
var userScore=0;
var botC=0;
var color=0;

const head=document.querySelector("#head");
const tail=document.querySelector("#tail");
const coin=document.querySelector("#fig");
const user=document.querySelector("#user");
const comp=document.querySelector("#bot");
const msg=document.querySelector("#msg");
const theme=document.querySelector("#theme");

theme.addEventListener("click",()=>{
    if(color===0){
        color=1;
    document.querySelector("body").style.backgroundColor="black";
    coin.style.backgroundImage="radial-gradient(silver,grey,black)";
    coin.style.border="1px solid white";
    document.querySelector("#score-board").style.color="white";
    msg.style.backgroundColor="blanchedalmond";
    msg.style.color="black";
    theme.style.backgroundColor="black";
    theme.style.color="white";
    document.querySelector("h1").style.backgroundColor="burlywood";
    document.querySelector("h1").style.color="black";
    }else{
        color=0;
        document.querySelector("body").style.backgroundColor="white";
    coin.style.backgroundImage="radial-gradient(goldenrod,yellow)";
    coin.style.border="1px solid black";
    document.querySelector("#score-board").style.color="black";
    msg.style.backgroundColor="purple";
    msg.style.color="aliceblue";
    theme.style.backgroundColor="white";
    theme.style.color="black";
    document.querySelector("h1").style.backgroundColor="darkblue";
    document.querySelector("h1").style.color="blanchedalmond";

    }
});

const botChoice=()=>{
    let opt=["head","tail"];
    let botC=Math.floor(Math.random()*2);
    return opt[botC];
};

const playGame=(userChoice)=>{
    if(userChoice===botC){
        win(botC);
    }else{
        loss(botC);
    }
};

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
};

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
};

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