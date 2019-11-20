let phonenumbers = ["801-766-9754", "801-545-5454", "435-555-9801"]

let regn = /801-/g;
let newArray = phonenumbers.filter( item =>{
    return item.match(regn);
})

console.log(newArray)