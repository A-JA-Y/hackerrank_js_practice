// utopian tree problem


let n = 5;
let height = 1;

function utopianTree(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            height *= 2;
        } else {
            height += 1;
        }
    }
    return height;
}