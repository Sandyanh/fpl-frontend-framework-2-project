import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

//getList
export const getList = async({resource = "products"}) =>{
  const {data} = await axios.get(resource);
  return data;
}

//getDetail
export const getDetail = async({resource = "products",id}) =>{
  if(!id) return;
  const {data} = await axios.get(`${resource}/${id}`);
  return data;
}

//addProduct
export const addProduct = async ({resource = "products", values}) =>{
  const {data} = await axios.post(resource,values)
  return data;
}

//updateProduct
export const updateProduct = async ({resource = "products", id, values}) =>{
  if(!id) return;
  const {data} = await axios.put(`${resource}/${id}`,values)
  return data;
}

//deleteProduct
export const deleteProduct = async ({resource = "products",id}) =>{
  if(!id) return;
  const {data} = await axios.delete(`${resource}/${id}`);
  return data;
}