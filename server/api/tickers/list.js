import axios from "axios";

export default defineEventHandler(async (event) => {

  const {
    public: { API_URL },
  } = useRuntimeConfig();

  // function filterQuery() {
  //   let queryString = "";
  //   if (gradeID) {
  //     queryString += `&grade_id=${gradeID}`;
  //   }
  //   if (schoolID) {
  //     queryString += `&school_id=${schoolID}`;
  //   }
  //   return queryString;
  // }
  try {
    const response = await axios.get(
      `${API_URL}/oapi/v1/market/tickers`
      // ,
      // {
      //   headers: {
      //     Authorization: `bearer ${authToken}`,
      //   },
      // }
    );
    console.log(response.data ,"dataaaa");
    return response.data;
  } catch (error) {
    return { status: false, data: error };
  }
});
