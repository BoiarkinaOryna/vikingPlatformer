regForm = document.querySelector("#reg-form");

regForm.addEventListener("submit", (event) => {
    register(event);
});

function register(event){
    // console.log(1)
    event.preventDefault();

    let username = document.querySelector("#name").value;
    let password = document.querySelector("#password").value;

    let data = JSON.stringify({name: username, password: password});
    let existing_data = localStorage.getItem(username)
    if (existing_data == null){
        localStorage.setItem(username, data);
        window.location.href = "login.html"
        // console.log("Додано")
    } else{
        document.querySelector("#desc").innerText = "Такий користувач вже існує!"
    }

}

