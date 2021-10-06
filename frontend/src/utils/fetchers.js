import axios from "axios";
const baseEndpoint = process.env.REACT_APP_BASE_API_ENDPOINT || 'http://localhost:5000';
console.log(process.env)
export const getItems = async () => {
  return (await axios.get(`${baseEndpoint}/item/`)).data;
};

export const getItemById = async (id) => {
  return (await axios.get(`${baseEndpoint}/item/${id}`)).data;
};
