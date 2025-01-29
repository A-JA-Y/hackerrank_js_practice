// compare the triplets propblem
// from TapAcademy yt channel 

let alice = [1, 3, 4];
let bob = [0, 2, 1];

function compareTriplets(a, b) {

    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aliceScore++;
        } else if (a[i] < b[i]) {
            bobScore++;
        }
    }

    return [aliceScore, bobScore];
}

console.log(compareTriplets(alice, bob)); 

