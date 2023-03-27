const person = [{name:"Aditya",age:21},{name:"Ravinder",age:18},{name:"jaspreet",age:24}];

const findPerson = (person,passedName) =>
{
  for(let i=0;i<person.length;i++){
    if(person[i].name===passedName)
    return person[i];
    else if(i===person.length-1){
        return null;
    }
  }  
 
}
console.log(findPerson(person,"jaspreet"));