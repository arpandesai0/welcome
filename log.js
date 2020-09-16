var user_pass = [
                {
                    user:"arpandesai0",
                    pass:"addesai0"

                },
                {

                    user:"rushberry02",
                    pass:"badmintonrocks"
                }
]

function getinfo(){
                    var user = document.getElementById("username").value;
                    var pass = document.getElementById("password").value;
                    localStorage.setItem("logname",user);
                    for(i=0;i < user_pass.length; i++){
                       if (user == user_pass[i].user && pass == user_pass[i].pass){
                        window.location.href="welcome.html";
                        return
                       }

                    document.getElementById("error").innerHTML = "Incorrect username or password"





                    }


}