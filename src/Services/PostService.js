import Axios from "axios";
import url from "./PostUrl";
const getPosts = async () => {
  try {
    console.log("fetching");
    const response = await Axios.get(url);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
export { getPosts };
