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



// GSAP Animetion
var t1=gsap.timeline();
t1
.from("nav",{
    y: -20,
    opacity:0,
    duration:1
})
.from(".nav_bottem",{
    y: -20,
    opacity:0,
    duration:1
})
.from(".slide_right",{
    x: 100,
    opacity:0,
    duration:1
})
.from("#1head",{
    onStart:$(function(){
        $('#1head').textillate({ 
            in: { effect: 'bounceInDown',
            delayScale: 2,
            sequence:true,
            delay: 100,
            sync: false,
            shuffle: false,
            reverse: false,
     } });
    }),
    duration:2
})