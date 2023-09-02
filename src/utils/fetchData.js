import axios from "axios";

const API_URL = "http://localhost:3030";

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("API isteği sırasında bir hata oluştu:", error);
  }
};

export default fetchData;
