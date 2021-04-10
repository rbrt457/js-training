let g
let m = "мужской"
let f = "женский"

function gender(g){
    let newG = g.toLowerCase()
    if(newG == m){
        console.log("Ваш пол " + m + "!")
    }
    else if(newG == f) {
        console.log("Ваш пол " + f + "!")
    }
    else{
        console.log("Ваш пол не определен!")
    }
}
gender("ЖенскИй")