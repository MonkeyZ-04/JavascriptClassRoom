function toCalsius()
{
    let fahrenheit = Number(prompt("Fahrenheit: "))
    let value = ((fahrenheit - 32)*5/9)
    document.getElementById("anwer_section").innerHTML = value.toFixed(2)+" Calsius";
}
function toFahrenheit(){
    let calsius = Number(prompt("Calsius: "))
    let value = (calsius*9/5)+32
    document.getElementById("anwer_section2").innerHTML = value.toFixed(2)+" fahrenheit";
}
toCalsius()
toFahrenheit()