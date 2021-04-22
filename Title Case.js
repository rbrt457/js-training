function titleCase(title, minorWords) {
    console.log('Исходное предложение ' + title, "Слова исключения " +  minorWords)
    //Проверка 1
    if(title == ''){
        return title
    }
    else {
        title = title.toLowerCase().split(' ')
        //Преобразование первого слова
        let first = title[0].split('')
        first.splice(first[0],1,first[0].toUpperCase())
        first = first.join('')
        title.splice(0,1,first)

    }
    //Проверка 2
    if(minorWords !== undefined) {
        minorWords = minorWords.toLowerCase().split(' ')
        for (let i = 1; i < title.length; i++){
            if(minorWords.includes(title[i]) == false){
                let upper = title[i].split('')
                upper.splice(upper[0],1,upper[0].toUpperCase())
                upper = upper.join('')
                title.splice(title.indexOf(title[i]), 1, upper)
            }
        }
        title = title.join(' ')
        // return title
    }
    else {
        for (let i = 1; i < title.length; i++){
            let allUp = title[i].split('')
            allUp.splice(allUp[0],1,allUp[0].toUpperCase())
            allUp = allUp.join('')
            title.splice(title.indexOf(title[i]), 1, allUp)
        }
        title = title.join(' ')
        // return title
    }
    console.log(title)
}
titleCase('')
titleCase('a clash of KINGS', 'a an the of')
titleCase('THE WIND IN THE WILLOWS', 'The In')
titleCase('the quick brown fox')
