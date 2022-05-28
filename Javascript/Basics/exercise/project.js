var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var age = prompt("Enter your age: ");
var height = prompt("Enter your height: ");
var petName = prompt("Enter your pet name: ");

if (  (firstName[1]) == (lastName[1]) && age >= 20 && age <= 30 && height >=170 && petName[petName.length -1] =='y' ){
    console.log("Hey comaro!! you are a spy");
}
else{
    console.log("OK everyone");
}