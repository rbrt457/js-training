let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
let a
function daysWeek (a){
    if (a <= 7 && a >= 1)
    console.log(days[a-1])
    else{
        console.log("Введите число от 1 до 7")
    }
}
daysWeek(5)