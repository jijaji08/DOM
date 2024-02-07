let btn = document.querySelector("button");

let flag=0;

btn.addEventListener("click",function(){
    if(flag==0){
        let relation = document.querySelector("h4");
        relation.innerHTML="Friends";
        relation.style.color="green";
        btn.innerHTML="Remove Friend";
        flag=1;
    }else{
        let relation = document.querySelector("h4");
        relation.innerHTML="Stranger";
        relation.style.color="red";
        btn.innerHTML="Add Friend";
        flag=0;
    }
})