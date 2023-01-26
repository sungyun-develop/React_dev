import Button from "./Button";
import styled from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! (Total:{coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select value={setCoins}>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}) PRICE: {coin.quotes.USD.price}$
              </option>
            ))}
          </select>
          <input type="text"></input>

          <button>계산</button>
        </div>
      )}
    </div>
  );
}

export default App;
