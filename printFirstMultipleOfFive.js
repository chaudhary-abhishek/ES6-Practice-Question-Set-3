const anArray = [1,230,27,865,53,640,5];
const printFirstMultipleOfFive = array=>{
    for(let i=0;i<array.length;i++){
        if(array[i]%5===0)
        return array[i];
    }
}
console.log(printFirstMultipleOfFive(anArray));