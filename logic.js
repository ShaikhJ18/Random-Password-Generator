const button = document.querySelector(".generate");

const password = document.querySelector(".password");


const characters = [];

for (let i = 32; i < 127; i ++){
    characters.push(String.fromCharCode(i));
}

function createPassword(length){
    let newPassword = [];
    let index = 0;
    for (let i = 0; i < length; i ++){
        index = Math.floor(Math.random()*characters.length);
        newPassword.push(characters[index]);
    }

    return newPassword.join("");
}

button.addEventListener("click",function(){
    let passwordToSet =  createPassword(15);
    password.value = passwordToSet;
});

