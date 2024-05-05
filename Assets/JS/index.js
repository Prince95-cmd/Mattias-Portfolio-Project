window.addEventListener("DOMContentLoaded", () => {
  
  //  Nav Dropdown......
const bars = document.querySelector(".bars");
const sidebar = document.querySelector(".sidebar1");

bars.addEventListener("click", () => {
  bars.classList.toggle("active")
  sidebar.classList.toggle("active");
})

// Side nav bar .......
const reveal = document.querySelector(".reveal");
const slideBack = document.getElementById("close");

reveal.addEventListener("click", () => {
  document.getElementById("SecondSidebar").style.width = "340px";
});

slideBack.addEventListener("click", () => {
  document.getElementById("SecondSidebar").style.width = "0";
});

// Scroll animation......
function kickStart(element) {
  var start = document.querySelectorAll(`${element}`)

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

window.addEventListener("scroll", () =>{
kickStart(".translateY")
kickStart(".translateYN")
kickStart(".flip")
kickStart(".pop")
})

})

