// ice cream parlour



const iceCreamParlour = (m, arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[m - arr[i]] !== undefined) {
            return [obj[m - arr[i]] + 1, i + 1];
        } else {
            obj[arr[i]] = i;
        }
    }


}

console.log(iceCreamParlour(4, [1, 4, 5, 3, 2])) // [1, 4]