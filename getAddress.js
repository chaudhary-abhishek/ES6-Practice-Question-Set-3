const userData = {
    name : 'Jane Doy',
    postalCode: '1234',
    city: 'Germany'
}

const getAddress = ({name,postalCode,city})=>({postalCode,city});

console.log(getAddress(userData));