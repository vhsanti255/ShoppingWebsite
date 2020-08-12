//variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
// cart 
let cart = [];

//getting the products
class Products {
    async getProducts() {
        try {
            let result = await fetch("products.json")
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                const {title, price} = item.fields;
                const {id} = item.sys
                const img = item.fields.img.fields.file.url;
                return{title, price, id, img}
            })
            return products
        }   catch (error) {
            console.log(error);
        }
    }
}
//Display Products
class UI {
    displayProducts(products){
        let result = '';
        products.forEach(product => {
            result +=`
            
            `
        })
    }
}
//Local Storage 
class Storage {

}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();

//get all products
products.getProducts().then(products => ul.displayProducts(products));
});