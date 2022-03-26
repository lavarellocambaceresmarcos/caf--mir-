// Welcoming 

let welcome = alert("Welcome to Café Miró");



// NEW CALL TO ACTION OPTIMAZED
let actions = prompt("Choose one option" + "\n" + "\n" + "1- Product List" + "\n" + "\n" + "2- Register" + "\n" + "\n" + "3- Enter" + "\n" + "\n");


// For user registration --> blocking access
let i = 0;

function menu(a) {
    if (a == 1) {
        let products = prompt("Choose one option" + "\n" + "\n" + "1- Black coffee $500" + "\n" + "\n" + "2- Regular coffee $400" + "\n" + "\n" + "3- Toast coffee $500" + "\n" + "\n" + "4- Return to menu" + "\n" + "\n");
        function buy(b) {
            // If the user doesn't have an account 
            if (i<1){
                alert("You must be registered before buying")
                let actions = prompt("Choose one option" + "\n" + "\n" + "1- Product List" + "\n" + "\n" + "2- Register" + "\n" + "\n" + "3- Enter" + "\n" + "\n");
                menu(actions);
            }
            else if (b == 1) {
                const quantity1 = prompt("How many packs would you buy?");
                for (let x = 1; x<=quantity1;x=x+1){
                    console.log(x + "Black pack/s off");
                }
                alert("You've added " + quantity1 + " packs of Black Coffee");

                const count1 = quantity1 * 500;

                console.log(count1); 


                let products = prompt("Choose one option" + "\n" + "\n" + "1- Black coffee $500" + "\n" + "\n" + "2- Regular coffee $400" + "\n" + "\n" + "3- Toast coffee $500" + "\n" + "\n" + "4- Return to menu" + "\n" + "\n");
                buy(products);
            } else if (b == 2) {
                const quantity2 = prompt("How many packs would you buy?");
                for (let x = 1; x<=quantity2;x=x+1){
                    console.log(x + "Regular pack/s off");
                }
                alert("You've added " + quantity2 + " packs of Regular Coffee");

                const count2 = quantity2 * 500;

                console.log(count2); 


                let products = prompt("Choose one option" + "\n" + "\n" + "1- Black coffee $500" + "\n" + "\n" + "2- Regular coffee $400" + "\n" + "\n" + "3- Toast coffee $500" + "\n" + "\n" + "4- Return to menu" + "\n" + "\n");
                buy(products);
            } else if (b == 3) {
                const quantity3 = prompt("How many packs would you buy?");
                for (let x = 0; x<=quantity3;x=x+1){
                    console.log(x + "Toast pack/s off");
                }
                alert("You've added " + quantity3 + " packs of Toast Coffee");

                const count3 = quantity3 * 500;

                console.log(count3);

                let products = prompt("Choose one option" + "\n" + "\n" + "1- Black coffee $500" + "\n" + "\n" + "2- Regular coffee $400" + "\n" + "\n" + "3- Toast coffee $500" + "\n" + "\n" + "4- Return to menu" + "\n" + "\n");
                buy(products);

            }else if (b == 4) {
                let actions = prompt("Choose one option" + "\n" + "\n" + "1- Product List" + "\n" + "\n" + "2- Register" + "\n" + "\n" + "3- Enter" + "\n" + "\n");
                menu(actions);
            }
        }
        buy(products);
    // User registration
    } else if (a == 2) {
        let name = prompt("Enter you user name");
        let email = prompt("Enter your email");
        let passw = prompt("Create your password");
        console.log("User : " + name);
        console.log("Email : " + email);
        console.log("Passw : " + passw);
        i = i +1;
        let actions = prompt("Choose one option" + "\n" + "\n" + "1- Product List" + "\n" + "\n" + "2- Register" + "\n" + "\n" + "3- Enter" + "\n" + "\n");
        menu(actions);
    // Entering the site without doing any action
    } else if (a == 3) {
        alert("Welcome to Café Miró");
    // Not valid option for iregular values
    } else {
        alert("That's not a valid option");
        let actions = prompt("Choose one option" + "\n" + "\n" + "1- Product List" + "\n" + "\n" + "2- Register" + "\n" + "\n" + "3- Enter" + "\n" + "\n");
        menu(actions);
    }
}


// executing the function
menu(actions);





// TEST

// let ingNumero = prompt("ingrese un numero");

// function data (a) {
//     if (a == 1) {
//         alert("a es igual a 1");
//         data(prompt("Ingrese un numero"));
//     }else if (a == 2) {
//         alert("a es igual a 2");
//         data(prompt("Ingrese un numero"));
//     }else if (a == 3) {
//         alert("a es igual a 3");
//         data(prompt("Ingrese un numero"));
//     }else {
//         alert("Esa opción no es válida");
//         data(prompt("Ingrese un numero"));
//     }
// };

// data(ingNumero);

