let username;
document.getElementById("submitBtn").onclick=function(){
    username=document.getElementById("myInput").value ;
    if(username===""){
        alert("Please enter a username");
        return;
    }
    if(username.length>10){
        alert("username should be less then 10 characters");
        return;
    }
    

   
    document.getElementById("myInput").value=""
    document.getElementById("myUl").innerHTML+=`<li>${username}</li>`;
    console.log(username)
}