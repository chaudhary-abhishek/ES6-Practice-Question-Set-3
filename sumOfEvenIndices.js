const numberArray = [1,2,3,4,5,6,7,8,9] // 1+3+5+7+9 = 25

const sumOfEvenIndices = array =>{
    let sum = 0;
    for(let i=0;i<array.length;i++){
        if(i%2===0)
        sum+=array[i]
    }
    return sum;
}

console.log(sumOfEvenIndices(numberArray));