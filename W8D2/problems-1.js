
// function mysteryScoping1() {
//     var x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping1()

// function mysteryScoping2() {
//     const x = 'out of block';
//     if (true) {
//         const x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping2()

// function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping3() //will throw an error while the last one print out fine

// function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping4()

// function mysteryScoping5() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     let x = 'out of block again';
//     console.log(x);
// }

// mysteryScoping5() //will throw an error as x has already been declared

// function madLib(verb, adj, noun) {
//     let sent = 'We shall ' + verb.toUpperCase() + ' the ' + adj.toUpperCase() + ' ' + noun.toUpperCase()
//     console.log(sent)
//     //forgot to call toUpperCase first
// }

// madLib('make', 'best', 'guac')

// function isSubstring(searchString, subString) {
//     console.log(searchString.includes(subString))
// }

// isSubstring("time to program", "time")
// isSubstring("Jump for joy", "joys")

// function fizzBuzz(arr) {
//     let result = []
    
//         function check(num) {
//             if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)) {
//             result.push(num)
//             }
//         }

//         arr.forEach(el => check(el))

//     console.log(result)
// }

// fizzBuzz([3, 5, 15])

function isPrime(num) {
    for (let i = 2; i < num; i++) { //need to use ; here
        if (num % i === 0) {return false}
    }
    return true
}

// console.log(isPrime(10))
// console.log(isPrime(15485863))

function sumOfNPrimes(n) {
    let result = [];
    for (let i = 2; result.length < n; i ++) {
        if (isPrime(i)) {
            result.push(i)
        }
    }
    const summer = (prevValue, currentValue) => prevValue + currentValue;
    console.log(result.reduce(summer, 0)) //got an Reduce of empty array with no intial value error, so need to pass in 0 as inital value
}

sumOfNPrimes(0)
sumOfNPrimes(4)