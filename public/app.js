const products_to_load = 5;

let starting_product = 0;

async function loadMore(){
    const begin = (starting_product+1) * products_to_load;
    const end = begin + products_to_load;
    const response = await fetch(`/loadProducts?begin=${begin}&end=${end}`);
    const loadedProducts = await response.text();
    const productContainer = document.getElementById("product_container");
    console.log(productContainer);
    console.log(loadedProducts);
    productContainer.innerHTML += loadedProducts;
    starting_product++;
}