// find digits problem


let n = 1012;

const findDigits = (n) => {
    let count = 0;
    let num = n;
    while(num > 0){
        let digit = num % 10;
        if(n % digit == 0){
            count++;
        }
        num = Math.floor(num / 10);
    }
    return count;
}

console.log(findDigits(n));