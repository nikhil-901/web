let botScore=0;
let userScore=0;

let head=document.querySelector("#head");
let tail=document.querySelector("#tail");
let coin=document.querySelector("#fig");
let user=document.querySelector("#user");
let bot=document.querySelector("#bot");
let msg=document.querySelector("#msg");

const botChoice=()=>{
    let opt=["head","tail"];
    let botC=Math.floor(Math.random());
    return opt[botC];
}

head.addEventListener("click",()=>{
    let bot=botChoice();
    console.log("head",bot);
});
tail.addEventListener("click",()=>{
    let bot=botChoice();
    console.log("tail",bot);
});