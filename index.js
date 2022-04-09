// Welcoming 

let welcome = alert("Welcome to Café Miró");



// NEW CALL TO ACTION OPTIMAZED 


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
const ChocoCoffe = new Coffe("Dreaming", 1000, 12, "Chocolate Coffee");
const VanillaCoffe = new Coffe("Nestle", 1000, 18, "Vanilla Coffee");
const AlmondCoffe = new Coffe("Black Luxury", 1000, 30, "Almond Coffee");


// Product stock  -----> For Filtering/sorting 
const stock = [blackCoffe, toastCoffe, regularCoffe, ChocoCoffe, VanillaCoffe, AlmondCoffe];
console.log(stock);


// Empty cart
let cart = [];


// Main menu
let a = prompt("Choose an option" + "\n" + "\n" + "1- shop " + "\n" + "\n" + "2- Cart " + "\n" + "\n" + "3- Enter ");


// Console navigation -----> Main functions

function actions(a) {
    // 1- SHOP
    if (a == 1) {

        let shopping = prompt("Add any product to your cart " + "\n" + "\n" + "0- Black Coffee  $19" + "\n" + "\n" + "1- Toast Coffee  $15" + "\n" + "\n" + "2- Regular Coffee  $25" + "\n" + "\n" + "3- Chocolate Coffee  $19" + "\n" + "\n" + "4- Vanilla Coffee  $19" + "\n" + "\n" + "5- Almond Coffee  $19" + "\n" + "\n" + "6- Information" + "\n" + "\n" + "7- Return to main menu");

        b(shopping);

        function b(s) {

            // BUY  COFFEE -----> adding coffe to the cart
            if ((shopping <= stock.length) && (shopping != 6) && (shopping != 7)) {
                cart.push(stock[shopping]);
                alert("The product " + stock[shopping].product + " was added to your cart");
                console.log(cart);


                shopping = prompt("Add any product to your cart " + "\n" + "\n" + "0- Black Coffee  $19" + "\n" + "\n" + "1- Toast Coffee  $15" + "\n" + "\n" + "2- Regular Coffee  $25" + "\n" + "\n" + "3- Chocolate Coffee  $19" + "\n" + "\n" + "4- Vanilla Coffee  $19" + "\n" + "\n" + "5- Almond Coffee  $19" + "\n" + "\n" + "6- Information" + "\n" + "\n" + "7- Return to main menu");

                b(shopping);

                // Filter -----> search option 
            } else if (shopping == 6) {
                let search = prompt("1- Filter by brand" + "\n" + "\n" + "2- Filter by price" + "\n" + "\n" + "3- Return");
                lookFor(search);

                function lookFor(a) {

                    // By brand
                    if (search == 1) {
                        let brandSearch = prompt("Search for a brand");

                        let filterStock = stock.filter((i) => i.brand == brandSearch);
                        console.log(filterStock);
                        let CountFilterStock = filterStock.length;

                        brandFilter(CountFilterStock);

                        function brandFilter(a) {
                            if (a > 0) {
                                alertShow(CountFilterStock)
                                function alertShow(a) {
                                    let plot = 0;
                                    let show = "\n" + "\n";
                                    while (plot < a) {
                                        show = filterStock[plot].product + "  $" + filterStock[plot].price + "\n" + "\n" + show;
                                        plot++
                                        console.log(plot);
                                        console.log(show);
                                    }

                                    alert(show);

                                    

                                    search = prompt("1- Filter by brand" + "\n" + "\n" + "2- Filter by price" + "\n" + "\n" + "3- Return");
                                    lookFor(search);
                                }

                            } else {
                                alert("That's not a valid option");
                                search = prompt("1- Filter by brand" + "\n" + "\n" + "2- Filter by price" + "\n" + "\n" + "3- Return");
                                lookFor(search);
                            }
                        }


                        
                        // By price 
                    } else if (search == 2) {
                        let priceSearch = prompt("Search by maximum price");
                        let filterStock = stock.filter((i) => i.price <= priceSearch);
                        console.log(filterStock);

                        let CountFilterStock = filterStock.length;

                        priceFilter(CountFilterStock);

                        function priceFilter(a) {
                            if (a > 0) {
                                alertShow(CountFilterStock)
                                function alertShow(a) {
                                    let plot = 0;
                                    let show = "\n" + "\n";
                                    while (plot < a) {
                                        show = filterStock[plot].product + "  $" + filterStock[plot].price + "\n" + "\n" + show;
                                        plot++
                                        console.log(plot);
                                        console.log(show);
                                    }

                                    alert(show);

                                    

                                    search = prompt("1- Filter by brand" + "\n" + "\n" + "2- Filter by price" + "\n" + "\n" + "3- Return");
                                    lookFor(search);
                                }

                            } else {
                                alert("That's not a valid option");
                                search = prompt("1- Filter by brand" + "\n" + "\n" + "2- Filter by price" + "\n" + "\n" + "3- Return");
                                lookFor(search);
                            }
                        }


                        // Return
                    } else if (search == 3) {
                        shopping = prompt("Add any product to your cart " + "\n" + "\n" + "0- Black Coffee  $19" + "\n" + "\n" + "1- Toast Coffee  $15" + "\n" + "\n" + "2- Regular Coffee  $25" + "\n" + "\n" + "3- Chocolate Coffee  $19" + "\n" + "\n" + "4- Vanilla Coffee  $19" + "\n" + "\n" + "5- Almond Coffee  $19" + "\n" + "\n" + "6- Information" + "\n" + "\n" + "7- Return to main menu");

                        b(shopping);
                        // Not valid
                    } else {
                        alert("That's not a valid option");

                        search = prompt("1- Filter by brand" + "\n" + "\n" + "2- Filter by price" + "\n" + "\n" + "3- Return");
                        lookFor(search);
                    }
                }
            }
            // RETURN TO MAIN MENU
            else if (shopping == 7) {
                a = prompt("Choose an option" + "\n" + "\n" + "1- shop " + "\n" + "\n" + "2- Cart " + "\n" + "\n" + "3- Enter ");
                actions(a);
            }
            // NOT A VALID OPTION
            else {

                alert("That's not a valid option")

                shopping = prompt("Add any product to your cart " + "\n" + "\n" + "0- Black Coffee  $19" + "\n" + "\n" + "1- Toast Coffee  $15" + "\n" + "\n" + "2- Regular Coffee  $25" + "\n" + "\n" + "3- Chocolate Coffee  $19" + "\n" + "\n" + "4- Vanilla Coffee  $19" + "\n" + "\n" + "5- Almond Coffee  $19" + "\n" + "\n" + "6- Information" + "\n" + "\n" + "7- Return to main menu");

                b(shopping);
            }

        }
    // 2-CART
    } else if (a == 2) {
        let cartMenu = prompt("Select an option " + "\n" + "\n" + "1- View cart" + "\n" + "\n" + "2- Return" + "\n" + "\n");

        theCartMenu(cartMenu);

        function theCartMenu(j) {
            // Showing cart
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

                // Cart options ----> Showing all bought items
                let buy = prompt(message + "TOTAL : $" + cont + "\n" + "\n" + " 1- Pay" + "\n" + "\n" + "2- Delete an item" + "\n" + "\n" + "3- Return");

                Payment(buy);

                function Payment(d) {
                    // Payment
                    if (buy == 1) {
                        alert("Payment done! Thank you : )");

                        cart.splice(0, 1000000);

                        let a = prompt("Choose an option" + "\n" + "\n" + "1- shop " + "\n" + "\n" + "2- Cart " + "\n" + "\n" + "3- Enter ");
                        actions(a);

                    // Deleting cart items
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

                        // Deleting options
                        let deleted = prompt(message + "TOTAL : $" + cont + "\n" + "\n" + "\n" + "\n" + "Select an index number to be deleted" + "\n" + "\n" + "Press F to Return")
                        del(deleted);
                        function del(f) {
                            if (deleted == "F" || deleted == "f") {
                                buy = prompt(message + "TOTAL : $" + cont + "\n" + "\n" + " 1- Pay" + "\n" + "\n" + "2- Delete an item" + "\n" + "\n" + "3- Return");

                                Payment(buy);
                            } else if (deleted <= cart.length) {
                                alert("Item " + cart[deleted].product + " deleted");

                                cart.splice(deleted, 1);
                                console.log(cart.length);

                                let cartMenu = prompt("Select an option " + "\n" + "\n" + "1- View cart" + "\n" + "\n" + "2- Return" + "\n" + "\n");

                                theCartMenu(cartMenu);

                            } else {
                                alert("That's nota  valid option");
                                buy = prompt(message + "TOTAL : $" + cont + "\n" + "\n" + " 1- Pay" + "\n" + "\n" + "2- Delete an item" + "\n" + "\n" + "3- Return");
                                Payment(buy);
                            }
                        }

                    // Return to main cart emnu
                    } else if (buy == 3) {
                        cartMenu = prompt("Select an option " + "\n" + "\n" + "1- View cart" + "\n" + "\n" + "2- Return" + "\n" + "\n");

                        theCartMenu(cartMenu);
                    // Not a valid option
                    } else {

                        alert("That's not a valid option");
                        cartMenu = prompt("Select an option " + "\n" + "\n" + "1- View cart" + "\n" + "\n" + "2- Return" + "\n" + "\n");

                        theCartMenu(cartMenu);
                    }
                }
            // Return to main menu
            } else if (cartMenu == 2) {
                let a = prompt("Choose an option" + "\n" + "\n" + "1- shop " + "\n" + "\n" + "2- Cart " + "\n" + "\n" + "3- Enter ");
                actions(a);
            // Not a valid option
            } else {

                alert("That's not a valid option");

                cartMenu = prompt("Select an option " + "\n" + "\n" + "1- View cart" + "\n" + "\n" + "2- Return" + "\n" + "\n");

                theCartMenu(cartMenu);
            }

        }
    // 3-Enter site
    } else if (a == 3) {
        alert("Welcome! Ok, take a look")
    // Not a valid option ---> main menu
    } else {
        alert("That's not a valid option");
        a = prompt("Choose an option" + "\n" + "\n" + "1- shop " + "\n" + "\n" + "2- Cart " + "\n" + "\n" + "3- Enter ");

        actions(a);
    }

}

// Whole actions executed ----> main function
actions(a);










