function checkLocalStorage(){
    var user=localStorage.getItem("username");
  if (user != null) {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       localStorage.setItem("username",user);
     }
  }
    
}