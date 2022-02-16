const audio=document.getElementById("boom");

function whenPressed(playerChoice){
    const choices=["rock",'papper','scissors'];
    const PcChoice=Math.floor(Math.random()*choices.length)
    const choice=playerChoice.value;
    const audio=document.getElementById("boom");
    audio.currentTime=0;
    audio.play();

    if(choices[PcChoice]==="rock"&&choice==="papper"){
        alert("You Win PC Chose Rock!");
    }else if(choices[PcChoice]==="rock"&&choice==="scissors"){
          alert("You Lose PC Chose Rock!")
    }else if(choices[PcChoice]==="papper"&&choice==="rock"){
         alert("You Lose PC Chose Papper!")
    }else if(choices[PcChoice]==="scissors"&&choice==="rock"){
        alert("You Win PC Chose Scissors")
    }else if(choices[PcChoice]==="scissors"&&choice==="papper"){
        alert("You Lose PC Chose Scissors")
    }else if(choices[PcChoice]==="papper"&&choice==="scissors"){
        alert("You Win PC Chose papper")
    }else if(choices[PcChoice]===choice){
        alert("Its a Tie")
    }
}
