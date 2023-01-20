import axios from "axios";

const remote = axios.create();

export const fetchProducts = async () => {
  const productsUrl = "https://fakestoreapi.com/products/";

  const response = await remote.get(productsUrl);

  return response.data;
};
