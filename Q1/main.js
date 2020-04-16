// JavaScript Document

// 1. must be querySelector rather than querySelectorAll because querySelectorAll returns a NodeList
let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
// 2. Typo in 'document'
let body = document.querySelector('body');
// 3. Sadly clickity click is not a valid event... though it really should be
submitButton.addEventListener('click', function(e) {
  // 4. Input was never declared
  let input = document.querySelector('input[type="text"]');
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>';
  // 5. The element was named para, not paragraph
  main.appendChild(para);
  //body.setAttribute('class', 'meow');
  console.log('=^..^=');
});