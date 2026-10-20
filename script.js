

let userscr=0;
let cmpscr=0;
document.getElementById("rock").addEventListener("click",()=>
{
    play("rock");
})
document.getElementById("paper").addEventListener("click",()=>
{
    play("paper");
})
document.getElementById("scissor").addEventListener("click",()=>
{
    play("scissor");
})

function play(value)
{
    let choice=["rock","paper","scissor"];
    let computerchoice=choice[Math.floor(Math.random()*3)];


    if(value == computerchoice)
    {
  document.getElementById("win").textContent="Draww!!"
  document.getElementById("win").style.color="blue";
    }
    else if(value=="rock" && computerchoice=="paper" || value=="scissor" && computerchoice=="paper" || value=="rock" && computerchoice=="scissor")
    {
        userscr++;
        document.getElementById("win").textContent="You win!"
         document.getElementById("win").style.color="rgb(0, 229, 0)";

    }
  else{
    cmpscr++;
    document.getElementById("win").textContent="Computer win!"
    document.getElementById("win").style.color="red";
  }


  document.getElementById("myscr").textContent=`You: ${userscr}`;
  document.getElementById("cmscr").textContent=`Computer: ${cmpscr}`;
}

