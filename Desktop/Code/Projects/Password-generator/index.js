const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
let passwordOne = document.getElementById("password-1");
let passwordTwo = document.getElementById("password-2");

function generate() {
    clearPasswordField(); // Clear passwords at the beginning of the generate function
    for (let i = 0; i < 16; i++) {
        let randomPassOne = Math.floor(Math.random() * characters.length);
        let randomPassTwo = Math.floor(Math.random() * characters.length);
        passwordOne.textContent += characters[randomPassOne];
        passwordTwo.textContent += characters[randomPassTwo];
    }
}

function clearPasswordField() {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
}


// let password1El = document.getElementById("password1-el")
// let password2El = document.getElementById("password2-el")
// let generateEl = document.getElementById("generate-el")

// let copyButtons = document.querySelectorAll(".copy-button")


// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];



// generateEl.addEventListener("click", generatePasswords);
// copyButtons.forEach((button) => button.addEventListener("click", copyToClipboard))

// function generateRandomPassword() {
//   let password = ""

//   for(let i = 0; i < 15; i++) {
//     let randomIndex = Math.floor(Math.random() * characters.length)
//     let randomCharacter = characters[randomIndex]
//     password += randomCharacter
//   }
//   return password
// }

// function generatePasswords() {
//   // Clear previous passwords
//   password1El.textContent = ""
//   password2El.textContent = ""

//   let passwordOne = generateRandomPassword()
//   let passwordTwo = generateRandomPassword()

//   password1El.textContent = passwordOne
//   password2El.textContent = passwordTwo
// }

// function copyToClipboard(event) {
//   const targetId = event.target.dataset.clipboardTarget
//   const passwordElement = document.querySelector(targetId)

//   if (passwordElement) {
//     const textToCopy = passwordElement.textContent
//     const tempInput = document.createElement("textarea")
//     tempInput.value = textToCopy
//     document.body.appendChild(tempInput)
//     tempInput.select()
//     document.execCommand("copy")
//     document.body.removeChild(tempInput)

//     alert("Password is copied to clipboard!")
//   }
// }