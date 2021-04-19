function isIsogram(str){
    //...
    let a = 0
    str = str.toLowerCase().split('').sort().join('')
    for (let i = 0 ;  i < str.length ; i++) {
        if(str[i] == str[i-1]){
            a++
        }}
    let isogram = (a === 0) ? true : false
    console.log(isogram)
    return isogram
}
isIsogram("isoOgram")