// cats and a mouse problem


let x = 1;
let y = 2;
let z = 3;

function catAndMouse(x, y, z) {
    let catA = Math.abs(x - z);
    let catB = Math.abs(y - z);

    if (catA < catB) {
        return "Cat A";
    } else if (catB < catA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

console.log(catAndMouse(x, y, z));