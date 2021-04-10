let word
let word2
let array = []
let strArray

//Вариант 1
 function palindrome(word){
     let lowWord = word.toLowerCase()
   for (let letters of lowWord){
         array.unshift(letters)
         strArray = array.join('')
     }
     if(lowWord == strArray){
          console.log('Вариант 1: Данное слово ' + word + ' ('+ strArray + ')' + ' - палиндром')
     }
     else {
         console.log('Вариант 1: Данное слово ' + word + ' ('+ strArray + ') ' + ' - не палиндром')
     }
 }


//Вариант 2
function palindrome2 (word2) {
    let lowWord2 = word2.toLowerCase()
    let reverseWord = lowWord2.split('').reverse().join('')
    if(reverseWord == lowWord2){
          console.log('Вариант 2: Данное слово ' + word2 + ' ('+ reverseWord + ')' + ' - палиндром')
     }
     else {
         console.log('Вариант 2: Данное слово ' + word2 + ' ('+ reverseWord + ') ' + ' - не палиндром')
     }

}
palindrome("Дед")
palindrome2("Дед")