function cal(){
    var index = calculator.answer.value.indexOf('^');
    console.log('index = '+ index);
    if(index > 0){
        var arrInput = calculator.answer.value.split('^');
        console.log(arrInput);
        calculator.answer.value = Math.pow(arrInput[0], arrInput[1]);
        return;
    }

    index = calculator.answer.value.indexOf('log');
    console.log('index2 = '+index)
    if(index >= 0){
        var loginput = calculator.answer.value.substring(index+3);
        console.log(loginput);
        calculator.answer.value = Math.log(loginput);
        return;
    }

    calculator.answer.value = eval(calculator.answer.value);

}