function Greeting() {
  //welcome script
  //To do: Change Cancel to "no" 
var r = confirm("Welcome! Do you like the framework?");
if (r == true) {
    x = "Good!";
} else {
    x = "Sorry!";
} 
}

function LocalStorage() {
  //LocalStorage script
  //To do: More advanced LocalStorage script...
    localStorage.setItem("Storage", "Storage");
    document.getElementById("result").innerHTML = localStorage.getItem("Storage");
} 
}
