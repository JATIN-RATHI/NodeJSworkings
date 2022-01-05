const name = 'Jatin';
const userAge = 23;

const user = {
    name,
    age: userAge,
    location: 'Texas'
}

console.log(user);

//object destructure

const product = {
    label: 'RedVelvet',
    price: 500,
    stock: 191,
    salePrice: undefined
}

const {label, stock} = product;
console.log(label);
console.log(stock);

const transaction = (type, {label, stock}) => {
    // const{label} = myProduct;
    console.log(type, label, stock);
}

transaction('order', product);