

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



// Select the element you want to animate
const nodelist = document.querySelectorAll('section');

// Options for the observer (which entries are we looking for)
const options = {
  root: null, // use the viewport as the root
  rootMargin: '0px', // no margin
  threshold: 0.5 // trigger when 50% of the element is visible
};

// Create a new intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  // Loop over the entries
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add a class or trigger the animation when the section is visible
      entry.target.classList.add('your-animation-class');
      // Once we've shown the animation, we don't need to keep observing
      observer.unobserve(entry.target);
    }
  });
}, options);

// Start observing the section
observer.observe(nodelist);


})

