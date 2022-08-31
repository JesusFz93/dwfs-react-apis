import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { eliminarProductoApi } from "../apis/productsApi";
import EditProductModal from "./EditProductModal";

const ProductCard = ({ id, image, name, description, category, action }) => {
  const navigate = useNavigate();

  const eliminarProductoIniciar = async () => {
    const resp = await eliminarProductoApi(id);
    console.log(resp);

    navigate("/products");
  };

  return (
    <div className="col" key={id}>
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          {action !== "edit" ? (
            <NavLink className="btn btn-info" to={`/products/${id}`}>
              Ver mas...
            </NavLink>
          ) : (
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#editProductModal"
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={eliminarProductoIniciar}
              >
                Eliminar
              </button>
            </div>
          )}
        </div>
        <div className="card-footer">
          <small className="text-muted">{category}</small>
        </div>
      </div>
      {action === "edit" && <EditProductModal />}
    </div>
  );
};

export default ProductCard;
