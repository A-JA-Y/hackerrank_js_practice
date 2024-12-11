// viral advertising hackerrank problem



function viralAdvertising(n,s) {
    let shared = s;
    let liked = 0;
    let cumulative = 0;
    for (let i = 0; i < n; i++) {
        liked = Math.floor(shared / 2);
        cumulative += liked;
        shared = liked * 3;
    }
    return cumulative;
}

console.log(viralAdvertising(6,5)); 