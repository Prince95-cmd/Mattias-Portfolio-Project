

window.addEventListener("DOMContentLoaded", () => {
  
  //  Nav Dropdown
const bars = document.querySelector(".bars");
const sidebar = document.querySelector(".sidebar1");

bars.addEventListener("click", () => {
  bars.classList.toggle("active")
  sidebar.classList.toggle("active");
})

// Side nav bar 
const reveal = document.querySelector(".reveal");
const slideBack = document.getElementById("close");

reveal.addEventListener("click", () => {
  document.getElementById("SecondSidebar").style.width = "340px";
});

slideBack.addEventListener("click", () => {
  document.getElementById("SecondSidebar").style.width = "0";
});

// Section one

const buttons = document.querySelectorAll('.showDivButton');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetDiv = document.getElementById(targetId);

    if (targetDiv) {
      const divs = document.querySelectorAll('.self');
      divs.forEach(div => {
        if (div.id === targetId) {
          div.classList.remove('hidden');
        } else {
          div.classList.add('hidden');
        }
      });
    }
  });
});








// Scroll animation
function kickStart() {
  var start = document.querySelectorAll(".kickStart")

  for (let i = 0; i < start.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = start[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      start[i].classList.add("active");
    } else {
      start[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", kickStart);
kickStart()



// function revealElement(element){
//   let reveals = document.querySelectorAll(`${element}`)
//   for(let i = 0; i<reveals.length; i++){
//        let windowHeight = window.innerHeight;
//        let revealTop = reveals[i].getBoundingClientRect().top;
//        let revealPoint = 150;
       

//        if(revealTop < windowHeight - revealPoint  ){
//           reveals[i].classList.add('active');
     
//                   //  console.log(reveals[i])


//        }else{
//           reveals[i].classList.remove('active');
//        }
//   }
// }

// window.addEventListener("scroll", ()=>{
//   revealElement('.revealElement')
//   reveal('.translateYN')
//   reveal('.pop')
//   reveal('.flip')
// })
})

