console.log("hi World");
let x = "Hasan";
let y = "Khan";
let a = 5;
if(a == 5){
    console.log("for two string", typeof x, "   ", y);
}
else{
    console.log("wrong condition");
}

let person = {
    firstName : "Masud",
    lastNmae : "Rana",
    age : 25
};
console.log(person.lastNmae);

let all = `my name is ${x} ${y} and ${person.firstName} ${person.lastNmae} is my cousin`;
console.log(all);