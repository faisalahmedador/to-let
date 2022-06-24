import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:3100'
  });

  export {
      API
  }