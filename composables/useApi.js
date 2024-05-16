
export default function useApi() {

  const endPoints = {
    fetchFAQList: {
      url: "/api/faq/list" + "?",
    },
    fetchTickersList: {
      url: "/api/tickers/list" + "?",
    },
  };

  return {
    ...endPoints,
  };
}
