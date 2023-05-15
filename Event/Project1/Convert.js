function toCalsius(fahrenheit)
{
    // let fahrenheit = Number(prompt("Fahrenheit: "))
    let value = ((fahrenheit - 32)*5/9)
    // document.getElementById("anwer_section").innerHTML = value.toFixed(2)+" Calsius";
    return value.toFixed(2)+" Calsius";
}
function display(elementId, value)
{
    document.getElementById(elementId).innerHTML = value
}
function toFahrenheit(calsius){
    // let calsius = Number(prompt("Calsius: "))
    let value = (calsius*9/5)+32
    // document.getElementById("toFahrenheit").innerHTML = value.toFixed(2)+" fahrenheit";
    return value.toFixed(2)+" fahrenheit"
}
function toCalsiusProgram(value)
{
    alert(toCalsius(value))
}
function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}