//Input --- >create a function which takes array of string as input'
//processing 
//Output ---> returns a string that include total no. of element, first and last element of that array

const fruitArray = ["mango","apple","grapes","Banana"];
const formatArray = array=>`This array contins ${array.length} items. First item is ${array[0]} and last item is ${array[array.length-1]}`;
console.log(formatArray(fruitArray));