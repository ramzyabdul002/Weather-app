
// 50 requests a day if it is free API
// If reached the limit, delet it and create another 


const key = 'TFFYxdsbqzq7eXrJaYa5AWgvumIz5jDU'


// GET WEATHER INFORMATION
const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};


// GET CITY INFORMATION
const getCity = async (city) => {


  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey= ${key}&q=${city}`

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};










