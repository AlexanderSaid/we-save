import axios from "axios";
const BASE_URL = "https://api.geoapify.com/v1/geocode/";

export default axios.create({
  baseURL: BASE_URL,
});
