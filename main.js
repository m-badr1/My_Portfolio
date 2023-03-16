// ScrollToTop/////////////////////////////////
let span=document.querySelector(".up");
span.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth"
        
    })
}

// onscroll//////////////////////////////
let nams=document.querySelectorAll(".card .bad");
let box=document.querySelector(".working_statistics")
let skills=document.querySelector(".my_skills");
let bar=document.querySelectorAll(".bar span");


// Change navigation active class on scroll 
let sections = document.querySelectorAll("section")

let started=false;
window.onscroll = function(){
    if(window.scrollY >= box.offsetTop - 100){
        if(!started){
        nams.forEach((bad) =>startCount(bad))
        }
        started = true
    }
    // skills///////////////////////////////
    if(window.scrollY >= skills.offsetTop){
        bar.forEach((span) => {
            span.style.width =span.dataset.width;
        });
    };

    // ScrollToTop/////////////////////////////////
    if(this.scrollY >= 1000){
        span.classList.add("show")
    }else{
        span.classList.remove("show")
    }

    if(this.scrollY >= 1000 ){
        responsive.classList.remove("open")
    }
    if(this.scrollY >= 1000){
        solid.style.display="block"
    }
    if(this.scrollY >= 1000){
        xmark.style.display="none"
    
    }

    // Change navigation active class on scroll //////////////////////
    var scrollPosition = document.documentElement.scrollTop
    sections.forEach(section => {
        if(scrollPosition >= section.offsetTop
            - section.offsetHeight * 0.100 && 
            scrollPosition < section.offsetTop + section.offsetHeight
            - section.offsetHeight * 0.100 ){
            var currentId=section.attributes.id.value;
            removeActiveClasses();
            addActiveClasses(currentId);
        }
    })
}

// Change navigation active class on scroll 
var removeActiveClasses = function(){
    document.querySelectorAll(".linkNav ul li a").forEach(el =>{
        el.classList.remove("Home")
    })
}
var addActiveClasses=function(id){
    var selector =`.linkNav ul li a[href="#${id}"]`;
    document.querySelector(selector).classList.add("Home")
}
function startCount(el){
    let goal=el.dataset.goal;
    let count=setInterval(() =>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    } , 3000 / goal)
}

