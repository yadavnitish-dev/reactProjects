import React, { useEffect, useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  async function fetchExchangeRate() {
    const response = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
      { method: "GET" }
    );
    const result = await response.json();

    const calculatedRate = result?.rates[toCurrency];
    setExchangeRate(calculatedRate);
    setConvertedAmount((amount * calculatedRate).toFixed(2));
  }

  useEffect(() => {
    fetchExchangeRate();
  }, [amount, fromCurrency, toCurrency]);

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleFromCurrencyChange(event) {
    setFromCurrency(event.target.value);
  }

  function handleToCurrencyChange(event) {
    setToCurrency(event.target.value);
  }

  return (
    <div className="bg-black flex flex-col justify-center items-center gap-5 text-white h-screen">
      <h1 className="text-5xl mb-15">Currency Converter</h1>
      <div className="bg-white text-gray-700">
        <input
          type="number"
          placeholder="Enter Amount"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <p>To</p>
      <div className="bg-white text-gray-700">
        <input
          type="text"
          placeholder="ConvertedAmount"
          value={convertedAmount}
          readOnly
        />
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div>
        <p>{`Exchange Rate : 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`}</p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
