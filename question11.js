// sherlock and Array

const balancedSums = (arr) => {
    // let sum = arr.reduce((acc, curr) => acc + curr, 0);
    let sum = 0;
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];
        if (leftSum === sum) {
            return 'YES';
        }
        leftSum += arr[i];
    }
    return 'NO';


    
}

console.log(balancedSums([1, 2, 3])); // NO