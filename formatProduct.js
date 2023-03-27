//input ---> a function which takes object as a parameter to it
//processing
//output --- > a string containing name , price and a message whether that product is there or not in stock

const product ={
    name: "chair",
    price: "30$",
    inStock: true
}

// const getProductDetail = ({name,price,inStock}) =>{
//     if(inStock) return `${name} price is ${price} and it is in the stock`;
//     else return `${name} price is  ${price} and it is not in stock`
// }

const getProductDetail = ({name,price,inStock})=>inStock?`${name} price is ${price} and it is in the stock` : `${name} price is  ${price} and it is not in stock`;

console.log(getProductDetail(product));