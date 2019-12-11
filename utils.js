const cleanData = (data) => {
  console.log('weather description', data.list[0])
  let weatherObj = {};
  weatherObj.city = data.city.name;
  weatherObj.sunrise = data.city.sunrise;
  weatherObj.sunset = data.city.sunset;
  weatherObj.card1 = {};
  weatherObj.card2 = {};
  weatherObj.card3 = {};
  weatherObj.card1.time = data.list[0].dt;
  weatherObj.card2.time = data.list[1].dt;
  weatherObj.card3.time = data.list[2].dt;
  weatherObj.card1.temp = data.list[0].main.temp;
  weatherObj.card2.temp = data.list[1].main.temp;
  weatherObj.card3.temp = data.list[2].main.temp;
  weatherObj.card1.description = data.list[0].weather[0].description;
  weatherObj.card2.description = data.list[1].weather[0].description;
  weatherObj.card3.description = data.list[2].weather[0].description;
  weatherObj.card1.icon = data.list[0].weather[0].icon;
  weatherObj.card2.icon = data.list[1].weather[0].icon;
  weatherObj.card3.icon = data.list[2].weather[0].icon;

  return weatherObj;
}

module.exports = cleanData;