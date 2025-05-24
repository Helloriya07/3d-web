//----> Locomotive or gsap dono ek sath nhi chalege qki locomotive hijack kr leta hai 
// scrolltrigger ko dono ko sath me use krne ke liye dusra step hai jo follow krna hoga

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);


    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px"
    crsr.style.top = dets.y + 20 + "px"
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h2",
        scroller: ".main",
        // markers: true,
        start: "top 27",
        end: "top 0",
        scrub: 3,
    }
})
tl.to(".page1 h2", {
    x: -100,
    duration: 1,
}, "anim")

tl.to(".page1 h3", {
    x: 100,
    duration: 1,
}, "anim")

tl.to(".page1 video", {
    width: "75%"
}, "anim")


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h2",
        scroller: ".main",
        markers: true,
        start: "top -700",
        end: "top -100",
        scrub: 3,
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3 h2",
        scroller: ".main",
        markers: true,
        start: "top 300",
        end: "top -350",
        scrub: 3,
    }
})
tl3.to(".main", {
    backgroundColor: "#0F0D0D",
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var att = elem.getAttribute("data-image")
        console.log(att)
        crsr.style.width = "300px"
        crsr.style.height = "250px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`

    })
    elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "transparent";
        crsr.style.width = "10px"
        crsr.style.height = "10px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`

    })
})
var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        purple.style.display = "block"
        purple.style.opacity = 1
    })
    val.addEventListener("mouseleave", function () {
        purple.style.display = "none"
        purple.style.opacity = 0
    })
})



