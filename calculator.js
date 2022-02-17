let display=document.getElementById('screen');

let buttons=Array.from(document.getElementsByClassName('button'));

buttons.map(button=>{
    button.addEventListener('click',(e)=>{
            let eText=e.target.innerText;
            /* false if it is a Number*/
          
           switch (e.target.innerText){
               case 'C':
                   display.innerText="";
                   break;
               case 'D':
                   if(display.innerText){
                       display.innerText=display.innerText.slice(0,-1);
                   }
                   break;
               case '=':
                   try{
                       display.innerText=eval(display.innerText);
                   }catch{
                       display.innerText="Error!";
                       break;
                   }
                   break;
               default:
                   display.innerText+=e.target.innerText;
           }
        })
})
