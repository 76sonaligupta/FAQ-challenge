const questionContainers = document.querySelectorAll('.question-contain');

questionContainers.forEach(container => {
  container.addEventListener('click', function() {
    const isActive = this.classList.contains('active'); // Check if the clicked item is already active
    
    // Close all other accordion items
    closeAllAccordionItems();

    // Toggle the active class to change the appearance of the question
    this.classList.toggle('active');

    // Select the corresponding answer container
    const answerContainer = this.nextElementSibling;

    // Toggle the active class for the answer container
    answerContainer.classList.toggle('active');

    // If the answer container is active and it wasn't active before, set its max-height to its scroll height
    if (answerContainer.classList.contains('active') && !isActive) {
      answerContainer.style.maxHeight = answerContainer.scrollHeight + "px";
      // Change the image icon to minus
      const imageWrap = this.querySelector('.image-wrap');
      if (imageWrap) {
        imageWrap.innerHTML = '<img src="icon-minus.svg" alt="" />';
      }
    } else {
      // If the answer container is inactive or it was already active, reset its max-height to 0
      answerContainer.style.maxHeight = 0;
      // Change the image icon to plus
      const imageWrap = this.querySelector('.image-wrap');
      if (imageWrap) {
        imageWrap.innerHTML = '<img src="icon-plus.svg" alt="" />';
      }
    }
  });
});

function closeAllAccordionItems() {
  const allContainers = document.querySelectorAll('.question-contain');
  allContainers.forEach(container => {
    const answerContainer = container.nextElementSibling;
    container.classList.remove('active');
    answerContainer.classList.remove('active');
    answerContainer.style.maxHeight = 0;
    const imageWrap = container.querySelector('.image-wrap');
    if (imageWrap) {
      imageWrap.innerHTML = '<img src="icon-plus.svg" alt="" />';
    }
  });
}
