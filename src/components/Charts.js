import '../App.css';
import React from "react"

import Card from './Card';
import cardsData from './chartsData';

function Charts() {
  return (
    <>
    <div className="main">
      <h2>Charts</h2>
      <div className="description">
        <p>Charts are the main tools used for technical analysis. Charts plot the price history of a certain asset. The visual represantation allows to recognize rare or common price patterns, trends, support and resistance.</p>
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


export default Charts;
