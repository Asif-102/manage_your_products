const inputValue=(id)=>{
    const input = document.getElementById(id);
    return input.value;
}

const addProduct=()=>{
    const product_name = inputValue("product-name");
    const product_quantity = inputValue("product-quantity");

    // console.log(typeof product_name, Number.isInteger(Number(product_quantity)));
}