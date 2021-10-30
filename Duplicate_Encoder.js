let word = 'Succsess'
// word = word.split('')
// for(let i = 0; i < word.length; i++){
//     console.log(i)
// }
console.log(word.replace(/(.)\1{1,}/gu, (a,b)=>Array(a.length+1).join(')')))