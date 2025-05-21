# Tabura Portfolio

Page Link: https://reyvenearl.github.io/portfolio_/

Interactive Features


CSS Features


1. Navbar Hover Effect

Functionality: Adds a background highlight to hovered nav items.

Code Snippet: nav li:hover, nav li:focus-within {
  background-color: #ffcc0055;
}

2. Card Hover Animation

Functionality: Cards lift and glow slightly on hover.

Code Snippet: .card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px #ffcc0099;
}

3. BProfile Image Hover

Functionality: Image zooms and rotates slightly.

Code Snippet: #profile img:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 0 30px #ffcc00ee;
}

4. MButton Hover Effect

Functionality: Button color brightens and casts stronger shadow.

Code Snippet: #contact button:hover, #contact button:focus {
  background-color: #ddb800;
  box-shadow: 0 6px 25px #ffcc00dd;
}

5. Modal Close Button Hover

Functionality: The close “×” glows more on hover.

Code Snippet: .modal-close:hover, .modal-close:focus {
  color: #ffcc00ee;
}


JS Features


1. Modal Popup (Cards)

Functionality: Clicking on a .card displays a modal with details.

JS Variables Used:
modal, modalTitle, modalDesc, modalCloseBtn, cards

Code Snippet:card.addEventListener('click', () => {
  const title = card.getAttribute('data-title');
  const desc = card.getAttribute('data-desc');
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  modal.classList.add('active');
  modalCloseBtn.focus();
});


2.Modal Close Options

Functionality: Modal closes on X click, background click, or Escape key.

JS Variables Used:
modal, modalCloseBtn

Code Snippet: modalCloseBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', e => {
  if(e.target === modal) {
    modal.classList.remove('active');
  }
});

document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
  }
});

3.  Contact Form Validation

Functionality: Validates name, email, and message on submit.

JS Variables Used:
form, formMessage

Code Snippet: form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  
  if(name.length < 2 || !validateEmail(email) || message.length < 10) {
    formMessage.textContent = 'Validation message here...';
    return;
  }
  
  formMessage.textContent = 'Thank you! Your message has been sent.';
});


4. Scroll to Top Button

Functionality: Appears after scrolling; scrolls smoothly to top.

JS Variable Used:
scrollTopBtn

Code Snippet: window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

5. Fade-In on Scroll

Functionality: Sections fade in as they appear in viewport.

JS Variable Used:
fadeElements, observer

Code Snippet: const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

fadeElements.forEach(el => observer.observe(el));

