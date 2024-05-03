

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


})

