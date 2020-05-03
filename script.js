let F0 = +prompt('Imput first number of Fibonachi numbers');
let F1 = +prompt('Imput second number of Fibonachi numbers');
let n = +prompt('Imput number "n" from Fibonachi numbers');



function fibonachiNumb(F0, F1, n) {

    let i;
    for (i = 1; i <= (n - 2); i++) {
        let m = F1;
        F1 = F0 + F1;
        F0 = m;
    }
    return F1;

}





alert(`Fibonachi number ${n} is ${fibonachiNumb(F0, F1, n)}`);
console.log(fibonachiNumb(F0, F1, n));