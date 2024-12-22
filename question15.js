//breaking the records

function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let maxCount = 0;
    let minCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }
    return [maxCount, minCount];
}

//show full details table of scores , min ,max, count of min and max



console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); 

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // [2, 4]