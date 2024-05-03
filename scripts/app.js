



const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')


const updateUI = (data) => {
  console.log(data);
  /*
  const cityDetails = data.cityDetails;
  const weather = data.weather; 
  */

  // Destructure Properties

  const { cityDetails, weather } = data;

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">
        ${weather.WeatherText}
    </div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // update the night and day icon images
  const iconSrc = `/image/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);



  let timeSrc = weather.IsDayTime ? '/image/day.svg' : '/image/night.svg';
  // if (weather.isDayTime) {
  //   timeSrc = '/image/day.svg'
  // } else {
  //   timeSrc = '/image/night.svg'
  // }
  time.setAttribute('src', timeSrc);

  // Remove the d-none if present
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none')
  }
}


const updateCity = async (city) => {

  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return { cityDetails, weather }

}

cityForm.addEventListener('submit', e => {
  // prevent default action of reloading the page
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => updateUI(err));
});


// Ternary operator
// const result = false ? 'value 1' : 'value 2'
// console.log(result);







