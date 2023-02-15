// Import secrets to be used in the client here
export const config = {
  basePath: "/" + (process.env.REACT_APP_URL_PREFIX || ""),
  apiURL: `/${process.env.REACT_APP_URL_PREFIX}/api`,
};

export default config;
