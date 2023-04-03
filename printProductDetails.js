const product = {
    name : 'Apple MacBook Air 2020',
    specification : {
        capacity : '256 GB',
        size : '13.3 Inch'
    },
    price : '82900 Rs'
}

const printProductDetails = ({name,specification,price})=>`${name} which is of ${specification.size}, has capacity of ${specification.capacity} will cost you arount ${price}`;

console.log(printProductDetails(product));