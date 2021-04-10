let word1
let word2

function anagram(word1, word2){
    let sort1 = word1.toLowerCase().split('').sort().join('')
    let sort2 = word2.toLowerCase().split('').sort().join('')
    if(sort1 == sort2){
        console.log('Слова '+ word1 +" и " + word2 + " являются анаграммой!" )
    }
    else {
        console.log('Слова '+ word1 +" и " + word2 + " не являются анаграммой!" )
    }

}
anagram('Анна','Анна' )