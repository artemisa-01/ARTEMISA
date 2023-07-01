document.addEventListener('DOMContentLoaded', () => {
    const openModal = document.querySelector('.modal_button');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close_modal');
  
    openModal.addEventListener('click', () => {
      modal.classList.add('modal-show');
    });
  
    closeModal.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('modal-show');
    });
  });
  


/* 
  EFECTO MAQUINA DE ESCRIBIR */
  /* animacion para copiar efecto maquina */
document.addEventListener('DOMContentLoaded', function() {
  const typeWriter = document.getElementById("typewriter-text");
  const text = "ARTEMISA se creó basándose en el artículo 116 del código de policía,  enseñaremos a través de un juego web a las personas entre 17 y 19 años de edad, la importancia del código de policía, dejando en claro sus consecuencias frente al maltrato animal. ";
  function typeText() {
  let charIndex = 0;
  let timer = setInterval(() => {
      typeWriter.innerText = text.slice(0, charIndex);
      charIndex++;
      if (charIndex > text.length) {
      clearInterval(timer);
      setTimeout(() => {
          typeWriter.innerText = ""; // Limpiar el texto después de un breve retraso
          setTimeout(typeText, 3100); // Reiniciar la animación después de un breve retraso
      }, 3000);
      }
  }, 100);
  }
  typeText(); // Iniciar la animación por primera vez
})
