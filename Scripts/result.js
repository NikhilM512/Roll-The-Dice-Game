
addPlayersName();

function addPlayersName(){

     let name = JSON.parse(localStorage.getItem("Name"));

     let Navbar_Name = document.getElementById("name");

     Navbar_Name.innerText = `${name}`;

     let player1Name = JSON.parse(localStorage.getItem("Player1Name"));
     let player2Name = JSON.parse(localStorage.getItem("Player2Name"));
     let player1Score = JSON.parse(localStorage.getItem("Player1Score"));
     let player2Score = JSON.parse(localStorage.getItem("Player2Score"));

     let Player1_div = document.querySelector("thead>tr>th:nth-child(2)");

     Player1_div.innerHTML=`${player1Name}'s Score`;

     let Player2_div = document.querySelector("thead>tr>th:nth-child(3)");

     Player2_div.innerHTML=`${player2Name}'s Score`;

     let Player1_score_div = document.querySelector("tbody>tr>td:nth-child(2)");

     Player1_score_div.innerHTML=player1Score;

     let Player2__score_div = document.querySelector("tbody>tr>td:nth-child(3)");

     Player2__score_div.innerHTML=player2Score;
     
}

    let VictoryPhrasesArr = [
        "You Won...!!!, Congratulations...!👋",
        "You are the champion..!!!👋",
        "Well performed..👋! You are Winner..!!!👋",
        "Congrats..! You've conquered the game..!!!👋",
        "Well Done..! Victory is Yours..!!!",
        "What a game Well done..!!!👋",
        "Congrats on your well-deserved win..!!!👋",
        "Congratulations👋! You won!",
        "Great job! Victory is yours!👋",
        "You are a champion!👋 Well done!"
    ];

    let DefeatPhrasesArr = [
        "Better luck next time...👍",
        "Don't worry👍, you'll get them next time!!!",
        "Keep practicing...!!!👍",
        "Don't give up!👍 You'll succeed next time!",
        "Keep trying! You're making progress!👍",
        "Failure is the stepping stone to success. Learn from it!👍",
        "Keep your spirits high! You're on the right track!👍",
        "Every setback is an opportunity for a comeback!👍",
        "Remember, it's not about winning every time, but about learning and improving!👍"
    ];

    let DrawPhrasesArr = [
        "It's a draw! Both players showed great skill.",
        "A tie game! The competition was fierce.",
        "It's a stalemate! Neither player could claim victory.",
        "A draw match! The result shows equal prowess.",
        "No winner this time! Both players achieved an equal outcome.",
        "It's a tie! The game ends in balance.",
        "A draw! The players' abilities matched perfectly.",
        "Neither player could outdo the other! It's a draw."
    ];


    showResults();

    function showResults(){

        let res=document.getElementById("result");

        let Player1Score=JSON.parse(localStorage.getItem("Player1Score"));
        let Player2Score=JSON.parse(localStorage.getItem("Player2Score"));
        console.log(Player1Score,Player2Score)
        if(Player1Score>Player2Score){
            let randomNo=Math.floor(Math.random()*(VictoryPhrasesArr.length-1));
            res.innerText=VictoryPhrasesArr[randomNo];
            res.style.color="green"
        }else if(Player1Score<Player2Score){
            let randomNo=Math.floor(Math.random()*(DefeatPhrasesArr.length-1));
            res.innerText=DefeatPhrasesArr[randomNo];
            res.style.color="red"
        }else{
            let randomNo=Math.floor(Math.random()*(DrawPhrasesArr.length-1));
            res.innerText=DrawPhrasesArr[randomNo];
            res.style.color="orange"
        }

    }