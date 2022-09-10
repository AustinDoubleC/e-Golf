gsap.registerPlugin(ScrollTrigger)

btnChatOpen = document.getElementById("chatOpen")
chatbox = document.getElementById("chatbox")
btnChatClose = document.getElementById("chatClose")
btnSendChat = document.getElementById("btnSendChat")
chatInput = document.getElementById("chatInput")

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
