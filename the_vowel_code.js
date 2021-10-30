const vowels = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5
}

function encode(string) {
    string = string.split('')
    for (let letter of string){
        if(vowels.hasOwnProperty(letter)){
            string.splice(string.indexOf(letter), 1 , vowels[letter])
        }
    }
    string = string.join('')
    return string
}

function decode(string) {
    string = string.split('')
    for (let letter of string){
        if(Object.values(vowels).includes(+letter)){
            const key = Object.keys(vowels).filter(k => vowels[k] === +letter)
            string.splice(string.indexOf(letter), 1 , key)
        }
    }
    string = string.join('')
    return string
}

encode('This is an encoding test.')
decode('Th3s 3s 1n 2nc4d3ng t2st.')