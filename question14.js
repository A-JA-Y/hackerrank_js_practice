//  apples and oranges 

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let appleCount = 0;
    let orangeCount = 0;
    apples.forEach(apple => {
        let appleDistance = a + apple;
        if (appleDistance >= s && appleDistance <= t) {
            appleCount++;
        }
    });
    oranges.forEach(orange => {
        let orangeDistance = b + orange;
        if (orangeDistance >= s && orangeDistance <= t) {
            orangeCount++;
        }
    });
    console.log(appleCount);
    console.log(orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); // 1 1