/* 
Name: Julie Lowry-Sheridan
Date: 4/25/2026
Project: Final Portfolio Website
Filename: script.js
 */
var welcomeForm = document.getElementById("welcomeForm");

if (welcomeForm) {
    welcomeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("visitorName").value;
        var visitorType = document.querySelector('input[name="visitorType"]:checked');
        var message = document.getElementById("welcomeMessage");

        if (name === "") {
            name = " Visitor";
        }
        message.textContent =
        "Welcome " + name + "! Thank you for visiting my online resume."
    });
}
window.onload = () => {
    document.getElementById("onLoad").volume = 0.05;
    document.getElementById("onLoad").play();
}
