function persistence(num) {
    let count = 0
        while(num.length !== 1){
            num = num.toString().split('').reduce((a,b) => b * a)
            count++
        }
    return count-1

}
persistence(25)