let userscore = 0;
let compscore = 0;

const userwins = document.querySelector("#user-score");
const compwins = document.querySelector("#comp-score");

let text = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const gencompchoice = () =>{
    const option= ["rock", "paper", "scissors"]
    const randomn = Math.floor(Math.random()*3);
    return option[randomn];
}

const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        text.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        text.style.backgroundColor="green";
        userscore++;
        userwins.innerText = userscore; 
    }else{
        text.innerText = `you lose! ${compchoice} beats your ${userchoice}`;
        text.style.backgroundColor="red";
        compscore++;
        compwins.innerText = compscore;
    }
}

const playgame = (userchoice) =>{
    console.log("user choice=", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice=", compchoice);
    if(userchoice === compchoice){
        text.innerText="game draw, try again";
        text.style.backgroundColor="";
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
           userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
             userwin = compchoice === "scissors" ? false :true;
        }else{
            userwin = compchoice === "rock" ? false :true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})