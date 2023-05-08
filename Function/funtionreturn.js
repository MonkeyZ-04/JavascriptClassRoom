function sayHello(userName,userLastname)
{
    return "Hello "+userName+userLastname
}
function getAge(){
    return 19
}
let userInput = prompt("Input your name: ")
alert(sayHello(userInput," This is a userLastname"))