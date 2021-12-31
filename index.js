var arr = document.querySelectorAll('.drum');
var soundArr=["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];


for(var i=0; i < arr.length ; i++)
{
    arr[i].addEventListener('click',function(){
        var buttonInnerhtml = this.innerText;
        CheckSound(buttonInnerhtml);
        SoundAnimation(buttonInnerhtml);
    });
}

// for cheking the keyboard listners:
document.addEventListener("keydown", function(event){
    CheckSound(event.key);
    SoundAnimation(event.key);
})

function CheckSound( key)
{
    switch(key){
        case("w"):
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;
        case("a"):
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;
        case("s"):
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;
        case("d"):
         var tom1= new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
        case("j"):
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
        case("k"):
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
        case("l"):
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
         default:
             console.log(buttonInnerhtml);
}
}

function SoundAnimation(key)
{
    var btn = document.querySelector("."+key);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed")
    },100);
}
