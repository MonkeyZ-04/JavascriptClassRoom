let lotto_number = prompt("Insert Your Number that You buy it.")
number = Math.floor(Math.random()*100);
document.getElementById("result").innerHTML = number
document.getElementById("yournumber").innerHTML = lotto_number
if(lotto_number == number){
    document.getElementById("winrotto").innerHTML = "You win Rotte Got Extra money for you."
}else{
    document.getElementById("winrotto").innerHTML = "Fade issue"
}