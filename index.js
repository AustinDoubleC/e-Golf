gsap.registerPlugin(ScrollTrigger)

const btnChatOpen = document.getElementById("chatOpen")
const chatbox = document.getElementById("chatbox")
const btnChatClose = document.getElementById("chatClose")
const btnSendChat = document.getElementById("btnSendChat")
const chatInput = document.getElementById("chatInput")

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

gsap.to("#cta-container",{
    scrollTrigger:{
        trigger:"#hero",
        start:"bottom top",
        scrub:1
    },
    opacity:1,
    duration:0.01,
})

/*Tab image control*/
const performanceTab = document.getElementById("performance-tab")
const measurementTab = document.getElementById("measurement-tab")
const miscTab = document.getElementById("misc-tab")
const specImg1 = document.getElementById("spec-img-1")
const specImg2 = document.getElementById("spec-img-2")
const specImg3 = document.getElementById("spec-img-3")

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
let items = document.querySelectorAll('.carousel .carousel-item')

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


    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
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
 