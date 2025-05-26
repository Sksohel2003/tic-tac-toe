let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new")
let msgcon=document.querySelector(".msg-con")
let msg=document.querySelector("#msg")
let turn0=true;
let pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
           box.innerText="O";
           turn0=false; 
           count+=1;
        }
        else{
            box.innerText="X";
            turn0=true;
            count+=1;
        }
        box.disabled=true;
        checkwinner();
    });
});
const showwinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner} 🎉🎉`
    msgcon.classList.remove("hide");
    disable()

}
let draw=true;
const checkwinner=()=>{
    for(let win of pattern){
        let pos1=boxes[win[0]].innerText;
        let pos2=boxes[win[1]].innerText;
        let pos3=boxes[win[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1)
                draw=false;
            }
            else if(count===9 && draw===true){
                msgcon.classList.remove("hide");
                msg.innerText="Game Drawn 🥲";
            }
        } 
    }
}
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
    turn0=true;
    enable();
    msgcon.classList.add("hide")
    draw=true;
    count=0;
}
newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
