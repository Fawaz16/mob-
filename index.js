 minidiv=document.querySelector(".mini-div")
let hamburger=document.querySelector(".hamburger")
let closebtn = document.querySelector(".close")






closebtn.addEventListener("click",()=>{
    minidiv.style.transform="translateY(-768px)";
    if (minidiv.style.transform="translateY(-768px)") {
        hamburger.syle.display = "block"
        closebtn.style.display ="none"
    }
})

hamburger.addEventListener("click",() =>{
    minidiv.style.transform ="translateY(0px)"
    if (minidiv.style.transform ="translateY(0px)") {
       closebtn.style.display = "block"
       .hamburger.style.display = "none"
       
    }
})