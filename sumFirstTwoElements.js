const anArray = [93,932,88,429,492,491];
const sumFirstTwoElements = ([first,second,...rest]) =>first+second;
console.log(sumFirstTwoElements(anArray));