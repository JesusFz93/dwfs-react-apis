import axios from "axios";
const url = "https://test-api-jbfp.herokuapp.com/api";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmE5MDViMDE1ZTI0ZjNmNmE0NjQ3OCIsImlhdCI6MTY2MTkwMzY0MCwiZXhwIjoxNjYxOTE4MDQwfQ.WHUut7RfzWC71xeWb3TDm0k0QWeHbmev9K2h3OGZG4A";

export const obtenerProductosApi = async () => {
  const resp = await axios.get(`${url}/products`);

  return resp;
};

export const obtenerProductoApi = async (id) => {
  const resp = await axios.get(
    `https://test-api-jbfp.herokuapp.com/api/products/${id}`,
    {
      headers: {
        "x-token": token,
      },
    }
  );

  return resp;
};

export const eliminarProductoApi = async (id) => {
  const resp = await axios.delete(
    `https://test-api-jbfp.herokuapp.com/api/products/${id}`
  );

  return resp;
};

export const crearProductoApi = async (producto) => {
  const resp = await axios.post(
    `https://test-api-jbfp.herokuapp.com/api/products`,
    producto,
    {
      headers: {
        "x-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmE5MDViMDE1ZTI0ZjNmNmE0NjQ3OCIsImlhdCI6MTY2MTkwMzY0MCwiZXhwIjoxNjYxOTE4MDQwfQ.WHUut7RfzWC71xeWb3TDm0k0QWeHbmev9K2h3OGZG4A",
      },
    }
  );

  return resp;
};

export const actualizarProductoApi = async (id, producto) => {
  const resp = await axios.put(
    `https://test-api-jbfp.herokuapp.com/api/products/${id}`,
    producto,
    {
      headers: {
        "x-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmE5MDViMDE1ZTI0ZjNmNmE0NjQ3OCIsImlhdCI6MTY2MTkwMzY0MCwiZXhwIjoxNjYxOTE4MDQwfQ.WHUut7RfzWC71xeWb3TDm0k0QWeHbmev9K2h3OGZG4A",
      },
    }
  );

  return resp;
};
