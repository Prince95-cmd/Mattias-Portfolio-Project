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
kickStart(".visible")
})

// Section 8
const blogShowcaseContainer = document.querySelectorAll(".blogShowcase");
const blogPhotos = document.querySelectorAll(".blogPhoto");
const blogIconsContainer = document.querySelectorAll(".blogFa");
const blogIconEye = document.querySelectorAll(".fa-eye");
const headerTwo = document.querySelectorAll(".header2")

blogShowcaseContainer.forEach((blogContainer, i) => {
  blogContainer.addEventListener("mouseover", () => {
    blogPhotos[i].style.visibility = "visible"; //Show image
    blogIconsContainer[i].style.borderColor = "var(--color3)"; // change border color
    blogIconEye[i].style.color= "var(--color3)"; // change icon color
    headerTwo[i].style.color = "var(--color3)"; // change h2 color
  } )
})

blogShowcaseContainer.forEach((blogContainer, i) => {
  blogContainer.addEventListener("mouseout", () => {
    blogPhotos[i].style.visibility = "hidden"; // remove image
    blogIconsContainer[i].style.borderColor = "initial"; 
    blogIconEye[i].style.color= "var(--color";
    headerTwo[i].style.color = "var(--color";
  } )
})

})

