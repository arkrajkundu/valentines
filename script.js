const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const text = document.querySelector('.head-text');
const imageElement = document.querySelector('img');

const contemplation = [];
contemplation.push("You sure?", "Think twice", "Really?", "Seriously?", "Huhhh??", "Think again!", "Think about it", "You okay?");
console.log(contemplation[Math.random]);

let diminish = 0.9;
let flareUp = 1.1;

noBtn.addEventListener("click", () => {
  noBtn.style.transform = `scale(${diminish})`;
  yesBtn.style.transform = `scale(${flareUp})`;
  const random = Math.floor(Math.random() * contemplation.length)
  noBtn.innerHTML = contemplation[random];
  diminish -= 0.1;
  flareUp += 0.1;
})

yesBtn.addEventListener("click", () => {
  imageElement.src = 'images/final.gif';
  document.body.style.background = 'rgba(250,251,250,255)';
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  text.innerText = 'yippeeeeeeeeeeee';
})
