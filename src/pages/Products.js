import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://auto-word-api-production.up.railway.app/api/product")
      .then((res) => {
        setData(res.data.data);
      });
  }, [data]);

  return (
    <section className="product p-4 gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {data.length > 0 ? (
        data && data.map((d) => <Product data={d} key={d._id} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default Products;
