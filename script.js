const themeToggle=document.getElementById("themeToggle");
themeToggle.addEventListener("click",()=>{document.body.classList.toggle("dark-mode");themeToggle.textContent=document.body.classList.contains("dark-mode")?"☀️":"🌙";});

const estimateBtn=document.getElementById("estimateBtn");
const estimate=document.getElementById("estimate");
estimateBtn.addEventListener("click",()=>{
  const repair=document.getElementById("repair").value;
  const ranges={screen:"Estimated range: $79 - $249",battery:"Estimated range: $49 - $129",charging:"Estimated range: $69 - $169",camera:"Estimated range: $79 - $199",diagnostic:"Diagnostic estimate: Contact for quote"};
  estimate.textContent=ranges[repair]||"Select a device and repair type first.";
});

const chatOpen=document.getElementById("chatOpen");
const chatClose=document.getElementById("chatClose");
const chatWindow=document.getElementById("chatWindow");
const chatInput=document.getElementById("chatInput");
const chatBody=document.getElementById("chatBody");
chatOpen.addEventListener("click",()=>chatWindow.style.display="block");
chatClose.addEventListener("click",()=>chatWindow.style.display="none");
chatInput.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"&&chatInput.value.trim()){
    const q=chatInput.value.trim();
    chatBody.innerHTML+=`<p><strong>You:</strong> ${q}</p>`;
    chatBody.innerHTML+=`<p><strong>Bot:</strong> Thanks. For the fastest quote, text your device model and issue to (417) 298-0598.</p>`;
    chatInput.value="";
    chatBody.scrollTop=chatBody.scrollHeight;
  }
});
