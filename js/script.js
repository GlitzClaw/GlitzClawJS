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

function PromptLocalStorage() {
  // MAY NOT WORK: I need to test this later on, when I have time.
prompt = localStorage.getItem("prompt");
    if (prompt == null || Localstorage == "null"){
      localstorage = prompt("What would you like to save in LocalStorage?");
      localStorage.setItem("prompt", localstorage);
    } 
  }
}
