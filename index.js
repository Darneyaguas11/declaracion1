const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function(){
    alert('Lo sabia, sabia que dirias que si!')

});


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*900);
    const randomY = parseInt(Math.random()*900);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

const talBtn = document.querySelector('#talBtn');

talBtn.addEventListener('mouseover', function () {
    const randomz = parseInt(Math.random()*900);
    const randomw = parseInt(Math.random()*900);
    talBtn.style.setProperty('top',randomw+'%');
    talBtn.style.setProperty('left',randomz+'%');
    talBtn.style.setProperty('transform',`translate(-${randomz}%,-${randomw}%)`);
})