//Haalt de input selector op
const inputs = document.querySelectorAll('input');

// Loopt de actie om bij submit alle input te valideren
for(let input of inputs) {
    input.addEventListener('invalid', (event) => {
    input.classList.add('error');    
  }, false);
  
    
  // Valideert direct na focus
  input.addEventListener('blur', (event) => {
    input.checkValidity();
  })

}