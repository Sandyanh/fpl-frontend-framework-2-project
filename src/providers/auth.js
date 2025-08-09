import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/"

export const registerAPI = async ({resource = "users",values}) =>{
  const  {data} = await axios.post(resource,values);
  return data;
}
export const loginAPI = async ({resource = "login",values}) =>{
  const  {data} = await axios.post(resource,values);
  return data;
}