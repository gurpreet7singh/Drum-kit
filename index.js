var a=document.querySelectorAll(".drum")
for(i=0; i<a.length; i++){
    a[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml)
        press(buttonInnerHtml)
    })
}

document.addEventListener("keydown",function(event){
    playSound(event.key)
    press(event.key)

});

function playSound(key){

    switch(key){
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            let snare=new Audio ("./sounds/snare.mp3");
            snare.play()
            break;
        
        case "d":
            let tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

            
        case "j":
            let tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            let tom3= new Audio("./sounds/tom-3.mp3")
            tom3.play();
            break;

        case "l":
            let tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        
        default: console.log('wrong input')
    }
    
}
function press(currentKey){
    var b=document.querySelector("."+currentKey)
    b.classList.add("pressed")
    setTimeout(function(){
        b.classList.remove("pressed")
    },100)
}
