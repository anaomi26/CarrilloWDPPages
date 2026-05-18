// JavaScript Dialog Box Functions

// Function to display an Alert box
function showAlert() {
    alert("This is a simple alert box!");
}

// Function to display a Confirm box 
function showConfirm() {
    var result = confirm("Do you want to continue?");
    var output = document.getElementById("displayMessage");
    
    if (result == true) {
        output.innerHTML = "You clicked OK!";
    } else {
        output.innerHTML = "You clicked Cancel!";
    }
}

// Function to display a Prompt box using var and comparison logic
function showPrompt() {
    var name = prompt("Please enter your name:");
    var output = document.getElementById("displayMessage");

    // Checking if user clicked 'Cancel' or left it empty
    if (name == null || name == "") {
        output.innerHTML = "You didn't enter a name.";
    } else {
        // Outputting the greeting to the webpage
        output.innerHTML = "Hello, " + name + "!";
    }
}

/**
 * Event Handlers
 */
document.getElementById("alertBtn").onclick = showAlert;
document.getElementById("confirmBtn").onclick = showConfirm;
document.getElementById("promptBtn").onclick = showPrompt;