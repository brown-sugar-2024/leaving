// Detecting Button Press

var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

// Sound effects
function makeSound(key) {

    switch (key) {
        
        case "C":
            var tom1 = new Audio("sounds/tom-1.mp3").play();
            break;
        case "O":
            var tom2 = new Audio("sounds/tom-2.mp3").play();
            break;
        case "L":
            var snare = new Audio("sounds/snare.mp3").play();
            snare  
            break;
        case "E":
            var tom3 = new Audio("sounds/tom-3.mp3").play(); 
            break;
        case "N":
            var crash = new Audio("sounds/crash.mp3").play(); 
            break;

        default: console.log(key);

    }
}

// Button animation
function buttonAnimation(over){
    var activeButton = document.querySelector("." + over);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}



