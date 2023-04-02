let score = prompt("YourGrade : ")
if(score >= 80 ){
    document.getElementById("result").innerHTML = "You Got A"
}else if(score >= 70){
    document.getElementById('result').innerHTML = "You Got B"
}else if(score >= 60){
    document.getElementById('result').innerHTML = "You Got C"
}else if(score >= 50){
    document.getElementById('result').innerHTML = "You Got D"
}else{
    document.getElementById('result').innerHTML = "You Fail"
}