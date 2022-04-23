change img js// .setAttribute('src','img/rm2.png');
font awesome //      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">


// let select = document.getElementById("mySelect");
// let submit = document.getElementById("btn");
// let names;
// submit.addEventListener("click", handleSubmit);

// function handleSubmit() {
//     // alert("hhh");
//     select.addEventListener("change", myFunction);
//     myFunction();
//     names.innerHTML = select.value;
// }
// function myFunction() {
//     names = document.getElementById("h1");
// }



'use strict';
let sectionEl = document.getElementById("cardSection");
let formEl = document.getElementById("formID");
let select = document.getElementById("option");

function Drink(name, options) {
    this.name = name;
    this.options = options;


}
Drink.prototype.render = function () {
    // createing h3 for the name of the drink
    let name = document.createElement('h1');; // <h3> </h3>
    name.textContent = this.name; // <h3> the name of the drink </h3>
    sectionEl.appendChild(name) // I can see the name inside the section

    let option=document.createElement('h1');
    option.textContent=this.options;
    sectionEl.appendChild(option)


}

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    // the default behaviour of submitting the form is to refresh the page
    event.preventDefault();
    let drinkName = event.target.drinkName.value;
    
    // select.addEventListener("change", myFunction);
    myFunction();
    let newDrink = new Drink(drinkName );

    newDrink.render();
}

function myFunction(event) {
    let options=event.target.value;
    let newDrink = new Drink(options);

    newDrink.render();
}