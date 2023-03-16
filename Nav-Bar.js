// Nav-Bar////////////////////////////
let solid=document.querySelector(".fa-bars");
let responsive=document.querySelector(".responsive");
let xmark=document.querySelector(".fa-xmark");

solid.onclick =function(){
    responsive.classList.add("open")
    solid.style.display="none";
    xmark.style.display="block";

}

xmark.onclick =function(){
    this.parentElement.classList.remove("open")
    solid.style.display="block";
    xmark.style.display="none";
}