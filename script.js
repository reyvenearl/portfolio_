  const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const cards = document.querySelectorAll('.card[data-title][data-desc]');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const desc = card.getAttribute('data-desc');
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modal.classList.add('active');
        modalCloseBtn.focus();
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    modalCloseBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      
      document.activeElement.blur();
    });

    modal.addEventListener('click', e => {
      if(e.target === modal) {
        modal.classList.remove('active');
        document.activeElement.blur();
      }
    });

    document.addEventListener('keydown', e => {
      if(e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.activeElement.blur();
      }
    });

   
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', e => {
      e.preventDefault();
      formMessage.textContent = '';
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if(name.length < 2) {
        formMessage.textContent = 'Please enter a valid name (at least 2 characters).';
        form.name.focus();
        return;
      }
      if(!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        form.email.focus();
        return;
      }
      if(message.length < 10) {
        formMessage.textContent = 'Please enter a message (at least 10 characters).';
        form.message.focus();
        return;
      }

      formMessage.textContent = 'Sending message...';
      form.querySelector('button[type="submit"]').disabled = true;

      
      setTimeout(() => {
        formMessage.textContent = 'Thank you! Your message has been sent.';
        form.reset();
        form.querySelector('button[type="submit"]').disabled = false;
      }, 1500);
    });

    function validateEmail(email) {
     
      const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      return re.test(email);
    }

    
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
    fadeElements.forEach(el => observer.observe(el));

    
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 300){
        scrollTopBtn.style.display = 'flex';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });