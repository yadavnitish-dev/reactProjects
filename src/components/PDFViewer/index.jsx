import React, { useEffect, useState } from "react";
import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";

function ProductPDFViewer() {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);

  async function fetchListOfProducts() {
    const response = await fetch("https://dummyjson.com/products?limit=10");
    const result = await response.json();

    if (result && result.products && result.products.length) {
      setProducts(result.products);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

 function PdfViewComponent({ productdetails }) {
    return (
      <Document>
        <Page>
          <View>
            <Text>{productdetails.title}</Text>
          </View>
          <View>
            <Text>{productdetails.description}</Text>
          </View>
        </Page>
      </Document>
    );
  }

  async function handleFetchProductDetails(getId) {
    const response = await fetch(`https://dummyjson.com/products/${getId}`);
    const result = await response.json();

    if (result) setProductDetails(result);
  }

  console.log(productDetails);

  return (
    <div>
      <h1>pdf Viewer</h1>
      <div>
        {products && products.length ? (
          <ul>
            {products.map((product) => (
              <li
                key={product.id}
                onClick={() => handleFetchProductDetails(product.id)}
              >
                {product.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available</p>
        )}
      </div>
      <div>
        {productDetails && (
          <>
            <PDFViewer style={{ width: "900px", height: "500px" }}>
              <PdfViewComponent productdetails={productDetails} />
            </PDFViewer>
            <PDFDownloadLink
              document={<PdfViewComponent productdetails={productDetails} />}
              fileName="productDetails.pdf"
            >
              <button>Download</button>
            </PDFDownloadLink>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductPDFViewer;
