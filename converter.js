let symVal = [[1, 'I'],[5,'V'],[10,'X'],[50,'L'],[100,'C'],[500, 'D'],[1000, 'M']]
const sv = new Map(symVal)
let convertNumb
let ost
let arr = []


// function solution(number){
//     convertNumb = number
//     //Конвертация до 3
//     if(convertNumb <= 3){
//         for (let i = 0; i < convertNumb; i++){
//             arr.push(sv.get(1))}}
//     //Конвертация от 4 до 8
//     if(convertNumb == 4){
//         arr.push(sv.get(1))
//         arr.push(sv.get(5))
//     }
//     if(convertNumb == 5){
//         arr.push(sv.get(5))
//
//     }
//     if(convertNumb > 5 && convertNumb < 9){
//         ost = convertNumb - 5;
//         arr.push(sv.get(5))
//
//     }
//     let convert = arr.join('')
//     console.log(convert)
// }
function solution(num) {
    if (!num) return "";
    let rezult = "";
    let n = font_ar.length - 1;
    while (num > 0) {
        if (num >= font_ar[n]) {
            rezult += font_rom[n];
            num -= font_ar[n];
        }
        else n--;
    }
    return rezult;
}
solution(6)