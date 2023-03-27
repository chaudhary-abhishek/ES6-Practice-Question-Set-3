const array = [1,2,3,4,56,7,8,9];

// const createRest = ([first,...rest])=>{
//     return printLastFive(rest);
// }
const printLastFive = ([first,...rest]) =>{
    if(rest.length==5)
    return rest;
    else{
        return printLastFive(rest);
    }
}
console.log(printLastFive(array));