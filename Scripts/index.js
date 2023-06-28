
    function handleSubmit(e){

        e.preventDefault();

        let name = document.getElementById("name").value;

        let nickname = document.getElementById("nickname").value;

        if(!name || !nickname){
            alert("Please fill all the details");
            return;
        }

        console.log(name,nickname)

        localStorage.setItem("Name",JSON.stringify(name));

        localStorage.setItem("Nickname",JSON.stringify(nickname));
        
        window.location.href="game.html"
    }

    document.addEventListener("load",function(){
       
    })