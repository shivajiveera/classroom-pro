 /*const view = document.querySelector("#view2");//define a view
// // console.log(view);
 const div = view.querySelector("div");//define a div that we have inside the view
 const h2 = div.querySelector("h2");//inside of the div is an h2 that we are selecting

// // // syntax: addEventListener(clickevent, function, useCapture)
const doSomething = () => {
 alert("Doing something");
 };


h2.addEventListener("click", doSomething);//false is default
 h2.removeEventListener("click", doSomething); //removes event listener

 h2.addEventListener("click", (event) => {//anonymous function
console.log(event.target);
 event.target.textContent = "Clicked"
 });


// //can I do this for the div
 const clickForDiv = () => alert("This is an alert for when you click on the div section");
div.addEventListener("click", clickForDiv, false);

// //html
 const htmlClick = document.querySelector("#htmlClick");//defined the whole html, so event happends on the whole page
 const clickForHtml = () => alert("When you click anywhere on the page");
htmlClick.addEventListener("click", clickForHtml, false);*/
///////////////////////////////////////////////////////////////////////////
// //

document.addEventListener("readystatechange", event => {
  if (event.target.readyState === "complete") {
  console.log("readyState: complete");
  initApp();//call the initApp function
  }
  });
  
  const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");
  
  view.addEventListener("click", event => {
  event.stopPropagation();
  view.style.backgroundColor = "purple"
  },false
  );
  
  div.addEventListener("click", event => {
  // event.stopPropagation();
  div.style.backgroundColor = "blue";
  }, false);
  
  h2.addEventListener("click", event => {
  // event.stopPropagation();
  event.target.textContent = "Clicked"
  }, false);
  };
  // /////
  const nav= document.querySelector("nav");
nav.addEventListener("mouseover", event => {
event.target.classList.add("height100");

},false);
nav.addEventListener("mouseout", event =>{
event.target.classList.remove("height100");
},false);///
 
  
  
 /* //EVENT.TARGET
  
  document.addEventListener("readystatechange", event => {
 if (event.target.readyState === "complete") {
   console.log("readyState: complete");
   initApp();//call the initApp function
   }
  });
  
   const initApp = () => {
   const view = document.querySelector("#view2");
   const div = view.querySelector("div");
   const h2 = div.querySelector("h2");
  
   view.addEventListener("click", event => {
  event.target.style.backgroundColor = "purple"
  // // event.stopPropagation();
  }, false
   );
  
  div.addEventListener("click", event => {
   event.target.style.backgroundColor = "blue";
 }, false);
  
   h2.addEventListener("click", event => {
  // // event.stopPropagation();
  event.target.textContent = "Clicked"
  }, false);
  
  
  };
  ////////////////////////////////////////////////////////////////
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////
  
   document.addEventListener("readystatechange", event => {
   if (event.target.readyState === "complete") {
   console.log("readyState: complete");
   initApp();//call the initApp function
   }
  });
  
  const initApp = () => {
   const view = document.querySelector("#view2");
  const div = view.querySelector("div");
   const h2 = div.querySelector("h2");
  
   view.addEventListener("click", event => {
   view.style.backgroundColor = "purple"
   }, false );
  
  div.addEventListener("click", event => {
  // // event.stopPropagation();
   div.style.backgroundColor = "blue";
   }, false);
  
   h2.addEventListener("click", event => {
  // // event.stopPropagation();
   event.target.textContent = "Clicked"
   }, false);
   }; */
  // ///////////////////////////////////////////////////////////////////////////////
  
  
  
  /* //EVENT.TARGET
  
   document.addEventListener("readystatechange", event => {
   if (event.target.readyState === "complete") {
   console.log("readyState: complete");
   initApp();//call the initApp function
   }
   });
  
   const initApp = () => {
   const view = document.querySelector("#view2");
   const div = view.querySelector("div");
   const h2 = div.querySelector("h2");
  
   view.addEventListener("click", event => {
   event.target.style.backgroundColor = "purple"
  // // event.stopPropagation();
   }, false //remember that false is by default //this means that we are not going to use capture. We prefer event bubbling
  // //if set to true the buble effect will happen from outer to in
   );
  
   div.addEventListener("click", event => {
  event.target.style.backgroundColor = "blue";
   }, false);
  
  h2.addEventListener("click", event => {
  // // event.stopPropagation();
   event.target.textContent = "Clicked"
   }, false);
  
  
   };
  ////////////////////////////////////////////////////////////////
  
  
  
  ////////////////////////////////////////////////////////////////////////
  
   document.addEventListener("readystatechange", (event) => {
  if(event.target.readyState === "complete") {
   console.log("readyState: complete");
   initApp();
   }
   })
  
   const initApp = () => {
  // // const view3 = document.querySelector("#view3");
  // // const myForm = view3.querySelector("#myForm");
   myForm.addEventListener("submit", (event) => {
   event.preventDefault();
   console.log("submit event"); alert("hello")
   });
   }; */