//str[i].charCodeAt(0)-83)
function rot13(message){
    message = message.split('')
    let r13 = []
        for(let i = 0; i < message.length; i++){
            if((message[i].match(/[a-z]/g) && message[i].charCodeAt(0) < 110 ) || (message[i].match(/[A-Z]/g) && message[i].charCodeAt(0) < 78)) {
                r13.push(String.fromCharCode(message[i].charCodeAt(0)+13))
            }
            else if((message[i].match(/[a-z]/g) && message[i].charCodeAt(0) >= 110) || (message[i].match(/[A-Z]/g) && message[i].charCodeAt(0) >= 78)){
                r13.push(String.fromCharCode(message[i].charCodeAt(0)-13))
            }
            else {
                r13.push(message[i])
            }
        }
    return r13.join('')
}
rot13('abcdefghijklmnopqrstuvwxyz')