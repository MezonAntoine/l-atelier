import axios from "axios";

const serviceBaseUrlMapping = {
  api:
    process.env.NODE_ENV === "production"
      ? "https://l-atelier-test-back-end-d8e316542a74.herokuapp.com/"
      : process.env.REACT_APP_API_URL,
};

export const request = async (req) => {
  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    allowaorigin: "Allowa-Loc",
  };

  const reqHeaders = {
    ...defaultHeaders,
    ...req.headers,
  };

  try {
    const res = await axios.request({
      method: req.method,
      baseURL: serviceBaseUrlMapping[req.service],
      url: req.route,
      headers: reqHeaders,
      params: req.query,
      data: req.body,
      validateStatus: (status) => {
        return status < 500;
      },
    });
    if (res.status === 401) {
      return null;
    }

    return {
      status: res.status,
      content: res.data,
    };
  } catch (err) {
    if (err.response) {
      return {
        status: err.response.status,
        content: null,
      };
    }

    return null;
  }
};
