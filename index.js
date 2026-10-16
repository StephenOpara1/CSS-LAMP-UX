const bulb1 = document.getElementById("bulb1")
const bulb2 = document.getElementById("bulb2");
const bulb3 = document.getElementById("bulb3");

const shadow1 = document.getElementById("shadow1");
const shadow2 = document.getElementById("shadow2");

const wall = document.getElementById("wall");
const wall2 = document.getElementById("wall2");
const knob = document.getElementById("knob");
const rope = document.getElementById("rope");

let isOn = false; 
knob.addEventListener("click", () => {
    
    knob.classList.add("knobDrop");
    rope.classList.add("ropeDrop");

    setTimeout(() => {        
        bulb1.style.backgroundColor = !isOn ? "yellow":"rgb(131, 131, 102)";
        bulb2.style.backgroundColor = !isOn ? "yellow":"rgb(131, 131, 102)";
        bulb3.style.backgroundColor = !isOn ? "yellow":"rgb(131, 131, 102)";

        shadow1.style.boxShadow = !isOn ? "0 0 80px yellow" : "none";
        shadow2.style.boxShadow = !isOn ? "0 0 80px yellow" : "none";

        wall.style.backgroundColor = !isOn ? "rgb(14, 14, 14)" : "black"; 
        wall.style.width = isOn ? "40vw":"100vw";    
        wall.classList.remove("slideDoor2");  
        wall.classList.remove("slideDoor");                          
        !isOn ? wall.classList.add("slideDoor") : wall.classList.add("slideDoor2") 
        isOn = !isOn;        
    }, 250);  
    setTimeout(() => {        
        rope.classList.remove("ropeDrop");
        knob.classList.remove("knobDrop");
    }, 500);    
});


