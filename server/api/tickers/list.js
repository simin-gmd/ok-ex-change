// tickers list request
import axios from "axios";

export default defineEventHandler(async (event) => {

  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const response = await axios.get(
      `${API_URL}/oapi/v1/market/tickers`
    );
    return response.data;
  } catch (error) {
    return { status: false, data: error };
  }
});
