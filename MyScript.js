document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".btn");
    const mottoField = document.querySelector(".qt");
    const mottoCounter = document.createElement("span");
    const maxChars = 100;

    mottoField.parentNode.appendChild(mottoCounter);
    mottoCounter.textContent = `0/${maxChars}`;
    mottoCounter.style.marginRight= "7px";
    mottoCounter.style.color ="#865a45";

    mottoField.addEventListener("input", function() {
        const currentLength = mottoField.value.length;
        mottoCounter.textContent =`${currentLength}/${maxChars}`;

        if (currentLength > maxChars) {
            mottoCounter.style.color ="red";
        } else {
            mottoCounter.style.color = "#865a45";
        }
    });

    submitButton.addEventListener("click", function() {
        const name = document.querySelector(".name").value;
        const age = document.querySelector(".age").value.trim();
        const bday = document.querySelector(".bday").value.trim();
        const color = document.querySelector(".color").value.trim();
        const motto = mottoField.value.trim();

        if (!name || !age || !bday || !color || !motto) {
            alert("Please fill out all fields before submitting ^^");
            return;
        }

        if (motto.length > maxChars) {
            alert(`Your motto is too long. Please limit it to ${maxChars} characters.`);
            return;
        }

        if (name.trim() === "") {
            alert("Please enter your name before submitting ^^");
            return;
        }

        document.body.style.backgroundColor = color;

        alert(`Hello ${name}! Thank you for introducing yourself! Nice to meet you!`);

    });
});