let sliderNumber =1;

let maxslides =4;
let output = document.getElementsById("output");

function previousSlide(){
    if(sliderNumber>1){ 
      sliderNumber -= 1;
      output.src = "images/" + sliderNumber + ".jpg";
      output.classList.add("animate");
      setTimeout(() =>{
        output.classList.remove("animate");
      },2000);
      output.classList.remove("animate");
    }
}


function nextSlide() {
    if(sliderNumber<4){
    sliderNumber  += 1;
    output.src ="images/" + sliderNumber + ".jpg";
    output.classList.add("animate");
    setTimeout(() =>{
        output.classList.remove("animate");
      },2000);
    output.classList.remove("animate");
    }
}