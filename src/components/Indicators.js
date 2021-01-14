import '../App.css';
import React from 'react'

import Card from './Card';
import cardsData from './indicatorsData';

function Indicators(props) {
  return (
    <>
    <div className="main">
      <h2>Indicators</h2>
      <div className="description">
        <p>A technical indicator is a mathematical calculation based on the
        history and volumes exchanged of a certain asset. They are a fundamental
         part of technical analysis and are typically used to predict market
         trend. Generally they indicate wheter the price is in an "overbought"
         or "oversold" condition.</p>
      </div>
      <div className="cards-container">
        {cardsData.map((data, key) => {
          return (
            <div className="card" key={key} >
              <Card name={data.name}
                textfront={data.textfront}
                textback={data.textback} color={data.bgcolor} />
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Indicators;
