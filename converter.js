function convert(roman){
    let symVal = ['I','V','X','L','C','D','M']
    let value = [1,5,10,50,100,500,1000]
    roman = roman.toUpperCase().split('')
    let latNumb = []
    for (let i = 0; i < roman.length; i++){
        latNumb.push(value[symVal.indexOf(roman[i])])
    }
    let result = latNumb.reduce(function (x, y){
        if(x < y){
           return y - x
        }
        else{
            return x + y
        }
    })
    console.log(result)
    return result
}
convert('xi')