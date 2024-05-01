

window.addEventListener("DOMContentLoaded", () => {

const bars = document.querySelector(".bars");
const sidebar = document.querySelector(".sidebar1");

bars.addEventListener("click", () => {
  bars.classList.toggle("active")
  sidebar.classList.toggle("active");
})


})

// function openNav() {
//     document.getElementById("SecondSidebar").style.width = "340px";
//   }
  
//   function closeNav() {
//     document.getElementById("SecondSidebar").style.width = "0";
//   }

