let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset");
let newBtn= document.querySelector(".new");
let msgcontainer= document.querySelector(".msg-container");
let msg= document.querySelector(".msg");

let currplay=true;
let count=0;

const wincomb=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        if(currplay){
            box.innerText="O";
            currplay= false;
        }
        else{
            box.innerText="X";
            currplay=true;
        }
        box.disabled= true;
        count++;
        let iswinner= calwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    });
});

const gamedraw= () =>{
    msg.innerText= "GAME DRAW";
    msgcontainer.classList.remove("hide");
    disablebox();
};


const resetgame= () => {
    currplay= true;
    enablebox();
    msgcontainer.classList.add("hide");
    count=0;
};


const calwinner = () => {
    for(let pattern of wincomb){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
            showwinner(pos1val);
            return true;
        }
        }
    }
};

const disablebox= () => {
    for(let box of boxes){
        box.disabled= true;
    }
};

const enablebox= () => {
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
};

const showwinner=(winner) =>{
    msg.innerText= `CONGRATULATIONS Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};

newBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);