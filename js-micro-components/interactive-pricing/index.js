const toggleBtn = document.querySelector('.toggle--btn');
const priceText = document.querySelector('.price');
const priceSlider = document.querySelector('.slider-container');
const priceFill = document.querySelector('.price__fill');
const priceTrack = document.querySelector('.price__track');

/*==========  Helper Methods  ======*/

const slidePrice = (event) => {
  const { offsetX } = event;
  const width = Math.abs((offsetX / priceTrack.clientWidth) * 100);
  console.log(width);
  priceFill.style.width = `${width}%`;
};

const togglePrice = () => {
  // => toggle price from monthly to yearly
  // Price range goes from 0 to 100 for monthly
  // yearly price = (monthly_price * 12) * 25% discount
};

/*==========  Event Listeners  ======*/

// => List for price toggle => monthly / yearly
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('toggle');
});

// => track on price track click

// => track mousemove when the price slider is clicked
let mousedown = false;

priceSlider.addEventListener('mouseup', () => (mousedown = false));
priceSlider.addEventListener('mousedown', () => (mousedown = true));

priceTrack.addEventListener('mousemove', (event) => {
  //   if (mousedown) {
  //     console.log(event);
  //   }
});

priceTrack.addEventListener('click', slidePrice);
