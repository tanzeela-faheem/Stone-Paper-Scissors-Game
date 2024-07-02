let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#userscore");
const compScorepara=document.querySelector("#compscore");


const genCompChoice=() =>{
 let moves=["rock","paper","scissors"];
 const index=Math.floor(Math.random()*3);
 return moves[index];
}


const playGame=(userChoice)=>{
console.log("user choice = ",userChoice);
//generate computer's choice
const compChoice=genCompChoice();
console.log("comp choice = ",compChoice);
if(userChoice==compChoice){
msg.innerText="Game was DRAW.Play again!";
console.log("The game was draw");
msg.style.backgroundColor="black";
}
else{
    let userWin=true;
    if(userChoice==="rock")
     userWin=compChoice==="paper"?false:true;
    else if(userChoice==="paper")
    userWin=compChoice==="scissors"?false:true;
    else 
    userWin=compChoice==="rock"?false:true;
if(userWin==true){
    console.log("YOU WIN");
    msg.innerText=`YOU WON :)... Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    userScorepara.innerText=userScore;
}
else{
    console.log("YOU LOSE");
    msg.innerText=`YOU LOST :(... ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    compScore++;
    compScorepara.innerText=compScore;
}
}
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",() => {
    const userChoice=choice.getAttribute("id")
    // console.log("choice was clicked",userChoice);
    playGame(userChoice);
    })
});