
function welcomeMessage() {
    alert("Welcome to KIET University! We are happy to have you here.");
}

function submitForm(event) {
    event.preventDefault();

    alert("Thank you for contacting KIET University! Your admission inquiry has been submitted successfully.");

    event.target.reset();
}
