// there are four main pillers of DOM 
// 1.Selection.
// 2.change html of element
// 3.change css of element 
// 4.EventListener

let btn = document.querySelector("button");
btn.addEventListener("mousemove",function(){
    let txt = document.querySelector("h1");
    txt.style.color="red";
    txt.innerHTML= Math.floor(Math.random()*101);
})