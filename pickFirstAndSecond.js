const fruitArray = ["Apple","orange","Banana","mehnat ka fal"];
//const getFirstAndSecond = ([first,second,...rest])=>({first:first,second:second});

const getFirstAndSecond = array => {
    const [first,second] = array;
    //return {first:first,second:second}
    return {first,second};
}
console.log(getFirstAndSecond(fruitArray));