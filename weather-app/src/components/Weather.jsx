import axios from "axios";
import { useState } from "react";
import "./style.css";

export default function Weather({ setInfo, setState }) {
  const [city, setCity] = useState("");

  const handleChange = async () => {
    const api = "";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
    await axios(baseURL).then((res) => setInfo(res.data));
    setState(true);
  };
  return (
    <div className="infos">
      <h1>Hava Durumu</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
        }}
      >
        <div className="form">
          <input
            onChange={(e) => setCity(e.target.value)}
            className="inputText"
            type="text"
            placeholder="Şehri Giriniz"
          />
        </div>
        <div className="btnDiv">
          <button className="btn">Verileri Getir </button>
        </div>
      </form>
    </div>
  );
}
