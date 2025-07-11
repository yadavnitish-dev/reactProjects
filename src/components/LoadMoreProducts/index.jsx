import React, { useEffect, useState } from "react";

function LoadMoreProducts() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count===0 ? 0 : count * 20}`
      );
      const result = await response.json();
      
      if (result && result.products && result.products.length) {
        if (count === 0) {
          setProducts(result.products);
        } else {
          setProducts((prevData) => [...prevData, ...result.products]); 
        }
      }

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(products.length >= 160) {
      setDisabled(true);
    }
  }, [products]);

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-40 h-40 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <button
          disabled={disabled}
          onClick={()=>setCount(count+1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Load More Products
        </button>
        {disabled && (<div className="ml-4 text-gray-500 mt-2 ">No more products to load</div>)}
      </div>
    </>
  );
}

export default LoadMoreProducts;
