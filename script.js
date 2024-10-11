let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let systembox=document.querySelector("#system");
let playerbox=document.querySelector("#player");
let aidata=document.querySelector("#ai");
let playerdata=document.querySelector("#you");
let result=document.querySelector("#result");
let reset=document.querySelector("#reset");
let next=document.querySelector("#next");
let btns=document.querySelectorAll(".btns");
let ai=0;
let player=0;

const aivalue=()=>{
    let temp=Math.floor(Math.random() * 10);
    if(temp<=2)
        return 0;
    else if(temp<=7 &&temp>2){
        return 1;
    }else{
        return 2;
    }
}

const resetgame=()=>{
    ai=0;
    player=0;
    for(let b of btns){
        b.disabled=false;
    }
    aidata.innerText="AI";
    playerdata.innerText="YOU";
    result.innerText="-";
    systembox.innerHTML='<i class="fa-regular fa-face-smile icon"></i>'
    playerbox.innerHTML='<i class="fa-regular fa-face-smile icon"></i>'
    playerbox.style.backgroundColor="white";
    systembox.style.backgroundColor="white";
}

const nextround=()=>{
    // aidata.innerText="AI";
    // playerdata.innerText="YOU";
    for(let b of btns){
        b.disabled=false;
    }
    result.innerText="-";
    systembox.innerHTML='<i class="fa-regular fa-face-smile icon"></i>'
    playerbox.innerHTML='<i class="fa-regular fa-face-smile icon"></i>'
    playerbox.style.backgroundColor="white";
    systembox.style.backgroundColor="white";
}

const draw=(id)=>{
    result.innerText="Draw";
    switch(id){
        case 0:

            console.log("check");
            playerbox.innerHTML='<i class="fa-solid fa-hand-fist icon"></i>';
            systembox.innerHTML='<i class="fa-solid fa-hand-fist icon"></i>';
            break;
        case 1:
            playerbox.innerHTML='<i class="fa-solid fa-hand icon"></i>';
            systembox.innerHTML='<i class="fa-solid fa-hand icon"></i>';
            break;
        case 2:
            playerbox.innerHTML='<i class="fa-solid fa-hand-peace icon"></i>';
            systembox.innerHTML='<i class="fa-solid fa-hand-peace icon"></i>';
            break;
    }
    playerbox.style.backgroundColor="#F4CF15";
    systembox.style.backgroundColor="#F4CF15";
}

const winner=(w,id,random)=>{
    if(w==0){
        systembox.style.backgroundColor="#68C92C";
        playerbox.style.backgroundColor="red";
        ai++;
        result.innerText="Round Lose";
        aidata.innerText=`AI ${ai}`;
        switch(random){
            case 0:
                systembox.innerHTML='<i class="fa-solid fa-hand-fist icon"></i>';
                break;
            case 1:
                systembox.innerHTML='<i class="fa-solid fa-hand icon"></i>';
                break;
            case 2:
                systembox.innerHTML='<i class="fa-solid fa-hand-peace icon"></i>';
                break;
            default:
                console.log("Unexpected output");
                break;
        }
        switch(id){
            case 0:
                playerbox.innerHTML='<i class="fa-solid fa-hand-fist icon"></i>';
                break;
            case 1:
                playerbox.innerHTML='<i class="fa-solid fa-hand icon"></i>';
                break;
            case 2:
                playerbox.innerHTML='<i class="fa-solid fa-hand-peace icon"></i>';
                break;
            default:
                console.log("Unexpected output");
                break;
        }
    }else if(w==1){
        playerbox.style.backgroundColor="#68C92C";
        systembox.style.backgroundColor="red";
        player++;
        result.innerText="Round Win";
        playerdata.innerText=`You ${player}`;
        switch(id){
            case 0:
                playerbox.innerHTML='<i class="fa-solid fa-hand-fist icon"></i>';
                break;
            case 1:
                playerbox.innerHTML='<i class="fa-solid fa-hand icon"></i>';
                break;
            case 2:
                playerbox.innerHTML='<i class="fa-solid fa-hand-peace icon"></i>';
                break;
            default:
                console.log("Unexpected output");
                break;
        }
        switch(random){
            case 0:
                systembox.innerHTML='<i class="fa-solid fa-hand-fist icon"></i>';
                break;
            case 1:
                systembox.innerHTML='<i class="fa-solid fa-hand icon"></i>';
                break;
            case 2:
                systembox.innerHTML='<i class="fa-solid fa-hand-peace icon"></i>';
                break;
            default:
                console.log("Unexpected output");
                break;
        }
    }
}

const checkwinner=(id,random)=>{
    if(id==random){
        draw(id);
    }else if(id==0 && random==1){
        winner(0,id,random);
    }else if(id==0 && random==2){
        winner(1,id,random);
    }else if(id==1 && random==0){
        winner(1,id,random);
    }else if(id==1 && random==2){
        winner(0,id,random);
    }else if(id==2 && random==0){
        winner(0,id,random);
    }else if(id==2 && random==1){
        winner(1,id,random);
    }else{
        console.log("Error");
    }
}

const disablebtn=()=>{
    for(let b of btns){
        b.disabled=true;
    }
    // btns.disabled=true;
}
rock.addEventListener("click",()=>{
    checkwinner(0,aivalue());
    disablebtn();
});

paper.addEventListener("click",()=>{
    checkwinner(1,aivalue());
    disablebtn();
});

scissor.addEventListener("click",()=>{
    checkwinner(2,aivalue());
    disablebtn();
});

reset.addEventListener("click",()=>{
    resetgame();
});

next.addEventListener("click",()=>{
    nextround();
})