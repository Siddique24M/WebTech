let contentMessage = document.getElementById("content_message");
let count = contentMessage.textContent;
setTimeout(()=>{
    contentMessage.textContent= --count;
},1000)
setTimeout(()=>{
    contentMessage.textContent= --count;
},2000)
setTimeout(()=>{
    contentMessage.textContent= --count;
},3000)
setTimeout(()=>{
    contentMessage.textContent= --count;
},4000)
setTimeout(()=>{
    contentMessage.textContent= --count;
},5000)
setTimeout(()=>{
    contentMessage.textContent= --count;
},6000)
setTimeout(()=>{
    contentMessage.textContent= --count;
},7000)
setTimeout(()=>{
    contentMessage.textContent= --count;
},8000)
setTimeout(()=>{
    contentMessage.textContent= --count;
},9000)
setTimeout(()=>{
    contentMessage.textContent= "welcome to javascript";
    // contentMessage.style.fontSize = "6vh";
    Object.assign(contentMessage.style,{
        fontSize : "6vw",
        color: "white",
        backgroundColor: "royalblue",
        padding: "20px",
        borderRadius: "60px"
    })
},10000)