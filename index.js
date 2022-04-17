let carts = document.getElementsByClassName('cart');

let buttonsPlus = document.getElementsByClassName('button');

let buttonsMinus = document.getElementsByClassName('button-minus');

let deleteButtons = document.getElementsByClassName('button-delete');

let payButton = document.getElementsByClassName('pay');

let quantity = document.getElementsByClassName('quantity');

let price = document.getElementsByClassName('price');

let total = document.getElementsByClassName('total');



// Actual products visible in page
const BlackCofee = {
    name: "Black Coffee",
    price: 600
}

const RegularCoffee = {
    name: "Regular Coffee",
    price: 400
}

const ToastCoffee = {
    name: "Toast Coffee",
    price: 800
}

// All products array
let allProducts = [BlackCofee,ToastCoffee,RegularCoffee];

// Stock array
let stock = [];
console.log(stock);


// Add to cart buttons actions
let addButtons = document.getElementsByClassName('add-btn');

console.log(addButtons);

addButtonsActions();

function addButtonsActions () {
    for (let i = 0; i < addButtons.length; i++) {
        console.log(addButtons[i]);
        addButtons[i].addEventListener('click', function () {

            // NEW ADD FUNCTION ----> FOR NOT REPEATING ITEMS
            if ( guardarNumeros.indexOf(i) == -1) {
                console.log('cliked');
                guardarNumeros.push(i);
                console.log(guardarNumeros);

                // ACTIONS

                console.log('click');
            let parentDiv = addButtons[i].parentElement;
            console.log(parentDiv);
            // Here we get the tittle of the element
            let shopItemTittle = parentDiv.getElementsByClassName('tittle')[0].innerText;
            console.log(shopItemTittle);
            // Here we get the price
            let shopItemPrice = parentDiv.getElementsByClassName('item-price')[0].innerText;
            console.log(shopItemPrice);
            // Here we get the image
            let shopItemImg = parentDiv.getElementsByClassName('shop-item-img')[0].src;
            console.log(shopItemImg);
            addingItemsToCart(shopItemTittle, shopItemPrice, shopItemImg);
            // Here we add the function (so we can use the plus and minus icons)
            clickAddRest();
            // Here we add the product to the stock array
            let indexOfProducts = allProducts[i];
            stock.push(indexOfProducts);
            // Refreshing the TOTAL price amount
            rechange()
            }else {
                alert('The selected item is already added to the cart !'); 
            } 
        })
    }
}

function addingItemsToCart (shopItemTittle, shopItemPrice, shopItemImg) {
    
    // Here we create a div
    let cartContainer = document.createElement('div');
    cartContainer.classList.add('cart');
    // Here we create the actual content of the cards added to the shop-cart
    let cartContaienrContent = `
    <img src="${shopItemImg}" alt="">
    <p class="product-name">${shopItemTittle}</p>
    <p class="quantity">1</p>
    <p>$ <span class="price">${shopItemPrice}</span></p>
    <button class="button">Plus</button>
    <button class="button-minus">Minus</button>
    <button class="button-delete">Delete</button>`
    cartContainer.innerHTML = cartContaienrContent;
    // Here we call the actual cart items whole contaienr
    let cartSectionContainer = document.getElementsByClassName('cart-section')[0];
    // Here we add the cartContaienr to the section called "cart-section"
    cartSectionContainer.append(cartContainer);

}

// Call to action 
clickAddRest();

function clickAddRest() {

    // Plus button
    for (let i = 0; i < buttonsPlus.length; i++) {
        let a = parseInt(quantity[i].innerHTML);
        let b = parseInt(price[i].innerHTML);
        console.log(b);
        buttonsPlus[i].addEventListener('click', function (element) {
            console.log('click');
            a = a + 1;
            quantity[i].innerHTML = a;
            console.log(a);

            // total price count
            b = a * stock[i].price;
            price[i].innerHTML = b;
            console.log(b);


            // Total
            rechange()
            function rechange () {
                let total = parseInt(document.getElementsByClassName('total')[0].innerHTML= parseInt(0));
                for (let j = 0; j < price.length; j++) {
                    console.log('valor '+ i + ' ' + total);
                    let pepe = 0;
                    total = total + parseInt(price[j].innerHTML);
                    pepe = pepe + total + parseInt(price[j].innerHTML);
                    document.getElementsByClassName('total')[0].innerHTML=total;
                    console.log('final total : ' + total);
                }
            }

        })

        // Minus button
        buttonsMinus[i].addEventListener('click', function (element) {
            if (a > 1) {
                console.log('click');
                a = a - 1;
                quantity[i].innerHTML = a;
                console.log(a);

                // total price count
                b = a * stock[i].price;
                price[i].innerHTML = b;
                console.log(b);

            } else {
                a = 1;
                quantity[i].innerHTML = a;
                console.log(a);
            }


            // Total
            rechange()
            function rechange () {
                let total = parseInt(document.getElementsByClassName('total')[0].innerHTML= parseInt(0));
                for (let j = 0; j < price.length; j++) {
                    console.log('valor '+ i + ' ' + total);
                    let pepe = 0;
                    total = total + parseInt(price[j].innerHTML);
                    pepe = pepe + total + parseInt(price[j].innerHTML);
                    document.getElementsByClassName('total')[0].innerHTML=total;
                    console.log('final total : ' + total);
                }
            }

        })


        // delete button
        deleteButtons[i].addEventListener('click', function () {
            console.log('clicked');
            guardarNumeros.splice(i);
            deleteButtons[i].parentElement.remove();
            alert('Item removed');
            rechange()
        })

        // PAY
        payButton[0].addEventListener('click', function() {
            paying();
            function paying () {
                console.log('clicked')
                deleteButtons[i].parentElement.remove();
                guardarNumeros.splice(i);
                rechange()  
            }

            if (total[0].innerHTML == 0){
                alert('Thanks for the payment');
            }            
        })

    }

}



// Total
rechange()
function rechange () {
    let total = parseInt(document.getElementsByClassName('total')[0].innerHTML= parseInt(0));
    for (let j = 0; j < price.length; j++) {
        let pepe = 0;
        total = total + parseInt(price[j].innerHTML);
        pepe = pepe + total + parseInt(price[j].innerHTML);
        document.getElementsByClassName('total')[0].innerHTML=total;
        console.log('final total : ' + total);
    }
}


// ----------> TEST <----------//

let botones = document.getElementsByClassName('btn');

let guardarNumeros = [];

