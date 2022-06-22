let selectOperation = prompt('Enter operator: \n + for addition \n for subtraction \n * for multiplication \n / for division');

let firstNumber = prompt('Enter First Number');
let secondNumber = prompt('Enter Second  Number');


if(selectOperation == '+'){
   answer = parseInt(firstNumber) + parseInt(secondNumber)
}else if(selectOperation == '-'){
    answer = parseInt(firstNumber) - parseInt(secondNumber)
}else if(selectOperation == '*'){
    answer = parseInt(firstNumber) * parseInt(secondNumber)
}else if( selectOperation == '/'){
    answer = parseInt(firstNumber) / parseInt(secondNumber)
}else{
    answer = "something is wrong"
}


alert(`the answer is ${answer}`)