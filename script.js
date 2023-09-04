let cursor = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
let Allh4 =  document.querySelectorAll("#nav h4");

document,addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+ 20 + "px";
    cursor.style.top = dets.y + "px"; 
    blur.style.left = dets.x-250+ "px";
    blur.style.top = dets.y-250 + "px"; 
})

Allh4.forEach((element) => {
    element.addEventListener("mouseenter", function(){
        cursor.style.transform = "scale(2.5)";
        cursor.style.transition = "all linear 0.1s";
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "0.5px solid #fff";
    })
    element.addEventListener("mouseleave", function(){
        cursor.style.transform = "scale(1)";
        cursor.style.transition = "all linear 0.1s";
        cursor.style.backgroundColor = "#95C11E";
        cursor.style.border = "none";
    }
    )
})


gsap.to("#nav", {
   backgroundColor: "#000",
   duration: 0.5,
   height: "110px",
   scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
   }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -50%",
        end: "top -100%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-content",{
    y: 100,
    opacity: 0,
    duration: 1.5,
    // stagger: 0.5,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 1 
    } 
})