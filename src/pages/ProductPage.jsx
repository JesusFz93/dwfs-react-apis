import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoApi } from "../apis/productsApi";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const obtenerProducto = async () => {
      const resp = await obtenerProductoApi(id);
      // console.log(resp.data.data);
      setProduct(resp.data.data);
    };

    obtenerProducto();
  }, [id]);

  return (
    <>
      <Title titulo="Informacion del producto" />
      <main className="row">
        <article className="col-md-4">
          <ProductCard {...product} action="edit" />
        </article>
        <article className="col-md-8">
          <p>Comprar con nosotros es muy facil</p>
        </article>
      </main>
    </>
  );
};

export default ProductPage;
