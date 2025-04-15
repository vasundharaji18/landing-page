
//nav

document.addEventListener('DOMContentLoaded', function () {
  // Hamburger toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list'); 
  toggleBtn.addEventListener('click', function () {
    navList.classList.toggle('active');
  });

  // Mobile dropdown toggle
  if (window.innerWidth <= 768) {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Stop navigation
        dropdown.classList.toggle('open'); 
      });
    });
  }

 
});


const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you, ' + name + '! Your message has been sent.');
    contactForm.reset();
  });
}



//home
function handleClick(imageNumber) {
  alert("You clicked on Image " + imageNumber);
  // You can also redirect or open a modal instead of alert
}



//internship 
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown-content');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function toggleDetails(detailId) {
  const details = document.getElementById(detailId);
  details.style.display = details.style.display === 'block' ? 'none' : 'block';
}






 

