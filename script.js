document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLeft = document.querySelector('.nav-left');
  const navRight = document.querySelector('.nav-right');
  
  mobileMenuBtn.addEventListener('click', function() {
      navLeft.classList.toggle('active');
      navRight.classList.toggle('active');
      
      const icon = this.querySelector('i');
      if (navLeft.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
      } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
      }
  });

  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
          const answer = question.nextElementSibling;
          const icon = question.querySelector('i');
          
          question.classList.toggle('active');
          answer.classList.toggle('active');
          
          if (question.classList.contains('active')) {
              icon.style.transform = 'rotate(45deg)';
          } else {
              icon.style.transform = 'rotate(0)';
          }
      });
  });

  const contactForm = document.getElementById('messageForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const email = this.querySelector('input[type="email"]').value;
          const message = this.querySelector('textarea').value;
          
          if (!email || !message) {
              alert('Please fill in all fields!');
              return;
          }
          
          alert('Thank you for your message! We will get back to you soon.');
          this.reset();
      });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 100,
                  behavior: 'smooth'
              });
              
              if (navLeft.classList.contains('active')) {
                  navLeft.classList.remove('active');
                  navRight.classList.remove('active');
                  mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                  mobileMenuBtn.querySelector('i').classList.add('fa-bars');
              }
          }
      });
  });
});
document.querySelectorAll('.explore-button').forEach(button => {
  button.addEventListener('click', function() {
      const cardTitle = this.closest('.explore-card').querySelector('h4').textContent;
      console.log(`Exploring ${cardTitle}`);
  });
});