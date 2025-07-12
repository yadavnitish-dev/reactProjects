import React, { useEffect, useState } from "react";

function ScrollIndicator() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [percentage, setPercentage] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const result = await response.json();
      console.log(result.products);

      if (result && result.products && result.products.length > 0) {
        setData(result.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setError(e.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScrollPercentage = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScrollPercentage);
    return () => {
      document.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  //   console.log(percentage);

  if (error) {
    return <div>Error !! {error}</div>;
  }

  if (loading) {
    return <div className="text-center mt-20">loading data please wait</div>;
  }

  return (
    <>
      <div className="fixed top-0 w-full text-center">
        <h1 className="text-5xl bg-gray-500 p-3 text-white font-bold">Scroll Indicator</h1>
        <div className="bg-gray-100 w-full h-[10px]">
          <div
            style={{
              width: `${percentage}%`,
              height: "10px",
              background: "#000000",
              transition: "width 0.2s linear",
            }}
          ></div>
        </div>
      </div>

      <div className="flex justify-center mt-32">
        <div>
          {data && data.length > 0
            ? data.map((item) => (
                <p key={item.id} className="p-2 m-2 text-center">
                  {item.title}
                </p>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default ScrollIndicator;
