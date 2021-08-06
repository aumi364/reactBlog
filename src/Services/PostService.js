import Axios from "axios";
import url from "./PostUrl";

const getPosts = async () => {
  try {
    console.log("fetching");
    const response = await Axios.get(url);
    return response;
  } catch (error) {
    return error.response;
  }
};
const showPost = async (id) => {
  try {
    const response = await Axios.get(`${url}/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
const deletePost = async (id) => {
  try {
    const response = await Axios.delete(`${url}/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
const createPost = async (data) => {
  try {
    const response = await Axios.post(url, data, {
      headers: {
        "Content-type": "application/json",
      },
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
export { getPosts, showPost, deletePost, createPost };
