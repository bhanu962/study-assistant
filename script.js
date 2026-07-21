const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+?><:{}[]";

const password = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", generatePassword);

function generatePassword(){

    let chars = "";

    if(document.getElementById("uppercase").checked)
        chars += uppercase;

    if(document.getElementById("lowercase").checked)
        chars += lowercase;

    if(document.getElementById("numbers").checked)
        chars += numbers;

    if(document.getElementById("symbols").checked)
        chars += symbols;

    const length = document.getElementById("length").value;

    if(chars === ""){
        alert("Select at least one option.");
        return;
    }

    let result = "";

    for(let i=0;i<length;i++){
        const random = Math.floor(Math.random()*chars.length);
        result += chars[random];
    }

    password.value = result;
}

copyBtn.addEventListener("click", () => {

    if(password.value===""){
        alert("Generate a password first.");
        return;
    }

    navigator.clipboard.writeText(password.value);

    alert("Password copied!");
});