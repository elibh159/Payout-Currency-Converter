import { useState, useEffect } from 'react';

var ws = new WebSocket('wss://green.binaryws.com/websockets/v3?app_id=31063');

function App() {
  const [baseCurrency, setBaseCurrency] = useState({ name: "USD", value: 1 });
  const [exchangeRates, setExchangeRates] = useState([]);
  const [payoutCurrencies, setPayoutCurrencies] = useState([]);

  useEffect(() => {
    ws.onopen = function (evt) {
      ws.send(JSON.stringify({ "payout_currencies": 1 }));
      ws.send(JSON.stringify({
        "exchange_rates": baseCurrency.value || 1,
        "base_currency": baseCurrency.name || "USD"
      }));
    };

    ws.onmessage = function (msg) {
      var data = JSON.parse(msg.data);
      if (data.msg_type === "payout_currencies") {
        setPayoutCurrencies(data.payout_currencies);
        console.log('ticks update: %o', data.payout_currencies);
      }
      if (data.msg_type === "exchange_rates") {
        console.log('exchange_rates' + JSON.stringify(data.exchange_rates.rates));
        setExchangeRates([data.exchange_rates.rates]);
      }
    };
  }, []);


  useEffect(() => {
    if (ws.readyState) {
      ws.send(JSON.stringify({
        "exchange_rates": +baseCurrency.value,
        "base_currency": baseCurrency.name
      }));
    }
  }, [baseCurrency]);


  const handleOnchange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setBaseCurrency(baseCurrency => ({ ...baseCurrency, [name]: value }));
  };


  const ListOfpayoutCurrencies = () =>
    payoutCurrencies.map((payoutCurrency) =>
      <option key={payoutCurrency} value={payoutCurrency}>
        {payoutCurrency}
      </option>);

  return (
    <div>
      {JSON.stringify(exchangeRates)}
      <input
        type="number"
        value={baseCurrency.value}
        name="value"
        onChange={handleOnchange}
      />
      <select
        onChange={handleOnchange}
        value={baseCurrency.name}
        name="name"
      >
        <ListOfpayoutCurrencies />

      </select>

      <table>
        <thead>
          <tr>
            <th>Currency </th>
            <th>Value </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* {exchangeRates.map((rate=>{
               <td>{rate.</td>
            }))} */}
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
