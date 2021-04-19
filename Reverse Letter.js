function reverseLetter(str) {
    //coding and coding..
    //Вариант 1 (не очень)
    //str = str.split('').reverse().join('').replace(/\W/g, "").replace(/\d/g, "").replace(/_/g, "")

    //Вариант 2 (более менее)
    console.log(str.match(/[a-z]/ig).reverse().join(''))
}
reverseLetter("x]j@2cg_{br3p,@!zpkm\\\\_sffgitoy5be.zakuqzo,=")