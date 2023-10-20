let loginForm = document.querySelector("#login-form")

function login(event){
    event.preventDefault();
    // console.log(2);

    let username = document.querySelector("#login-name").value;
    let password = document.querySelector("#login-password").value;

    // console.log(username, password);

    let data = localStorage.getItem(username);
    let json_data = JSON.parse(data);


    // console.log(json_data.name, json_data.password)

    if (data == null){
        document.querySelector("#desc").innerText = "Такого користувача не існує!"
    } else if (json_data.name == username && json_data.password == password){
        // console.log("залогінився");
        window.location.href = "game.html";
    } else{
        document.querySelector("#desc").innerText = "Неправильний пароль!"
    }
}

loginForm.addEventListener("submit", (event) =>{
    login(event);
})