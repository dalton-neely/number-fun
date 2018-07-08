const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let testCaseNum = 0
let testCaseCounter = 0
let nums = []

const calc = () => {
    nums.forEach(set => {
        let poss = []
        poss.push(set[0] + set[1])
        poss.push(set[0] - set[1])
        poss.push(set[1] - set[0])
        poss.push(set[0] * set[1])
        poss.push(set[0] / set[1])
        poss.push(set[1] / set[0])
        if(poss.findIndex(e => e === set[2]) !== -1)
            console.log('Possible')
        else
            console.log('Impossible')
    })
}

rl.on('line', input => {
    if(!testCaseNum){
        testCaseNum = parseInt(input,10)
    }else{
        nums.push(input.split(' ').map(num => parseInt(num,10)))
        testCaseCounter++
        if(testCaseCounter === testCaseNum){
            calc()
            rl.close()
        }
    }
})