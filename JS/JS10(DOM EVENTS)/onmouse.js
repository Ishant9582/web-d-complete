let btns = document.querySelectorAll("button")
for(btn of btns){
    btn.onmouseenter = function(){
        console.log("you entered");
    }
    console.dir(btn)
    btn.onclick = ()=>{
        alert("you click on btn")
    }
}