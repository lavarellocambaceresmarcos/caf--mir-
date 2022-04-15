
// Prices

var priceOne = parseInt(document.getElementsByClassName('price-one')[0].innerHTML);
var priceTwo = parseInt(document.getElementsByClassName('price-two')[0].innerHTML);
var priceThree = parseInt(document.getElementsByClassName('price-three')[0].innerHTML);





//  ---------------> ITEM QUANTITYS <--------------------------//


// Item quantityOne  ------> Adding stock to the 1st item

var getItemQuantityOne = document.getElementsByClassName('item-quantity-one')[0];

var quantityOne = parseInt(getItemQuantityOne.innerHTML);

console.log(quantityOne);

var plusButtonOne = document.getElementsByClassName('plus-one')[0];

var minusButtonOne = document.getElementsByClassName('minus-one')[0];
// declaring the action of the plusOne button
plusButtonOne.addEventListener('click', function () {
    console.log("Has sumado");

    quantityOne = quantityOne + 1;
    console.log(quantityOne);

    document.getElementsByClassName('item-quantity-one')[0].innerHTML = quantityOne;
    updateCartTotal()

})

// declaring the action of the minusOne button
minusButtonOne.addEventListener('click', function () {

    if (quantityOne > 1) {
        console.log("Has restado");

        quantityOne = quantityOne - 1;
        console.log(quantityOne);

        document.getElementsByClassName('item-quantity-one')[0].innerHTML = quantityOne;
        updateCartTotal()
    } else {
        quantityOne = 1;
        updateCartTotal()
    }


})


// Item quantityTwo  ------> Adding stock to the 2nd item

var getItemQuantityTwo = document.getElementsByClassName('item-quantity-two')[0];

var quantityTwo = parseInt(getItemQuantityTwo.innerHTML);

console.log(quantityTwo);

var plusButtonTwo = document.getElementsByClassName('plus-two')[0];
var minusButtonTwo = document.getElementsByClassName('minus-two')[0];
// declaring the action of the plus button
plusButtonTwo.addEventListener('click', function () {
    console.log("Has sumado");

    quantityTwo = quantityTwo + 1;
    console.log(quantityTwo);

    document.getElementsByClassName('item-quantity-two')[0].innerHTML = quantityTwo;
    updateCartTotal()

})

// declaring the action of the minusTwo button
minusButtonTwo.addEventListener('click', function () {

    if (quantityTwo > 1) {
        console.log("Has restado");

        quantityTwo = quantityTwo - 1;
        console.log(quantityTwo);

        document.getElementsByClassName('item-quantity-two')[0].innerHTML = quantityTwo;
        updateCartTotal()
    } else {
        quantityTwo = 1;
        updateCartTotal()
    }


})






// Item quantityThree  ------> Adding stock to the 3rd item

var getItemQuantityThree = document.getElementsByClassName('item-quantity-three')[0];

var quantityThree = parseInt(getItemQuantityThree.innerHTML);

console.log(quantityThree);

var plusButtonThree = document.getElementsByClassName('plus-three')[0];
var minusButtonThree = document.getElementsByClassName('minus-three')[0];
// declaring the action of the plus button
plusButtonThree.addEventListener('click', function () {
    console.log("Has sumado");

    quantityThree = quantityThree + 1;
    console.log(quantityThree);

    document.getElementsByClassName('item-quantity-three')[0].innerHTML = quantityThree;

    updateCartTotal()

})
// declaring the action of the minusThree button
minusButtonThree.addEventListener('click', function () {

    if (quantityThree > 1) {
        console.log("Has restado");

        quantityThree = quantityThree - 1;
        console.log(quantityTwo);

        document.getElementsByClassName('item-quantity-three')[0].innerHTML = quantityThree;

        updateCartTotal()
    } else {
        quantityThree = 1;
        updateCartTotal()
    }


})



// ------------> ADD TO CART BUTTONS <---------- //


// ITEM - 1
var addToCartOne = document.getElementsByClassName('buy-btn-one')[0];

addToCartOne.addEventListener('click', function () {

    alert("Item added to the cart!")

    document.getElementById('cont-cart-item-one').className = 'cont-prod-cart';

    console.log("Has sumado un elemento a tu carrito");

    quantityOne = quantityOne + 1;

    console.log(quantityOne);

    document.getElementsByClassName('item-quantity-one')[0].innerHTML = quantityOne;
    updateCartTotal()

})

// ITEM - 2
var addToCartTwo = document.getElementsByClassName('buy-btn-two')[0];

addToCartTwo.addEventListener('click', function () {

    alert("Item added to the cart!")

    document.getElementById('cont-cart-item-two').className = 'cont-prod-cart';

    console.log("Has sumado un elemento a tu carrito");

    quantityTwo = quantityTwo + 1;

    console.log(quantityTwo);

    document.getElementsByClassName('item-quantity-two')[0].innerHTML = quantityTwo;
    updateCartTotal()

})



// ITEM - 3
var addToCartThree = document.getElementsByClassName('buy-btn-three')[0];

addToCartThree.addEventListener('click', function () {

    alert("Item added to the cart!")

    document.getElementById('cont-cart-item-three').className = 'cont-prod-cart';

    console.log("Has sumado un elemento a tu carrito");

    quantityThree = quantityThree + 1;

    console.log(quantityThree);

    document.getElementsByClassName('item-quantity-three')[0].innerHTML = quantityThree;
    updateCartTotal()

})




// --------> DELETE BUTTON ACTIONS <------------ //

// Here we obtain the actual button element where we are standing  -----> delete button

// DELETE - 1
var deleteOne = document.getElementsByClassName('del-one')[0];
deleteOne.addEventListener('click', function (event) {
    deleteOne.parentElement.className = "delete";
    quantityOne = 0;
    document.getElementsByClassName('item-quantity-one').innerHTML = quantityOne;
    updateCartTotal();
})


// DELETE - 2
var deleteTwo = document.getElementsByClassName('del-two')[0];
deleteTwo.addEventListener('click', function (event) {
    deleteTwo.parentElement.className = "delete";
    quantityTwo = 0;
    updateCartTotal()
})

// DELETE - 3
var deleteThree = document.getElementsByClassName('del-three')[0];
deleteThree.addEventListener('click', function (event) {
    deleteThree.parentElement.className = "delete";
    quantityThree = 0;
    updateCartTotal()
})


// PAY

var payment = document.getElementById('pay');
payment.addEventListener('click', function (event) {
    if (document.getElementById('total').innerHTML > 0) {
        deleteThree.parentElement.className = "delete";
        deleteTwo.parentElement.className = "delete";
        deleteOne.parentElement.className = "delete";
        quantityThree = 0;
        quantityTwo = 0;
        quantityOne = 0;
        alert("Thanks for the payment!")
        updateCartTotal()
    } else {
        alert("No items added  :(")
    }

})


// ---------> TOTAL PRICE <------------//

// Updating price

// Cart total calculation
function updateCartTotal() {
    var total = 0;

    total = total + (quantityOne * priceOne) + (quantityTwo * priceTwo) + (quantityThree * priceThree);
    console.log(total);

    document.getElementById('total').innerHTML = total;
}




