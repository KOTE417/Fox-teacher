const character = document.querySelector(".character");
const block = document.querySelector(".block");
const score = document.querySelector(".score")

var audio = new Audio();
audio.src='';
audio.autoplay = true;


let i = 0;
let height_min = 20;
let height_max = 60;

document.addEventListener("keypress", function(event){
    jump();
});

function removeJump () {
    character.classList.remove("animate");
}
function jump() {
    character.classList.add("animate");
    setTimeout(removeJump, 600);
    if( character.classList == "animate") {return;}
}

//let rand = setInterval(function(event){
//    block.style = "height:50px"
//    block.style = "top:60px"
//    var height_max=110;
//    var height_min=60;
//}, 3000);
//let rand_two = setInterval(function(event){
//    block.style = "height:20px";
//    block.style = "top:80px"
//    let height_max=100;
//    let height_min=80;
//}, 1000)

let score_item = setInterval(function(event){
    score.innerHTML=i++;
}, 200);

let Alive = setInterval(function(event){
    let character_style = window.getComputedStyle(character, null);
    let character_position = parseInt(character_style.getPropertyValue('top'));
    let block_style = window.getComputedStyle(block, null);
    let block_position = parseInt(block_style.getPropertyValue('left')); // 0-20px

    if(block_position > -20 && block_position < 35 && character_position > height_min && character_position<=height_max){
        alert("game_over! Your score="+(i-1));
        i=0;
        block.style ="animation: block 1.5s infinite linear;"
        console.log(block_position);
    }
    if(i>10){
        block.style ="animation: block 1s infinite linear;" }

}, 10);

function high(){
    if(i>50){
block.style ="animation: block 1s infinite linear;" }
    }
    high();