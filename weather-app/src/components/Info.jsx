import React from "react";

function Info({ ınfo, state }) {
  return (
    <div className="info">
      {state ? (
        <div className="info">
          <p> {ınfo.name} </p>
          <div className="genelDeger">
            <p id="sicaklık"> {ınfo.main.temp} </p>
          </div>
          <p id="havaDurumu"> Hava Durumu : {ınfo.weather[0].description} </p>
          <div className="his">
            <p id="his"> Hissedilen {ınfo.main.feels_like} </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Info;
