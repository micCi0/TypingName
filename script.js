// declaration
const text = "Typing Text Animation";
const heading = document.querySelector("h1");
let counter = 1;


// function to handle the animation
function moving(){
    // check if counter is less than text lenght
    (counter < text.length) ? counter++ : counter = randomValue();
    // update heading with sliced text and a cursor
    heading.textContent = `${text.slice(0 , counter)}|`;
    // set timeout for the next iteration
    setTimeout(moving , 500);
}
// start the function
moving();

// generate random number

function randomValue(){
    return Math.floor(Math.random() * text.length-7);
}
