// the love letter mystery


const loveLetterMystery = (str) => {
   
    let count = 0;
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        count += Math.abs(str.charCodeAt(i) - str.charCodeAt(j));
        i++;
        j--;
    }
    return count;
}

