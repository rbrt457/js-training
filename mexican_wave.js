function wave(str){
    str = str.toLowerCase().split('')
    let waveStr = []
    let reg = /[a-z]/g
    for (let i = 0; i < str.length; i++){
        if(str[i].match(reg)) {
            str[i] = str[i].toUpperCase()
            waveStr.push(str.join(''))
            str[i] = str[i].toLowerCase()
        }
    }
    console.log(waveStr)
}
wave('three words ever')