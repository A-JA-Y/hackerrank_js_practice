// game of thrones hackerrank problem

const gameOfThrones = (s) => {

    let i = 0;
    let unpairedChar = 0;

    let arr = s.split('').sort();

    while (i < arr.length) {
        if (arr[i] === arr[i + 1]) {
            i += 2;
        } else {
            unpairedChar++;
            i++;
        }

    }
    return unpairedChar > 1 ? 'NO' : 'YES';





    // let count = 0;
    // let obj = {};
    // for (let i = 0; i < s.length; i++) {
    //     if (obj[s[i]]) {
    //         obj[s[i]]++;
    //     } else {
    //         obj[s[i]] = 1;
    //     }
    // }
    // for (let key in obj) {
    //     if (obj[key] % 2 !== 0) {
    //         count++;
    //     }
    // }
    // return count > 1 ? 'NO' : 'YES';

   
}


console.log(gameOfThrones('ccaabbbbccdee')) // YES






