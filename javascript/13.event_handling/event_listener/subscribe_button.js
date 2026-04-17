let subscribeButton = document.getElementById("subscribe_button");
let subscribeContent = document.getElementById("subscribe_content");
let ringContainer = document.getElementById("ring_container");
let bellIcon = document.getElementById("bell_icon");
let toggle = true;
subscribeButton.addEventListener("click",()=>{
    // Scale down effect
    subscribeButton.classList.add("active");
    setTimeout(()=>{
        subscribeButton.classList.remove("active");
    }, 100);
    
    if(toggle){
        setTimeout(()=>{
            subscribeContent.textContent="Subscribed";
            ringContainer.style.display="inline";
            bellIcon.style.animation="animateBellIcon 50ms ease-in-out 10 alternate none";
        },1000);
        toggle=false;
    } else {
        setTimeout(()=>{
            subscribeContent.textContent="Subscribe";
            ringContainer.style.display="none";
            bellIcon.style.animation="none";
        },1000);
        toggle=true;
    }
});