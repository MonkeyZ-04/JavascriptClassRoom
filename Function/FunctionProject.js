function toCelsius(fahrenheit)
{
    // let fahrenheit = Number(prompt("Fahrenheit: "))
    let value = ((fahrenheit - 32)*5/9)
    // document.getElementById("anwer_section").innerHTML = value.toFixed(2)+" Celsius";
    return value.toFixed(2)+" Celsius";
}
function display(elementId, value)
{
    document.getElementById(elementId).innerHTML = value
}
function toFahrenheit(celsius){
    // let calsius = Number(prompt("Calsius: "))
    let value = (celsius*9/5)+32
    // document.getElementById("toFahrenheit").innerHTML = value.toFixed(2)+" fahrenheit";
    return value.toFixed(2)+" fahrenheit"
}
alert(toCelsius(120))
display("toCalsius",toCelsius(120))
alert(toFahrenheit(25))
display("toFahrenheit", toFahrenheit(25))