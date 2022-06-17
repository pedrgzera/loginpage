const passwordInput = document.getElementById('password');
const eyeSvg = document.getElementById('eyeSvg');

function eyeClick() {
    let inputTypePassword = passwordInput.type == 'password'

    if (inputTypePassword) {
        showPassword()
    } else {
        hidePassword()
    }
}

function showPassword() {
    passwordInput.setAttribute("type", "text")
    eyeSvg.setAttribute("src", "/assets/image/olhos-cruzados.png")
}

function hidePassword() {
    passwordInput.setAttribute("type", "password")
    eyeSvg.setAttribute("src", "/assets/image/olho.png")
}

