
const sliderImg01 = document.querySelectorAll(".slider01 li");
const sliderImg02 = document.querySelectorAll(".slider02 li");
const nextBtn01 = document.getElementById("nextBtn01");
const nextBtn02 = document.getElementById("nextBtn02");
let sliderBox01 = document.querySelector(".slider01");
let sliderBox02 = document.querySelector(".slider02");


/* letter Event */

const letters = document.querySelectorAll(".introContent ul li span em");

const letterEvent = () => {

    for (let i = 0; i < letters.length; i++){

        setTimeout(() => {
           
            letters[i].classList.add("active");
  
         },`${i}00`);   
     }
}


/* slider */

const movingSlider = () => {

        nextBtn01.addEventListener("click" , () => {

            let last = document.querySelector(".imgscroller .slider01 li:first-child");

            for(let i = 0; i < sliderImg01.length; i++){
                sliderImg01[i].setAttribute('class' , `ezpzslides${i}`);

                if(sliderImg01[i].classList.contains(`ezpzslides${i}`)){
                   sliderImg01[i].classList.add("move");
                 }
             };

             setTimeout(()=>{
                for(let i = 0; i < sliderImg01.length; i++){
                    sliderImg01[i].classList.remove("move");
                    sliderBox01.append(last);
                }
            },800)

        });

        nextBtn02.addEventListener("click" , () => {

            let last = document.querySelector(".imgscroller .slider02 li:first-child");

            for(let i = 0; i < sliderImg02.length; i++){
                sliderImg02[i].setAttribute('class' , `slides${i}`);

                if(sliderImg02[i].classList.contains(`slides${i}`)){
                   sliderImg02[i].classList.add("move");
                 }
             };

             setTimeout(()=>{
                for(let i = 0; i < sliderImg02.length; i++){
                    sliderImg02[i].classList.remove("move");
                    sliderBox02.append(last);
                }
            },800)

        });

        };


const websiteSlider = document.querySelector(".sliderBox");
const websiteSlides = document.querySelectorAll(".sliderBox li");
let websiteBtn = document.getElementById("nextBtn03");


const websiteScroll = () => {

     websiteBtn.addEventListener("click" , () => {
        let last = document.querySelector(".sliderBox li:first-child");
        for(let i = 0; i < websiteSlides.length; i++){
            websiteSlides[i].setAttribute('class' , `website${i}`);

            if(websiteSlides[i].classList.contains(`website${i}`)){
                websiteSlides[i].classList.add("active");
            }
        }
            setTimeout(() => {
                for(let i = 0; i < websiteSlides.length; i++){
                websiteSlides[i].classList.remove("active");
                websiteSlider.append(last);
                }
            },800)
     })
     
}


/* window Event */

window.addEventListener("load" , () => {
    
    letterEvent();
    movingSlider();
    websiteScroll();

})


const main = document.querySelector(".mainContainer");
const projectPage = document.querySelectorAll(".projectContent");
const closingPage = document.querySelector(".closing");
const screenY = main.scrollHeight;
console.log(screenY);

window.addEventListener("scroll" , () => {

     const scrollY = window.scrollY;
     console.log(scrollY);

     if(scrollY > screenY){
        projectPage[0].classList.add("up");
     }else{
        projectPage[0].classList.remove("up");
     }
     if(scrollY > screenY * 3){
        projectPage[1].classList.add("up");
     }else{
        projectPage[1].classList.remove("up");

     }if(scrollY > screenY * 6.3){
        closingPage.classList.add("up");
     }else{
        closingPage.classList.remove("up");

     }

})

