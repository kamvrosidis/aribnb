// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the link is just a toggle or part of a component like carousel controls
        if (this.getAttribute('data-bs-target') || this.getAttribute('data-bs-slide')) {
            return; // Let Bootstrap handle its own components
        }

        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate offset dynamically based on sticky header height if present
            const headerOffset = document.querySelector('.sticky-top') ? document.querySelector('.sticky-top').offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Optional: Close the navbar collapse on mobile after clicking a link
            const navbarCollapse = document.querySelector('.navbar-collapse.show');
            if (navbarCollapse) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false // Prevents toggling again
                });
                bsCollapse.hide();
            }
        }
    });
});


// Add active class highlighting to navbar based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLi = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  const headerOffset = document.querySelector('.sticky-top') ? document.querySelector('.sticky-top').offsetHeight : 0;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerOffset - 50; // Adjust offset as needed
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });

  // Handle edge case for top of page
  if(window.pageYOffset < sections[0].offsetTop - headerOffset - 50) {
      navLi.forEach(link => link.classList.remove('active'));
      const homeLink = document.querySelector('.navbar-nav .nav-item .nav-link[href="#"]');
       if (homeLink) {
            homeLink.classList.add('active');
       }
  }
});
