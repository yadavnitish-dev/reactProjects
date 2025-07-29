import React, { useEffect, useState } from "react";

function RandomQuote() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  async function quoteGenerator() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/quotes/random");
      const result = await response.json();

      if (result) {
        setLoading(false);
        setQuote(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    <div>Loading data... Please Wait!!!</div>;
  }

  useEffect(() => {
    quoteGenerator();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white gap-10">
      <div className="text-3xl flex text-center mx-30">{quote.quote}</div>
      <div>{quote.author}</div>
      <button
        className="bg-indigo-600 rounded-full px-5 py-2"
        onClick={quoteGenerator}
      >
        Refresh
      </button>
    </div>
  );
}

export default RandomQuote;
