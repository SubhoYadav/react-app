import axios from "axios";
const api = "https://fakestoreapi.com/products";

const getProducts = async () => {
  try {
    const response = await axios.get(api);
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

const getProductById = async (id) => {
  try {
    const response = await axios.get(api + `/${id}`);
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export { getProducts, getProductById };
