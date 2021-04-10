let array = ['friend', 'rac','RACE','blood','hero','car']
let sortElemArray = []
let map = new Map();
let id = []
// for (let i = 0; i < array.length; i++){
//     let iArray = array[i].split("").sort().join("")
//     sortElemArray.push(iArray)
// }
// let copyReverse = sortElemArray.concat()

for (let word of array) {
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    sortElemArray.push(sorted)

    id.push(sortElemArray.indexOf(sorted))


}

console.log(array.indexOf('rac', 0))
console.log(id)
console.log(id.split(""))
// console.log(copyReverse)
