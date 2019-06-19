const myImage = document.querySelector('img');

myImage.onclick = function () {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/download.jpeg') {
    myImage.setAttribute('src', 'images/download2.jpeg');
  } else {
    myImage.setAttribute('src', 'images/download.jpeg');
  }
};

// Personalized welcome message code

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'YOBA is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'YOBA is cool, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
};
