passwordDiv = document.getElementById("password-container");
password = document.getElementById("password");
confirmPassword = document.getElementById("confirm-password");
submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
    console.log("clicked");
    console.log(password.value);
    console.log(confirmPassword.value)

    if (password.value != confirmPassword.value) {
        console.log("addiong")
        passwordDiv.classList.add("passwords-dont-match");
    }
    else {
        passwordDiv.classList.remove("passwords-dont-match");
    }
})