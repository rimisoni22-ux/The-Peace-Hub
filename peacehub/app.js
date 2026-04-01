// Page navigation

function changePage(page){

document.querySelectorAll("section, #page-main")
.forEach(el=>el.classList.add("hidden"))

document.getElementById("page-"+page)
?.classList.remove("hidden")

}


// Breathing

let breathing=false
let interval

function runBreathingCycle(){

const status=document.getElementById("breathing-status")

if(breathing){

clearInterval(interval)
breathing=false
status.innerText="Ready"
return

}

breathing=true

let steps=[
["Inhale",4],
["Hold",7],
["Exhale",8]
]

let i=0
let sec=steps[0][1]

interval=setInterval(()=>{

status.innerText=steps[i][0]+" "+sec+"s"

sec--

if(sec<=0){

i=(i+1)%3
sec=steps[i][1]

}

},1000)

}


// Bubble Game

let bubbleCount=0

function initBubbles(){

const container=document.getElementById("bubble-container")
container.innerHTML=""

for(let i=0;i<12;i++){

let b=document.createElement("div")
b.className="bubble"
b.innerText="•"

b.onclick=function(){

bubbleCount++
document.getElementById("bubble-count").innerText=
"Bubbles Popped: "+bubbleCount

b.remove()

}

container.appendChild(b)

}

}

function resetBubbles(){

bubbleCount=0
document.getElementById("bubble-count").innerText="Bubbles Popped: 0"
initBubbles()

}


// Worry Jar

function saveWorry(){

let text=document.getElementById("worry-entry").value

if(!text) return

let div=document.createElement("p")
div.innerText="• "+text

document.getElementById("worry-list").appendChild(div)

document.getElementById("worry-entry").value=""

}


// Vault

const PIN="1234"

function attemptVaultAccess(){

let input=document.getElementById("vault-pin-input").value

if(input===PIN){

alert("Vault Unlocked")

}else{

alert("Wrong PIN")

}

}

function saveVaultNotes(){

let notes=document.getElementById("vault-notes").value

localStorage.setItem("vaultNotes",notes)

alert("Saved")

}


// Start bubbles on load

window.onload=initBubbles