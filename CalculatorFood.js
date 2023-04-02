let qrt = prompt("Number of items")
let sum = 0
for(var i =1; i <= qrt;i++){
    let item_price = prompt("Item number "+i)
    sum = sum + parseInt(item_price)
    document.getElementById("price-list").innerHTML += "Item number "+i+":"+item_price+"฿"+"<br>"
}
document.getElementById("result").innerHTML = sum+" ฿"