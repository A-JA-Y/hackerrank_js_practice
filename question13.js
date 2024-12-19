// subarray division

const birthday = (s, d, m) => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if (sum === d) {
            count++;
        }
    }
    return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // 2