import React, { useEffect, useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
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
    <div className="bg-black flex flex-col justify-center items-center text-white h-screen">
      <h1 className="text-8xl mb-30 font-medium">Currency Converter</h1>
      <div className="bg-white text-gray-700 mb-3 rounded-2xl">
        <input
          type="number"
          placeholder="Enter Amount"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
          className="w-[500px] h-10 border-r-1 mx-2 focus:outline-none"
        />
        <select
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          className="h-10 mx-2 focus:outline-none"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <p className="mb-5 text-2xl">To</p>
      <div className="bg-white text-gray-700 mb-10 rounded-2xl">
        <input
          type="text"
          placeholder="ConvertedAmount"
          value={convertedAmount}
          readOnly
          className="w-[500px] h-10 border-r-1 mx-2 focus:outline-none"
        />
        <select
          value={toCurrency}
          onChange={handleToCurrencyChange}
          className="h-10 mx-2 focus:outline-none"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="text-2xl text-indigo-600 ">
        <p>{`Exchange Rate : 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`}</p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
