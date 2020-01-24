let button_script = document.createElement("button")
button_script.innerText = "Обновить"
button_script.className = "button_script"
document.getElementsByClassName("card-header")[1].appendChild(button_script)

document.getElementsByClassName("button_script")[0].addEventListener("click",(e)=>{
    if((document.getElementsByClassName("inner-item")[0].getElementsByClassName("pricetext")).length = 1){
for(var i = 0; i<sselected.length;i++){
let a = document.createElement("div");
a.className = "pricetext";
a.innerText = "id: "+sselected[i].match("[0-9]*_[0-9]*_[0-9]*$")[0].match("[0-9]*")[0]+"| "+sselected[i].match("_[0-9]*_[0-9]*")[0].match("[0-9]*$");
a.style.background = "black";
a.style.fontSize = "0.8rem";
a.style.width = "100%";
a.style.position = "absolute";
document.getElementsByClassName("inner-item")[i].appendChild(a)
}
}
})
try {
document.getElementById("info-header").parentNode.removeChild(document.getElementById("info-header"));
}
catch (e) {};
//
try {
document.getElementById("ab_lasttrade").parentNode.removeChild(document.getElementById("ab_lasttrade"));
}
catch (e) {};



