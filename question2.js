// chocolate feast problem


let n= 15;
let c= 3;
let m= 2;


function chocolateFeast(n, c, m) {
    let chocolates = Math.floor(n/c);
    let wrappers = chocolates;
    // for(let i =0; i<chocolates; i++){
    //     if(wrappers >= m){
    //         let newChocolates = Math.floor(wrappers/m);
    //         chocolates += newChocolates;
    //         wrappers = newChocolates + (wrappers % m);
    //     }
    // }

    while(wrappers >= m){
        let newChocolates = Math.floor(wrappers/m);
        chocolates += newChocolates;
        wrappers = newChocolates + (wrappers % m);
    }



    return chocolates;
}

console.log(chocolateFeast(n, c, m));


