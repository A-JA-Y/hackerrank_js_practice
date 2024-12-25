//diagonal diffrence

function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][n - i - 1];
    }
    return Math.abs(sum1 - sum2);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])); //15