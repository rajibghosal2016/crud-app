import axios from "axios";

const url = "http://127.0.0.1:8000";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(`${url}/add`, user);
};

export const editUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
