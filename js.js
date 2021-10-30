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
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Job: ${job}`)
        console.log(`Telephone: ${tel}`)
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

function testProm (){
    let firstProm = new Promise( function (resolve, reject) {
        setTimeout(() => {
            let fr = 'First'
            console.log('First prom TEST')
            resolve(fr)
        }, 3000)
    })

    firstProm.then((fr) => {
        return new Promise( function (resolve, reject) {
            setTimeout(() => {
                console.log('Second prom TEST ' + fr)
                fr = 'Second'
                resolve(fr)
            }, 2000)
        })

        .then((fr) => {
            let thirdProm = new Promise( (resolve, reject) => {
                setInterval(() => {
                    console.log('Third prom TEST ' + fr)
                }, 1000)
            })
        })

        .then(() => {
            let fourth = new Promise( (resolve, reject) => {
                setTimeout(() => {
                    console.log('Four prom TEST ')
                }, 5000)
            })
        })

    })
}
// Глава 6: Создание объекта с помощью Object.create, get, set
const person2 = Object.create({
    calculateAge(){
        console.log('Age:', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Robert',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1996,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get(){
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'black'
            console.log("Set age", value)
        }
    }
})

// person2.name = "Ne Robert"
// for (let key in person2){
//     if(person2.hasOwnProperty(key)){
//         console.log('Key', key)
//     }
// }
///Конец 6

///ES6 Классы
//
// const animal = {
//     name: "Animal",
//     age: 5,
//     hasTail: true
// }

// class Animal {
//     static type = 'ANIMAL'
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//
//     }
//     voice(){
//         console.log('I am Animal!')
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal {
//     static type = 'CAT'
//
//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }
//
//     voice() {
//         super.voice()
//         console.log('I am cat!')
//     }
//
//     get ageInfo(){
//         return this.age * 7
//     }
//     set ageInfo(newAge){
//         this.age = newAge
//     }
// }
//
// const cat = new Cat({
//     name: 'Cat',
//     age: 5,
//     hasTail: true,
//     color: 'Black'
// })

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide(){
        this.$el.style.display = 'none'
    }

    show(){
        this.$el.style.display = 'block'
    }

}

class Box extends Component{
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box ({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box ({
    selector: '#box2',
    size: 150,
    color: 'green'
})

class Circle extends Box{
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
        this.$el.style.marginLeft = '10%'
    }
}

const circle1 = new Circle({
    selector: '#circle',
    size: 50,
    color: 'blue'
})

//Async, Await
const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms ))
}

// delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'
// function fetchTodos (){
//     console.log('Fetch todo started...')
//      return delay(2000)
//          .then(() => fetch(url))
//          .then(response => response.json())
// }
//
// fetchTodos()
//     .then(data => {
//         console.log('Data:', data)
//     })
//     .catch(e => console.error(e))

async function fetchAsyncTodos() {
   console.log('Fetch todo started...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
    }
    catch (e){
       console.error(e)
    } finally {

    }

}
// fetchAsyncTodos()

//Proxy


const op = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop ${prop}`)
        if(!(prop in target)){
            return prop
                .split('_')
                .map(p => target[p])
                .join(' ')
        }
        return target[prop]
    },
    set(target, prop, value) {
      if(prop in target){
          target[prop] = value
      }  else {
          throw new Error(`No ${prop} field in target`)
      }
    },
    has(target,prop){
        return ['age', 'name'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete  target[prop]
        return true
    }
})

//Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log,{
    apply(target, thisArg, argArray) {
        console.log('Calling fn...')

        return target.apply(thisArg, argArray).toUpperCase()
    }
})

//Classes
class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person,{
    construct(target, argArray) {
        console.log('Construct...')

        return new Proxy(new target(...argArray),{
            get(t, p) {
                console.log(`Getting "${p}"`)
                return t[p]
            }
        })
    }
})

const p = new PersonProxy('Maxim', 25)