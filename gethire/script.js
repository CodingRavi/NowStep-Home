const menu_btn=document.querySelector(".ri-menu-line")
const menu_slidrt=document.querySelector(".nav_bottem")
let ani=false
menu_btn.addEventListener("click", function(){
    if(ani==false){
        menu_slidrt.style.left = "0%";
        menu_slidrt.style.transition = "1s"
        ani=true
    }
    else{
        menu_slidrt.style.left = "-100%";
        menu_slidrt.style.transition = "1s"
        ani=false
    }
})