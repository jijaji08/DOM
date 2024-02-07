let flag=null;
let btnOpen = document.querySelector("#button");
btnOpen.addEventListener("click",function(){
    openClose(0);
})
let btnClose = document.querySelector("#close");
btnClose.addEventListener("click",function(){
    openClose(1);
})

function openClose(flag){
    if(flag==0){
        let ovrly= document.querySelector("#overlay").style.opacity= 1;
        document.querySelector("#modal").style.top= "15%";
        document.getElementById("overlay").style.pointerEvents = "fill";
        
        flag=1;
    }
    else{
        let ovrly= document.querySelector("#overlay").style.opacity= 0.0;
        document.getElementById("overlay").style.pointerEvents = "none";
        document.querySelector("#modal").style.top= "5%";
        flag=0;
    }
    
}