
// Wellcoming Alert  
alert("Please, respond the following question");


// Age prompt
let age = prompt("How old are you?");
console.log("El usuario tiene " + age + " años");

while (age < 18) {
    alert("You can't buy coffe");
    console.log("Un menor de edad intentó ingresar al sitio");
    age = prompt("How old are you?");
}


// Client prompt
let data = prompt("Is this the first time you visit us?");

let name = prompt("What's your name?");
console.log("El nombre del usuario es " + name);


if ((data == "yes") || (data == "Yes" )) {
    alert("Welcome to Café Miró, " + name);
    console.log("El usuario " + name + " ingresó por primera vez al sitio")
} else if ((data == "no")||(data == "No")) {
    alert("Hi " + name +"!" + " Welcome back. You know what to do budy :)");
    console.log("El usuario " + name + " es un usuario recurrente")
}else {
    console.log("El usuario " + name + " no ingresó datos relevantes")
}


// Packs prompt

let repeat = parseInt(prompt("How many packs de you want to buy?"));

let packs = alert("You've bought " + repeat + " packs");

// packs;

let i = 1;

while (i <= repeat){
    console.log("Se quitaron un total de " + i + " pack/s del stock total")
    i= i + 1;
}