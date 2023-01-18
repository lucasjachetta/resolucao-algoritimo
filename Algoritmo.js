


console.log(makeChange(32));


function makeChange(n) {

    return new Set([calcQuarters(n),calcDimes(n),calcNickels(n), calcPennies(n)]);
}

function calcQuarters(n) {
    let quarters = 0
    let x = n

    while(true) {
        if(x > 25) {
            quarters++
            x = x - 25
        } else {
            break
        }
    }

    // let dimes = 0
    // x = n - 25*quarters
    // if(x)
    // while(true) {
    //     if(x < 10) {
    //         break
    //     }
    //     dimes++
    // }

    // let nickels = 0
    // x =n - 25*quarters - 10*dimes

    // while(true) {
    //     if(x < 5) {
    //         break
    //     }
    //     nickels++
    // }

    const pennies = n - 25*quarters

    return [quarters, 0, 0, pennies]
}

function calcDimes(n) {
    let nickels = 0
    let x = n

    while(true) {
        x = x - 5
        if (x < 5) {
            break
        }
        nickels++
    }

    const pennies = n - 5* nickels
    return [0,0,nickels, pennies]
}

function calcNickels(n) {
    let dimes = 0
    let x = n

    while(true) {
        x = x - 10
        if (x < 10) {
            break
        }
        dimes++
    }

    let nickels = 0
    x = n
    while(true) {
        x = x - 5
        nickels++
        if (x < 5) {
            break
        }
    }

    const pennies = n - 10*dimes - 5*nickels
    return [0, dimes, nickels, pennies]
}

function calcPennies(n) {
    let quarters = 0
    let x = 0

    while(true) {
        x = x - 25
        if (x < 25) {
            break
        }
        quarters++
    }


    let dimes = 0
     x = n
    while(true) {
        x = x - 10
        dimes++
        if (x < 10) {
            break
        }
    }

    let nickels = 0
    x = n - 10*dimes
    while(true) {
        x = x - 5
        if (x < 5) {
            break
        }
        nickels++
    }

    const pennies = n -25*quarters - 10*dimes - 5*nickels

    console.log('quarters :>> ', quarters);
    console.log('dimes :>> ', dimes);
    console.log('nickels :>> ', nickels);
    console.log('pennies :>> ', pennies);
    return [quarters,dimes, nickels, pennies]
}