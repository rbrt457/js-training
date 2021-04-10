// let slideIndex = 1
// let time = 1000
// let i
// let slides = document.getElementsByClassName('slide-photo')
// let dots = document.getElementsByClassName('dot')
//
// showSlides(slideIndex)
//
//
// function btnPN(n){
//     showSlides(slideIndex += n)
// }
//
// function pageClick(n){
//     showSlides(slideIndex = n)
// }
//
// function showSlides(n){
//
//     if (n > slides.length){
//         slideIndex = 1
//     }
//     if (n < 1){
//         slideIndex = slides.length
//     }
//     for( i = 0; i < slides.length; i++){
//         slides[i].style.display='none'
//     }
//     for(i = 0; i < dots.length; i++){
//         dots[i].className= dots[i].className.replace("active", "")
//     }
//
//     slides[slideIndex - 1].style.display = "block"
//     dots[slideIndex - 1].className += " active"
//     console.log("Индекс " + slideIndex, 'Длина ' + slides.length, slides, dots)
// }
//
// //Вариант через масивы
// // let i = 0
// // let j
// // let photo = ["slide_show/1.jpg","slide_show/2.jpg","slide_show/3.jpg"]
// // let dots = document.getElementsByClassName('dot')
// // let time = 2000
// // let page_dots = document.getElementsByClassName('slide-pages')
// // let newPage = document.createElement("span")
// // let elemP = document.getElementById('page')
// //
// //
// // function addPages(){
// //     for (j = 0; j < photo.length; j++){
// //
// //
// //
// //     }
// // }
// // function slideShow(){
// //     document.slide.src = photo[i]
// //     if (i < photo.length - 1){
// //         i++;
// //     }
// //     else{
// //         i = 0
// //     }
// //     setTimeout('slideShow()', time)
// //
// // }
// //
// // function start(){
// //     slideShow()
// //     addPages()
// // }