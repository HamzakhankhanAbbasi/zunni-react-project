import axios from "axios";
import { toast } from "react-toastify";

export const postApi = async (url, data, history, navigate) => {
  try {
    const response = await axios.post(url, data);
    if (response.status == 200) {
      if (navigate) {
        if (response.data.length) {
          toast.success(response.data[0]);
        } else {
          toast.success(response.data);
        }
        history.push(navigate);
        return;
      }
      return response.data;
    }
  } catch (error) {
    if (error.response.data.length) {
      toast.warn(error.response.data[0]);
    } else {
      toast.warn(error.response.data);
    }
    return;
  }
};

export const getApi = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    return error.response.data;
  }
};