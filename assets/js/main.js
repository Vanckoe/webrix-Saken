//const slider = document.getElementById('slider');
//const sliderValue = document.getElementById('slider-value');
//const minButton = document.getElementById('min-button');
//const maxButton = document.getElementById('max-button');
//
//slider.addEventListener('input', () => {
//  sliderValue.textContent = slider.value;
//});
//
//minButton.addEventListener('click', () => {
//  slider.value = 0;
//  sliderValue.textContent = 0;
//});
//
//maxButton.addEventListener('click', () => {
//  slider.value = 1000;
//  sliderValue.textContent = 1000;
//});

const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

slider.addEventListener('input', () => {
  const value = slider.value;
  sliderValue.textContent = value;
  updateSliderBackground(value);
});

function updateSliderBackground(value) {
  const fillPercent = (value / 1000) * 100;
  const gradientStartColor = '#FDDC55';
  const gradientEndColor = '#FDC62E';
  const trackBackgroundColor = '#383838';
  
  const gradientColor = `linear-gradient(180deg, ${gradientStartColor} 0%, ${gradientEndColor} ${fillPercent}%, ${trackBackgroundColor} ${fillPercent}%)`;
  
  slider.style.background = gradientColor;
}



