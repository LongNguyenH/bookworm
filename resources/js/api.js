import axios from "axios";
import React from "react";
const api = axios.create({
    baseURL: process.env.MIX_BASE_URL,
  });
export default api;  