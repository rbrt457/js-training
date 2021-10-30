//Задача FizzBuzz
let array
function fizzBuzz (array){

    let evenArray = []
            for(let i = 0; i < array.length; i++){
                if(array[i] % 3 == 0 && array[i] % 5 == 0){
                    array.splice(array.indexOf(array[i]),1,'FizzBuzz')}
                else if(array[i] % 3 == 0){
                    array.splice(array.indexOf(array[i]),1,'Fizz')}
                else if(array[i] % 5 == 0){
                    array.splice(array.indexOf(array[i]),1,'Buzz')}

            }
    console.log(array.join(', '))
}
fizzBuzz([1,2,3,4,5,6,7,8,9,3])