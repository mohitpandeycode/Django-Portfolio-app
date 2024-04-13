
function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}


const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

link2.addEventListener('click', () => {
    scrollToElement('.info');
});



const link7 = document.getElementById("link7");
const link8 = document.getElementById("link8");


link7.addEventListener('click', () => {
  // Scroll to the second element with "header" class
  scrollToElement('.info');
});

link8.addEventListener('click', () => {
    scrollToElement('.column');
});

let fix = document.getElementById('fix');

// Function to move the element to bottom -35 after 5 seconds
function moveBottom() {
    fix.style.bottom = "-53px";
}

// Set a timeout to call moveBottom after 5 seconds
let timeoutId = setTimeout(moveBottom, 4000);

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