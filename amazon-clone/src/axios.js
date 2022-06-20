import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-442b2.cloudfunctions.net/api", //hosting url
  //baseURL: "http://localhost:5001/clone-442b2/us-central1/api", // local url
});

export default instance;
