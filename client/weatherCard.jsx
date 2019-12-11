import React from 'react';

const imgStyle = {width: '50%'};

const WeatherCard = ({card}) => (
  <div className="weatherCard">
    <img style={imgStyle} className="weatherImage" src={`http://openweathermap.org/img/wn/${card.icon}@2x.png`} />
    <div className="temperature">
    Temperature: {card.temp} °F
    </div>
    <div className="time">
    Time: {new Date(card.time * 1000).toLocaleTimeString()}
    </div>
    <div className="description">
    Description: {card.description}
    </div>
  </div>
)

export default WeatherCard;