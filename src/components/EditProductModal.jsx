import React, { useState, useEffect } from "react";
import { actualizarProductoApi, obtenerProductoApi } from "../apis/productsApi";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  name: "",
  description: "",
  price: 0,
  stock: 0,
  category: "",
  image: "",
};

const EditProductModal = () => {
  const [productForm, setProductForm] = useState(initialState);
  const { id } = useParams();

  const navigate = useNavigate();

  const editarProducto = async () => {
    await actualizarProductoApi(id, productForm);
    navigate(0);
  };

  useEffect(() => {
    const obtenerProducto = async () => {
      const resp = await obtenerProductoApi(id);
      setProductForm(resp.data.data);
    };
    obtenerProducto();
  }, [id]);

  return (
    <div
      className="modal fade"
      id="editProductModal"
      tabIndex={-1}
      aria-labelledby="editProductModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editProductModalLabel">
              Editar el producto
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={productForm.name}
                onChange={(e) =>
                  setProductForm({ ...productForm, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">
                Descripcion
              </label>
              <input
                type="text"
                className="form-control"
                id="productDescription"
                value={productForm.description}
                onChange={(e) =>
                  setProductForm({
                    ...productForm,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Precio
              </label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                value={productForm.price}
                onChange={(e) =>
                  setProductForm({ ...productForm, price: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productStock" className="form-label">
                Existencias
              </label>
              <input
                type="number"
                className="form-control"
                id="productStock"
                value={productForm.stock}
                onChange={(e) =>
                  setProductForm({ ...productForm, stock: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">
                Categoria
              </label>
              <input
                type="text"
                className="form-control"
                id="productCategory"
                value={productForm.category}
                onChange={(e) =>
                  setProductForm({ ...productForm, category: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">
                Imagen
              </label>
              <input
                type="text"
                className="form-control"
                id="productImage"
                value={productForm.image}
                onChange={(e) =>
                  setProductForm({ ...productForm, image: e.target.value })
                }
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-warning"
              data-bs-dismiss="modal"
              onClick={editarProducto}
            >
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
