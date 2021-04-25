//Типы данных
let num = 2 // Число
let str = '' // Строка
let ob = {} // Объект
let bool = true //Boolean
let nul = null // null
let und = undefined // undefined
let big = 10n // bigint

const person = {
    name: 'Robert',
    age: 24,
    logInfo: function (job, tel){
        console.group(`${this.name} info:`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Telephone is ${tel}`)
        console.groupEnd()
    }
}

const anotherPers = {
    name: 'Andrey',
    age: 25
}

//Вызов функции logInfo другим объектом
// person.logInfo.bind(anotherPers, 'bind', '318138')()
// person.logInfo.call(anotherPers, 'call', '+7978')
// person.logInfo.apply(anotherPers, ['apply', '2021'])


//Прототипы
// Object глобальный объект. Новый метод для объектов
Object.prototype.personInfo = function (job, tel){
        console.group(`${this.name} info:`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Telephone is ${tel}`)
        console.groupEnd()
    }


let arr = [1,2,3,4,5]
let newArr = ['robert','anastasia']

Array.prototype.multy = function (n){
    return this.map(function (i){
        return i ** n
    })
}

Array.prototype.zaglav = function (){
    return this.map(function (i){
        i = i.split('')
        i[0] = i[0].toUpperCase()
        i = i.join('')
        return i
    })
}

//Замыкания
function mult(n){
    return function (m){
        return m * n
    }
}

const umnTwo = mult(2)

//Асинхронность
function testAsync() {
    console.log('1')
    console.log('2')

    window.setTimeout(function () {
        console.log('After 3 seconds')
    }, 3000)

    console.log('3')

    window.setTimeout(function () {
        console.log('After 0 seconds')
    }, 0)

    window.setInterval(() => {
        console.log('Every 2 seconds')
    }, 2000)
}
function timer(time){
    let seconds = 0
    while (seconds <= time){
        seconds++
        console.log(time - seconds + 1)
    }
}