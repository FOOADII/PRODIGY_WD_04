// Navbar 
const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Scroll to sections on link click
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");

    const scrollY = window.pageYOffset;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// Smooth scroll to anchor links
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault();
  
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top-50
  }, 500);
});

// Contact form submission
document.getElementById("btn").addEventListener("click", submitForm); 

function submitForm(e) {
  // get form values
  // validate
  // submit to server

  e.preventDefault();
}
