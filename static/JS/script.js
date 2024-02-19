
function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const jobTitles = document.querySelector('.typed-text').innerText.split(', ');
const textContainer = document.querySelector('.text-container');
let index = 0;

function type() {
  const currentTitle = jobTitles[index];
  const textElement = document.createElement('span');
  textContainer.appendChild(textElement);

  let text = '';
  let charIndex = 0;

  const typingInterval = setInterval(() => {
    text += currentTitle[charIndex];
    textElement.textContent = text;
    charIndex++;

    if (charIndex === currentTitle.length) {
      clearInterval(typingInterval);
      setTimeout(erase, 1000);
    }
  }, 100);

  function erase() {
    const erasingInterval = setInterval(() => {
      text = text.slice(0, -1);
      textElement.textContent = text;

      if (text === '') {
        clearInterval(erasingInterval);
        index = (index + 1) % jobTitles.length;
        setTimeout(type, 500);
      }
    }, 50);
  }
}

type();

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});
