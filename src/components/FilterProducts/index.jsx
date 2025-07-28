import React, { act, useEffect, useState } from "react";

function FilterProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=50");
      const result = await response.json();
      const data = result?.products;
      if (data && data.length) {
        setProducts(data);
        setLoading(false);
        setFilteredProducts(data);
      }
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const uniqueCategories =
    products && products.length > 0
      ? [...new Set(products.map((productItem) => productItem.category))]
      : [];

  console.log(uniqueCategories);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const cpyProducts = [...products];
    setFilteredProducts(
      selectedCategory !== ""
        ? cpyProducts.filter(
            (productItem) =>
              productItem.category.toLowerCase() ===
              selectedCategory.toLowerCase()
          )
        : null
    );
  }, [selectedCategory]);

  if (loading) {
    <div>Loading Products... Please Wait!!!</div>;
  }

  return (
    <div className=" text-white pt-20 px-50 ">
      <h1 className="text-center text-5xl mb-10 text-black">
        Filter Products By Category
      </h1>
      <div className="grid grid-cols-3 justify-center text-center gap-5 ">
        {uniqueCategories && uniqueCategories.length > 0
          ? uniqueCategories.map((categoryItem) => (
              <button
                className={` py-1 mx-18 rounded-xl ${
                  selectedCategory === categoryItem ? "bg-green-800" : "bg-indigo-600"
                }`}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === categoryItem ? "" : categoryItem
                  )
                }
              >
                {categoryItem}
              </button>
            ))
          : null}
      </div>
      <div className="grid grid-cols-3 mt-15 text-center">
        {filteredProducts && filteredProducts.length > 0
          ? filteredProducts.map((productItem) => (
              <div className="bg-blue-800 m-8 px-8 py-8 ">
                <div key={productItem.id}>{productItem.title}</div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default FilterProducts;
