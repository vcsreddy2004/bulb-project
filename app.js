let bulbOn = document.getElementById("bulbOn");
bulbOn.addEventListener("click" , () => {
    document.getElementById("bulb").src="images/bulb on.jpg"
    document.getElementById("main_head").innerHTML ="Bulb is turned on"
});
let bulbOff = document.getElementById("bulbOff");
bulbOff.addEventListener("click" , () => {
    document.getElementById("bulb").src="images/bulb off.jpg"
    document.getElementById("main_head").innerHTML ="Bulb is turned off"
});