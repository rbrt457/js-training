function high(x){
    let toArr = x.toLowerCase().split(' ')
    let scoreArr = []
    let result = []
    let highest = ''
    for(let i = 0; i < toArr.length; i++){
        scoreArr.push([])
        for(let j = 0; j < toArr[i].length; j++){
            scoreArr[i].push(toArr[i].charCodeAt(j)-96)
        }
        result.push(scoreArr[i].reduce((x, y) => x + y))
    }
    highest = toArr[result.indexOf(Math.max.apply(null, result))]
    console.log(highest)
    return highest
}
high('I understand Javascript more and more every day')

