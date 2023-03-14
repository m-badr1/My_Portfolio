
let switcherlis = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".cards .card-box");


switcherlis.forEach((li) =>{
    li.addEventListener("click" , removeActive);
    li.addEventListener("click" , manageImgs);
});

// Remove Active Class Frome All Lis And Add To Current
function removeActive(){
    switcherlis.forEach((li) =>{
        li.classList.remove("active");
        this.classList.add("active")
    });
}

// Manage Imges
function manageImgs(){
    imgs.forEach((img) =>{
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) =>{
        el.style.display = "block";
    })
}

function copy(el){
    let myInp =document.getElementById("input");
    let span=document.querySelector(`#${el}`);
    myInp.value=span.innerText;
    myInp.select();
    document.execCommand("copy");
    myInp.type="text"
}