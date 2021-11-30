import { useEffect, useState } from "react";
import "./Polycoin.css";
import Todos from "./Todos";

function Polycoin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [btcQuotes, setBtcQuotes] = useState(0);
  const onChange = (event) => setBtcQuotes(event.target.value);
  const reset = () => {
    setBtcQuotes(0);
    setMyDollar(0);
  };
  const [coinPrice, setCoinNumber] = useState("$0");
  const onSelect = (event) => {
    setCoinNumber(event.target.value);
  };
  const choseCoin = coinPrice.split("$");
  const chosePrice = choseCoin[1];

  const [myDollar, setMyDollar] = useState(0);
  const changeTwo = (event) => setMyDollar(event.target.value);
  const btcPrice = coins.map((btc) => btc.quotes.USD.price);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("400 or 500 error");
        }
        return response.json();
      })
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
      .catch(() => {
        console.log("error!");
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title-logo">
        DO YOU KNOW COIN?
        <br />
        {loading ? "" : `(We're offering ${coins.length} coins.)`}
      </h1>
      {loading ? (
        <strong className="loading-bar">Loading...</strong>
      ) : (
        <select className="coin-list" value={coinPrice} onChange={onSelect}>
          {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <div className="need-box">
        <div className="item-box">
          <label htmlFor="btc">
            비트코인(BTC)과 다른 코인의 가치를 비교하세요!
          </label>
          <br />
          <input
            value={btcQuotes}
            id="btc"
            onChange={onChange}
            type="number"
            placeholder="비교를 원하는 비트코인의 수량을 입력하세요!"
          />
        </div>
        <div className="item-box">
          <label htmlFor="choseCoin">
            비트코인과 비교를 원하는 코인을 선택하세요!
          </label>
          <br />
          <input
            value={
              btcQuotes !== 0
                ? (btcQuotes * btcPrice[0]) / chosePrice
                : chosePrice
            }
            id="choseCoin"
            onChange={onChange}
            type="number"
            placeholder="비트코인과 비교를 원하는 코인을 선택하세요!"
          />
        </div>
        <div>
          <Todos />
        </div>
        <div className="item-box">
          <label htmlFor="myDollar">
            금액을 입력하시면 거래 가능한 양을 알려드립니다!
          </label>
          <br />
          <input
            value={myDollar}
            placeholder="금액을 입력하세요!"
            type="number"
            onChange={changeTwo}
            id="myDollar"
          />
        </div>
        <div className="item-box">
          <label htmlFor="canBuyCoin">당신이 구매 가능한 코인의 양</label>
          <br />
          <input
            value={myDollar !== 0 ? myDollar / chosePrice : ""}
            placeholder="당신이 구매 가능한 코인의 양"
            type="number"
            onChange={changeTwo}
            id="canBuyCoin"
          />
        </div>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Polycoin;
//btc로는 얼마인지 + 내가 20달러가지고 있을때 코인 몇개 교환할수 있는지
