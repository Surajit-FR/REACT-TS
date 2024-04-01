import axios from "axios";
import { inputValues } from "../../config/DataTypes.config";
import { REACT_APP_BASE_URL } from "../../config/App.config";

export const API = axios.create({ baseURL: REACT_APP_BASE_URL });

// Login
export const LOGIN = (data: inputValues) => API.post("/usersignin", data);
// Register
export const REGISTER = (data: inputValues) => API.post("/adduser", data);
// All users
export const ALLUSERS = () => API.get("/alluser");