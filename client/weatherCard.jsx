import React from 'react';

const WeatherCard = ({card}) => (
  <div className="weatherCard">
    Temperature: {card.temp}
    Time: {new Date(card.time * 1000).toLocaleString()}
  </div>
)

export default WeatherCard;