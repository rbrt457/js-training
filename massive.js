let array = [1,3,5,6,4,2,7,10,12,32,57]
let stringArray = ['R','o','b','E','r','T']
let sortArray = array.concat()
let evenArray = []
let oddArray = []
let copyEvenArray
let copyOddArray
let deleteNumb
let i
//Фильтрация на четные и нечетные
function sortANDdelete(deleteNumb){

for(i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        evenArray.push(array[i])
        copyEvenArray = evenArray.concat()}
    else{
        oddArray.push(array[i])
        copyOddArray = oddArray.concat()}}
//Поиск удаляемого четного числа и замены
for(i = 0; i < evenArray.length; i++){
    if(evenArray[i] == deleteNumb){
        copyEvenArray.splice(copyEvenArray.indexOf(evenArray[i]),1,'DELETED')}}
//Поиск удаляемого числа и замена
for(i = 0; i < oddArray.length; i++){
    if(oddArray[i] == deleteNumb){
        copyOddArray.splice(copyOddArray.indexOf(oddArray[i]),1,'DELETED')}}

    console.log("Исходный массив", array, array.length);
    console.log("Отсортированный массив", sortArray, sortArray.length);
    console.log('---------------------------------------------')
    console.log("Удаляемое число:", deleteNumb)
    console.log('---------------------------------------------')
    console.log("Четный массив", evenArray.sort(), evenArray.length);
    console.log("Копия четного массива", copyEvenArray, copyEvenArray.length)
    console.log('---------------------------------------------')
    console.log("Нечетный массив", oddArray, oddArray.length);
    console.log("Копия нечетного массива", copyOddArray, copyOddArray.length)
}


//toUpper()
sortANDdelete()