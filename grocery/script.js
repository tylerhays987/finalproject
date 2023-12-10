// Sample product data
const products = [
    { name: 'Apple', price: 1.00 },
    { name: 'Orange', price: 2.00 },
    // Add more products as needed
];

// Functions to interact with the DOM
function addProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    if (productName && !isNaN(productPrice)) {
        products.push({ name: productName, price: productPrice });
        updateProductDropdown();
        document.getElementById('productPrice').value = '';
        document.getElementById('productName').value = '';
    }
}


function startNewTransaction() {
    const cartAmount = document.getElementById('cartAmount');
    const taxes = document.getElementById('taxes');
    const amountDue = document.getElementById('amountDue');
    const shoppingCart = document.getElementById('shoppingCart');
    const totalPrice = document.getElementById('totalPrice');
    const quantity = document.getElementById('quantity');
    cartAmount.value = '';
    quantity.innerHTML = '';
    totalPrice.innerHTML = '';
    shoppingCart.innerHTML = '';
    amountDue.innerHTML = '';



}


function addUnit(unit) {
    var cartAmount = document.getElementById('cartAmount');
    cartAmount.value += unit;
    const quantity = document.getElementById('quantity');
    quantity.innerHTML += unit;
}

function addToCart() {
    const element = document.getElementById('selectProduct');
    const productName = element.options[element.selectedIndex].value;
    let productPrice = 0;
    for(item of products){
      if(item.name === productName){
        productPrice = item.price;
      }
    }


    const shoppingCart = document.getElementById('shoppingCart');
    const totalPrice = document.getElementById('totalPrice');
    const unit = document.getElementById('cartAmount').value;

    if (productName && !isNaN(productPrice)) {
        shoppingCart.innerHTML += productName + '<br>';
        totalPrice.innerHTML = totalPrice.innerHTML + (productPrice * unit);


    }
}



function pay() {
    const totalPrice = document.getElementById('totalPrice').innerHTML;
    const taxes = document.getElementById('taxes');
    const amountDue = document.getElementById('amountDue');


    // Calculate the total price using reduce and the products array
    const total = totalPrice;


    // Update the total price, taxes, and amount due
    taxes.innerHTML = total * 0.05;

    amountDue.innerHTML = Number(total) + Number(taxes.innerHTML);

    alert(`Thank you for your purchase! Your total is $${amountDue.innerHTML}`);
}







function updateProductDropdown() {
    const selectProduct = document.getElementById('selectProduct');
    selectProduct.innerHTML = "";

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.text = product.name;
        selectProduct.appendChild(option);
    });
}

// Initial setup
updateProductDropdown();
