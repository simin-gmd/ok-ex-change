// faq requst
import axios from "axios";

export default defineEventHandler(async (event) => {

  const {
    public: { API_URL },
  } = useRuntimeConfig();
  try {
    const response = await axios.get(
      `${API_URL}/server/api/support/faq`
    );
    return response.data;
  } catch (error) {
    return { status: false, data: error };
  }
});
