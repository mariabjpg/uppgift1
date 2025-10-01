const divideButton = document.createElement("button");
divideButton.textContent = "Divide";
document.body.appendChild(divideButton);
divideButton.addEventListener("click", function() {
    
    let foo = Number(document.getElementById("nr1").value);
    let bar = Number(document.getElementById("nr2").value);
let result = foo / bar;
 console.log("Resultatet av foo / bar är:", result);
});

