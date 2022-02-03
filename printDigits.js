const printDigits = num => {
    var digit, result = 0

    while(num) {
        digit = num % 10 
        result = (result * 10) + digit 
        num = num / 10 | 0
       console.log(result % 10)
    }
    return result
}

(printDigits(1234))