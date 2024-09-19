// Select the elements needed for the flip effect
const bookPageRight = document.querySelector('.page-right');
const bookPageLeft = document.querySelector('.page-left');
const coverRight = document.querySelector('.cover-right');
const coverLeft = document.querySelector('.cover-left');

// Function to flip the book pages
function flipBook() {
    if (bookPageRight.classList.contains('turn')) {
        bookPageRight.classList.remove('turn');
        coverRight.classList.remove('turn');
        coverLeft.classList.remove('turn');
    } else {
        bookPageRight.classList.add('turn');
        coverRight.classList.add('turn');
        coverLeft.classList.add('turn');
    }
}

// Add click event listener to the right page
bookPageRight.addEventListener('click', flipBook);