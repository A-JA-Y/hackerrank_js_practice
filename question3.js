// number line jumps problem


let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;

function kangaroo(x1, v1, x2, v2) {
   



    if(v1 > v2){
        if((x2 - x1) % (v1 - v2) == 0){
            return "YES";
        }
    }
    return "NO";
}

console.log(kangaroo(x1, v1, x2, v2));

