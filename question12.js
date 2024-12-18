// repeated string hackerrank problem


const repeatedString = (s, n) => {
    let count = 0;
    let length = s.length;
    let aCount = 0;
    for (let i = 0; i < length; i++) {
        if (s[i] === 'a') {
            aCount++;
        }
    }
    count = Math.floor(n / length) * aCount;
    for (let i = 0; i < n % length; i++) {
        if (s[i] === 'a') {
            count++;
        }
    }
    return count;
}

console.log(repeatedString('aba', 10)); // 7