
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

let websiteSlider = document.querySelector(".sliderBox");
let websiteWrap = document.querySelector(".websiteSlider");
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
            },600)
     })
     
}

const rollingSlider = () => {

   setInterval(() => {

      let $hover = websiteWrap.classList.contains("hover")
      let last = document.querySelector(".sliderBox li:first-child");

      if($hover == true){

      }else{
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
          },600)
      
      }
    },3000);
   
}

websiteWrap.addEventListener("mouseover", () => { 
   websiteWrap.classList.add("hover");
});
websiteWrap.addEventListener("mouseout", () => { 
   websiteWrap.classList.remove("hover");
});




/* window Event */

window.addEventListener("load" , () => {
    
    letterEvent();
    websiteScroll();
    rollingSlider(); 

});




const main = document.querySelector(".mainContainer");
const projectPage = document.querySelectorAll(".projectContent");
const closingPage = document.querySelector(".closing");
const screenY = main.scrollHeight;
console.log(screenY);

window.addEventListener("scroll" , () => {

     const scrollY = window.scrollY;

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

