const form = document.querySelector(".js-name")
    , input = form.querySelector("input")
    , nameValue = document.querySelector("#name")

function init() {
    askName();
   
    loadUserName();
}

function askName(){
    form.addEventListener("submit", handleSubmit);
    //alert(text);
}

function handleSubmit(event) {
    //alert(nameTitle.innerText = "user");
    //event.preventDefault();
    const currentValue = input.value;
    //console.log(currentValue);
    //const input = form.querySelector("input");
    setUserName(currentValue);
}

function setUserName(currentValue){
    localStorage.setItem("currentUser", currentValue);
}

function loadUserName(){
    const name = localStorage.getItem("currentUser");
    //alert(name2);
    nameValue.innerText = name;
}

init();