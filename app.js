let gameseq=[];
let userseq=[];
let level=0;
let start=false;

let h3=document.querySelector("h3");

let buttons=["red","blue","green","yellow"];

document.addEventListener("keypress" ,function (){
    if(start==false){
        console.log("Game Started ");
        start=true;
        levelup();
    }
});

function levelup(){
    userseq=[];
    level++;
    h3.innerText="level "+level;


// flashing random button

let random=Math.floor(Math.random()*3);
let btnclr=buttons[random];

let blinkbutton=document.querySelector(`.${btnclr}`);

    gameseq.push(btnclr);
    console.log(gameseq);
    fleshButton(blinkbutton);
    
}

function fleshButton(btn){
    btn.classList.add("flesh");
    setTimeout(function(){
        btn.classList.remove("flesh");
    },500);
}

function btnpress(){
    let button=this;
    let userclr=button.getAttribute("id");
    userseq.push(userclr);
    checkans(userseq.length-1);
    
}

let allbuttons=document.querySelectorAll("#main div");
    for(btn of allbuttons){
        btn.addEventListener("click",btnpress);
    };


function  checkans(indx){
    if(userseq[indx]==gameseq[indx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    } else {
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        h3.innerText="Game over! Press any key to restart, Your Score is : " + (level-1);
        reset();
    }    

    
}

function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;

}