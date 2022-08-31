import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { obtenerProductosApi } from "../apis/productsApi";
import ProductCard from "../components/ProductCard";
import NewProductModal from "../components/NewProductModal";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const resp = await obtenerProductosApi();
      console.log(resp.data.data);
      setProducts(resp.data.data);
    };

    obtenerProductos();
  }, []);

  return (
    <>
      <Title titulo="Listado de productos" />

      <section className="row pt-5">
        <article className="col">
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#newProductModal"
          >
            Agregar nuevo
          </button>
        </article>
      </section>
      <main className="row">
        <article className="col">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </article>
      </main>
      <NewProductModal />
    </>
  );
};

export default ProductsPage;
