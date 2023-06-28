let s1=0;
let s2=0;
let count=0;

function rollTheDice(){
        
    let n1 = Math.random()*6;
    n1 = Math.floor(n1);

    let n2 = Math.random()*6;
    n2 = Math.floor(n2);

    if(n1==0){
        n1=1
    }
    if(n2==0){
        n2=1
    }
    
    s1+=n1;

    s2+=n2;

    count++;


    let score1 = document.getElementById("score1");

    let score2 = document.getElementById("score2");

    score1.innerHTML = n1;
    score2.innerHTML = n2;

    let dice1 = document.getElementById("dice1");
    dice1.src=`./assests/dice (${n1}).png`
    let dice2 = document.getElementById("dice2");
    dice2.src=`./assests/dice (${n2}).png`

    let player1=JSON.parse(localStorage.getItem("Name"));
    let player2="Anonymous";
    localStorage.setItem("Player1Name",JSON.stringify(player1));
    localStorage.setItem("Player2Name",JSON.stringify(player2));

    if(n1>n2){
        localStorage.setItem("Winner",JSON.stringify(player1));
        localStorage.setItem("Loser",JSON.stringify(player2));
        localStorage.setItem("Player1Score",JSON.stringify(s1));
        localStorage.setItem("Player2Score",JSON.stringify(s2));
    }else if(n1<n2){
        localStorage.setItem("Winner",JSON.stringify(player2));
        localStorage.setItem("Loser",JSON.stringify(player1));
        localStorage.setItem("Player1Score",JSON.stringify(s1));
        localStorage.setItem("Player2Score",JSON.stringify(s2));
        // console.log(n1,n2,"k")
    }else{
        localStorage.setItem("Winner",JSON.stringify("DRAW"));
        localStorage.setItem("Loser",JSON.stringify("DRAW"));
        localStorage.setItem("Player1Score",JSON.stringify(s1));
        localStorage.setItem("Player2Score",JSON.stringify(s2));
    }
    console.log("Hello",count)
    
    if(count==3){

        document.getElementById("rollTheDiceBtn").disabled=true;
        document.getElementById("rollTheDiceBtn").style.backgroundColor="rgb(209,3,3,0.5)"
        
         setTimeout(()=>{
            alert("Game Over")
            window.location.href="result.html";
        },1500)
       
    }
   
    
   
}


addPlayersNames();

function addPlayersNames(){

     let nickname = JSON.parse(localStorage.getItem("Nickname"));

     let heading = document.getElementById("nickname");

     heading.innerText = `Hello ${nickname}👋`;

     let name = JSON.parse(localStorage.getItem("Name"));

     let Navbar_Name = document.getElementById("name");

     Navbar_Name.innerText = `${name}`;

     let Player1_Name = document.getElementById("Name");

     Player1_Name.innerText = `${name}`;
}


// playMusic()
let music;

document.addEventListener("load", function() {
    const audio = document.getElementById("background-music");
    audio.volume = 0.5;
    audio.play().catch(function(error) {
    console.error("Failed to play audio:", error);
    });

});

function toggleMusic(){
if(!music){
const audio = document.getElementById("background-music");
audio.play();
music=!music;
let audio_icon = document.getElementById("audio");
audio_icon.src="./assests/audio-speaker-on.png"
}else{
const audio = document.getElementById("background-music");
audio.pause();
music=!music;
let audio_icon = document.getElementById("audio");
audio_icon.src="./assests/mute.png"
}
}

