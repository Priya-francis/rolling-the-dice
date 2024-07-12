function roll(){

    let random=Math.floor(Math.random()*6)+1
    let dice=document.getElementById("dice")
    let btn=document.getElementById("btn")
    let audio=document.getElementById("audio");
    dice.classList.add('spin');
    
    setTimeout(function(){
        dice.classList.remove('spin');
        dice.innerText=random
        audio.play()
        


    },1000)

} 