score=0;
cross=true;
audiogo = new Audio('gameover.mp3')
audio = new Audio('music.mp3')
setTimeout(() => {
    audio.play()
},1000);
document.onkeydown= function(e){
console.log('Key code is:',e.key)
if(e.key=='f'){
    dino=document.querySelector('.dino')
    dino.classList.add('Animate')
    setTimeout(() => {
        dino.classList.remove('Animate')
    }, 700);
}
if(e.key=='ArrowRight'){
    dino=document.querySelector('.dino')
    dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    dino.style.left= dinox +112+'px'
}
if(e.key=='ArrowLeft'){
    dino=document.querySelector('.dino')
    dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    dino.style.left= (dinox-112)+'px'
}

setInterval(() => {
    dino= document.querySelector('.dino')
    gameOver= document.querySelector('.gameOver')
    obstacle= document.querySelector('.obstacle')

    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))
    ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
    oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'))

    offsetX = Math.abs(dx-ox)
    offsetY = Math.abs(dy-oy)

    if(offsetX<93 && offsetY<52){
        gameOver.innerHTML="Game is over- Reload to start the game"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause()
            audio.pause()
        }, 1000);

    }
    else if(offsetX<145 && cross){
        score+=1
        console.log(score)
        updateScore(score)
        cross=false;
        setTimeout(() => {
            cross=true
        }, 1000);
        setTimeout(() => {
            aniDur= parseFloat(window.getComputedStyle(dino,null).getPropertyValue('animation-duration'))
        newDur = aniDur-0.1;
        obstacle.style.animationDuration= newDur + 's'
            
        }, timeout);
    }
}, 10);





function updateScore(score){
    scoreCont.innerHTML= 'Your score:'+ score
}}

