// let slideIndex = 1
// showSlides(slideIndex)
// function btnPN(n){
//     showSlides(slideIndex += n)
// }
//
// function pageClick(n){
//     showSlides(slideIndex = n)
// }
//
// function showSlides(n){
//     let i
//     let slides = document.getElementsByClassName('slide-photo')
//     let dots = document.getElementsByClassName('dot')
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
//     slides[slideIndex-1].style.display="block"
//     dots[slideIndex-1].className+= " active"
//
// }


    let slide = document.getElementsByClassName('slide-photo')
    let page = document.getElementsByClassName('dot')
    let n = 0
    // let btnP = document.getElementById('p')
    // let btnN = document.getElementById('n')
    // let btnP = document.getElementsByClassName('pref')
    function compact() {
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none'
        }
        slide[0].style.display = 'block'
        page[0].classList.add('active')
    }
     // function clickBtn(np){
     //     slide[n].style.display = 'none'
     //     if(np == 'n') {
     //         n++
     //     }
     //     if(np == 'p'){
     //         n--
     //     }
     //     if(n >= slide.length){
     //         n = 0
     //     }
     //     auto(n)
     //     clearInterval(autoShow)
     //
     //     console.log(n)
     // }

function btnClick (j){
        n += j
    return n
        console.log(n)


}
     function autoShow (){
         slide[n].style.display = 'none'
             page[n].classList.remove("active")
             n++
                 if(n >= slide.length){
                     n = 0
                 }
             slide[n].style.display = 'block'
             page[n].classList.add("active")
         console.log(n)


     }

    setInterval(autoShow,2000)



