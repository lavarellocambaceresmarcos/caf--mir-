// Welcoming 

let welcome = alert("Welcome to Café Miró");



// NEW CALL TO ACTION OPTIMAZED "\n" + "\n"



// Coffe -----> class + const (object creation)

class Coffe {
    constructor(brand, weight, price, product) {
        this.brand = brand;
        this.weight = weight;
        this.price = price;
        this.product = product;
    }
}

const blackCoffe = new Coffe("Black Luxury", 500, 19, "BLack Coffe");
const toastCoffe = new Coffe("Dreaming", 750, 15, "Toast Coffee");
const regularCoffe = new Coffe("Nestle", 1000, 25, "Regular Coffee");


let cart = [];


let a = prompt("Choose an option" + "\n" + "\n" + "1- shop " + "\n" + "\n" + "2- Cart " + "\n" + "\n" + "3- Enter ");

function actions(a) {
    // 1- SHOP
    if (a == 1) {

        let shopping = prompt("Add any product to your cart " + "\n" + "\n" + "1- Black Coffee  $19" + "\n" + "\n" + "2- Toast Coffee  $15" + "\n" + "\n" + "3- Regular Coffee  $25" + "\n" + "\n" + "4- Information" + "\n" + "\n" + "5- Return to main menu");

        b(shopping);

        function b(s) {

            // BUY BLACK COFFEE
            if (shopping == 1) {
                cart.push(blackCoffe);
                alert("Black Coffe was added to your cart");
                console.log(cart);


                shopping = prompt("Add any product to your cart " + "\n" + "\n" + "1- Black Coffee  $19" + "\n" + "\n" + "2- Toast Coffee  $15" + "\n" + "\n" + "3- Regular Coffee  $25" + "\n" + "\n" + "4- Information" + "\n" + "\n" + "5- Return to main menu");

                b(shopping);

                // BUY TOAST COFFEE
            } else if (shopping == 2) {
                cart.push(toastCoffe);
                alert("Toast Coffe was added to your cart");
                console.log(cart);


                shopping = prompt("Add any product to your cart " + "\n" + "\n" + "1- Black Coffee  $19" + "\n" + "\n" + "2- Toast Coffee  $15" + "\n" + "\n" + "3- Regular Coffee  $25" + "\n" + "\n" + "4- Information" + "\n" + "\n" + "5- Return to main menu");

                b(shopping);
                // BUY REGULAR COFFEE
            } else if (shopping == 3) {
                cart.push(regularCoffe);
                alert("Regular Coffe was added to your cart");
                console.log(cart);


                shopping = prompt("Add any product to your cart " + "\n" + "\n" + "1- Black Coffee  $19" + "\n" + "\n" + "2- Toast Coffee  $15" + "\n" + "\n" + "3- Regular Coffee  $25" + "\n" + "\n" + "4- Information" + "\n" + "\n" + "5- Return to main menu");

                b(shopping);


                // INFO ABOUT THE PRODUCT
            } else if (shopping == 4) {
                let info = prompt("Choose one of the products above" + "\n" + "\n" + "1- Black Coffee" + "\n" + "\n" + "2- Toast Coffee" + "\n" + "\n" + "3- Regular Coffee" + "\n" + "\n" + "4- Return");

                data(info);

                function data(c) {
                    // BLACK COFFEE INFO
                    if (info == 1) {
                        alert("Brand : " + blackCoffe.brand + "\n" + "\n" + "Quantity : " + blackCoffe.weight + "g" + "\n" + "\n" + "Price : $" + blackCoffe.price);

                        info = prompt("Choose one of the products above" + "\n" + "\n" + "1- Black Coffee" + "\n" + "\n" + "2- Toast Coffee" + "\n" + "\n" + "3- Regular Coffee" + "\n" + "\n" + "4- Return");

                        data(info);
                        // TOAST COFFEE INFO
                    } else if (info == 2) {
                        alert("Brand : " + toastCoffe.brand + "\n" + "\n" + "Quantity : " + toastCoffe.weight + "g" + "\n" + "\n" + "Price : $" + toastCoffe.price);

                        info = prompt("Choose one of the products above" + "\n" + "\n" + "1- Black Coffee" + "\n" + "\n" + "2- Toast Coffee" + "\n" + "\n" + "3- Regular Coffee" + "\n" + "\n" + "4- Return");

                        data(info);
                        // REGULAR COFFEE INFO
                    } else if (info == 3) {
                        alert("Brand : " + regularCoffe.brand + "\n" + "\n" + "Quantity : " + regularCoffe.weight + "g" + "\n" + "\n" + "Price : $" + regularCoffe.price);

                        info = prompt("Choose one of the products above" + "\n" + "\n" + "1- Black Coffee" + "\n" + "\n" + "2- Toast Coffee" + "\n" + "\n" + "3- Regular Coffee" + "\n" + "\n" + "4- Return");

                        data(info);
                        // RETURN TO MENU
                    } else if (info == 4) {
                        shopping = prompt("Add any product to your cart " + "\n" + "\n" + "1- Black Coffee  $19" + "\n" + "\n" + "2- Toast Coffee  $15" + "\n" + "\n" + "3- Regular Coffee  $25" + "\n" + "\n" + "4- Information" + "\n" + "\n" + "5- Return to main menu");

                        b(shopping);
                    }
                }
            }
            // RETURN TO MAIN MENU
            else if (shopping == 5) {
                a = prompt("Choose an option" + "\n" + "\n" + "1- shop " + "\n" + "\n" + "2- Cart " + "\n" + "\n" + "3- Enter ");
                actions(a);
            }
            // NOT A VALID OPTION
            else {

                alert("That's not a valid option")

                shopping = prompt("Add any product to your cart " + "\n" + "\n" + "1- Black Coffee  $19" + "\n" + "\n" + "2- Toast Coffee  $15" + "\n" + "\n" + "3- Regular Coffee  $25" + "\n" + "\n" + "4- Information" + "\n" + "\n" + "5- Return to main menu");

                b(shopping);
            }

        }
        // CART
    } else if (a == 2) {
        let cartMenu = prompt("Select an option " + "\n" + "\n" + "1- View cart" + "\n" + "\n" + "2- Return" + "\n" + "\n");

        theCartMenu(cartMenu);

        function theCartMenu(j) {

            if (cartMenu == 1) {

                var i = 0;
                var cont = 0;
                var cartLengh = cart.length;

                var message = "\n" + "\n";

                while (i < cartLengh) {
                    cont = cart[i].price + cont;
                    message = i + " - " + cart[i].product + " - $" + cart[i].price + "\n" + "\n" + message;
                    i++;
                }
                console.log(cont);
                console.log(message);


                let buy = prompt(message + "TOTAL : $" + cont + "\n" + "\n" + " 1- Pay" + "\n" + "\n" + "2- Delete an item" + "\n" + "\n" + "3- Return");

                Payment(buy);

                function Payment(d) {
                    if (buy == 1) {
                        alert("Payment done! Thank you : )");

                        cart.splice(0,1000000);

                        let a = prompt("Choose an option" + "\n" + "\n" + "1- shop " + "\n" + "\n" + "2- Cart " + "\n" + "\n" + "3- Enter ");
                        actions(a);

                    } else if (buy == 2) {


                        var i = 0;
                        var cont = 0;
                        var cartLengh = cart.length;

                        var message = "\n" + "\n";

                        while (i < cartLengh) {
                            cont = cart[i].price + cont;
                            message = i + " - " + cart[i].product + " - $" + cart[i].price + "\n" + "\n" + message;
                            i++;
                        }


                        let deleted = prompt(message + "TOTAL : $" + cont + "\n" + "\n" + "\n" + "\n" + "Select an index number to be deleted" + "\n" + "\n" + "Press F to Return")
                        del(deleted);
                        function del(f) {
                            if (deleted == "F" || deleted == "f") {
                                buy = prompt(message + "TOTAL : $" + cont + "\n" + "\n" + " 1- Pay" + "\n" + "\n" + "2- Delete an item" + "\n" + "\n" + "3- Return");

                                Payment(buy);
                            } else if (deleted <= cart.length) {
                                alert("Item " + cart[deleted].product + " deleted");

                                cart.splice(deleted,1);
                                console.log(cart.length);
                                
                                let cartMenu = prompt("Select an option " + "\n" + "\n" + "1- View cart" + "\n" + "\n" + "2- Return" + "\n" + "\n");

                                theCartMenu(cartMenu);
                                
                            } else {
                                alert("That's nota  valid option");
                                buy = prompt(message + "TOTAL : $" + cont + "\n" + "\n" + " 1- Pay" + "\n" + "\n" + "2- Delete an item" + "\n" + "\n" + "3- Return");
                                Payment(buy);
                            }
                        }


                    } else if (buy == 3) {
                        cartMenu = prompt("Select an option " + "\n" + "\n" + "1- View cart" + "\n" + "\n" + "2- Return" + "\n" + "\n");

                        theCartMenu(cartMenu);
                    }else {

                        alert("That's not a valid option");
                        cartMenu = prompt("Select an option " + "\n" + "\n" + "1- View cart" + "\n" + "\n" + "2- Return" + "\n" + "\n");

                        theCartMenu(cartMenu);
                    }
                }

            } else if (cartMenu == 2) {
                let a = prompt("Choose an option" + "\n" + "\n" + "1- shop " + "\n" + "\n" + "2- Cart " + "\n" + "\n" + "3- Enter ");
                actions(a);
            }else {

                alert("That's not a valid option");

                cartMenu = prompt("Select an option " + "\n" + "\n" + "1- View cart" + "\n" + "\n" + "2- Return" + "\n" + "\n");

                theCartMenu(cartMenu);
            }

        }
    } else if (a == 3) {
        alert("Welcome! Ok, take a look")
    }else {
        alert("That's not a valid option");
        a = prompt("Choose an option" + "\n" + "\n" + "1- shop " + "\n" + "\n" + "2- Cart " + "\n" + "\n" + "3- Enter ");

        actions(a);
    }

}

actions(a);










