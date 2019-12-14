/*const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    }
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const times = calculator.times(5, 5);
const div = calculator.div(5, 5);
const power = calculator.power(2, 10);

//alert(plus);
//alert(minus);
//alert(times);
alert(div);
alert(power);*/

const title_name = document.querySelector("#title");
const back_ground = document.querySelector("#back");
//console.log(title_name);
const CLICKED_CLASS = "clicked";

function handleClick(){
    // const hasClass = title_name.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     title_name.classList.add(CLICKED_CLASS);
    // }else{
    //     title_name.classList.remove(CLICKED_CLASS);
    // }
    title_name.classList.toggle(CLICKED_CLASS);
}

function init(){
    back_ground.addEventListener("click", handleClick);
}

init();