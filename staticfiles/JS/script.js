let desc = document.getElementsByClassName('preview')
Array.from(desc).forEach((element) => {
  element.innerHTML = element.innerText;
  element.style.color = '#ccc';
});


const jobTitles = document.querySelector('.typed-text').innerText.split(', ');
const textContainer = document.querySelector('.text-container');
let index = 0;

function scrollToElement(elementSelector, instance = 0) {
  // Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are elements matching the selector and if the requested instance exists
  if (elements.length > instance) {
      // Scroll to the specified instance of the element
      elements[instance].scrollIntoView({ behavior: 'smooth' });
  }
}

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
  scrollToElement('.header',1);
});

link2.addEventListener('click', () => {
  // Scroll to the second element with "header" class
  scrollToElement('.header', 2);
});

link3.addEventListener('click', () => {
  scrollToElement('.column');
});


const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");

link4.addEventListener('click', () => {
  scrollToElement('.header', 1);
});

link5.addEventListener('click', () => {
  // Scroll to the second element with "header" class
  scrollToElement('.header', 2);
});

link6.addEventListener('click', () => {
  scrollToElement('.column');
});

let fix = document.getElementById('fix');

// Function to move the element to bottom -35 after 5 seconds
function moveBottom() {
    fix.style.bottom = "-40px";
}

// Set a timeout to call moveBottom after 5 seconds
let timeoutId = setTimeout(moveBottom, 3000);

// Function to reset the element to bottom 0 when the user clicks on the screen
function resetBottom() {
    fix.style.bottom = "0px";
}

// Event listener to reset the bottom position when the user clicks on the screen
document.addEventListener('click', function(event) {
    resetBottom();
    clearTimeout(timeoutId); // Cancel the timeout to prevent it from triggering after a click
    setTimeout(moveBottom, 3000);
});
