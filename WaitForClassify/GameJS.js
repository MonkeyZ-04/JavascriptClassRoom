let round = prompt("เล่นกี่รอบ")
for(var i = 0 ; i < round ; i++){
    var  answer = prompt("Head or Tail")
    var  random_answer = ""
    if(Math.floor(Math.random()*10) <= 4 ){
        random_answer = "หัว"

    }else{
        random_answer = "ก้อย"

    }
    if(answer == random_answer){
        alert("You got it!!")

    }else{
        alert("Try again")
    }
    console.log(random_answer+" : "+answer)
}