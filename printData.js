const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
  }

const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
  }
const printData = ({name,postalCode,country})=>`${name} lives in ${country}`;

console.log(printData(userData1));
console.log(printData(userData2));
