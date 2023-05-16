function toCelsius()
{
    let fahrenheit = Number(prompt("Fahrenheit: "))
    let value = ((fahrenheit - 32)*5/9)
    document.getElementById("anwer_section").innerHTML = value.toFixed(2)+" Celsius";
}
function toFahrenheit(){
    let calsius = Number(prompt("Celsius: "))
    let value = (calsius*9/5)+32
    document.getElementById("anwer_section2").innerHTML = value.toFixed(2)+" fahrenheit";
}
toCelsius()
toFahrenheit()