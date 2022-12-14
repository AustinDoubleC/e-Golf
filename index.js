gsap.registerPlugin(ScrollTrigger)

const btnChatOpen = document.getElementById("chatOpen")
const chatbox = document.getElementById("chatbox")
const btnChatClose = document.getElementById("chatClose")
const btnSendChat = document.getElementById("btnSendChat")
const chatInput = document.getElementById("chatInput")
const performanceTab = document.getElementById("performance-tab")
const measurementTab = document.getElementById("measurement-tab")
const miscTab = document.getElementById("misc-tab")
const specImg1 = document.getElementById("spec-img-1")
const specImg2 = document.getElementById("spec-img-2")
const specImg3 = document.getElementById("spec-img-3")
const items = document.querySelectorAll('.carousel .carousel-item')
const forms = document.querySelectorAll('.needs-validation')

//Animation
gsap.to("#cta-container",{
    scrollTrigger:{
        trigger:"#hero",
        start:"bottom top",
        scrub:1
    },
    opacity:1,
    duration:0.01,
})

gsap.from(".hero-content",{
    scrollTrigger:{
        trigger:".hero-content",
        start:"top bottom",
    },
    x:300,
    opacity:0,
    duration:0.5,
})

gsap.from("#highlight",{
    scrollTrigger:{
        trigger:"#highlight",
        start:"top bottom",
    },
    y:100,
    opacity:0,
    duration:0.5,
})

gsap.from("#feature",{
    scrollTrigger:{
        trigger:"#feature",
        start:"top bottom",
    },
    y:100,
    opacity:0,
    duration:0.5,
})

gsap.from("#desc1",{
    scrollTrigger:{
        trigger:"#desc1",
        start:"top bottom",
    },
    y:100,
    opacity:0,
    duration:0.5,
})

gsap.from("#desc2",{
    scrollTrigger:{
        trigger:"#desc2",
        start:"top bottom",
    },
    y:100,
    opacity:0,
    duration:0.5,
})

gsap.from("#desc3",{
    scrollTrigger:{
        trigger:"#desc3",
        start:"top bottom",
    },
    y:100,
    opacity:0,
    duration:0.5,
})

gsap.from(".desc-title-content",{
    scrollTrigger:{
        trigger:".desc-title-content",
        start:"top bottom",
    },
    y:-75,
    opacity:0,
    duration:0.5,
})

gsap.from("#spec",{
    scrollTrigger:{
        trigger:"#spec",
        start:"top bottom",
    },
    y:100,
    opacity:0,
    duration:0.5,
})


/*Tab image control*/
performanceTab.addEventListener("click",()=>{
    specImg1.style.display = "block"
    specImg2.style.display = "none"
    specImg3.style.display = "none"
    specImg2.style.opacity = 0
    specImg3.style.opacity = 0
    setTimeout(()=>specImg1.style.opacity=1,50)
})
measurementTab.addEventListener("click",()=>{
    specImg2.style.display = "block"
    specImg1.style.display = "none"
    specImg3.style.display = "none"
    specImg1.style.opacity = 0
    specImg3.style.opacity = 0
    setTimeout(()=>specImg2.style.opacity=1,50)
})
miscTab.addEventListener("click",()=>{
    specImg3.style.display = "block"
    specImg1.style.display = "none"
    specImg2.style.display = "none"
    specImg1.style.opacity = 0
    specImg2.style.opacity = 0
    setTimeout(()=>specImg3.style.opacity=1,50)
})

/*Carousel control*/
items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
    // wrap carousel by using first child
    next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
    }
})

//Chatbox control
btnChatClose.addEventListener("click",()=>{
    chatbox.style.transform = "translateX(600px)"
    chatbox.style.opacity = 0
})
btnChatOpen.addEventListener("click",()=>{
    chatbox.style.transform = "translateX(-600px)"
    chatbox.style.opacity = 1
})
btnSendChat.addEventListener("click",()=>{
    chatInput.value = ""
})

//modal form validation
// Loop over them and prevent submission
forms.forEach(form=>{
    form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
    }, false)
})

 