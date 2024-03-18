import axios from "axios";
import logger from "../utils/logger";

const urlApiGraphQl = import.meta.env.VITE_API_GRAPHQL;
const urlApiRest = import.meta.env.VITE_API_REST;

const apiRestInstance = axios.create({
  baseURL: urlApiRest,
  timeout: 8000,
});

// Add a request interceptor for REST API
apiRestInstance.interceptors.request.use(
  async (config) => {
    // Modify the request before it is sent
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiRestInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    logger.error("api rest  error",error)
    // Handle response errors for REST API
    
    return Promise.reject(error);
  }
);


// Create Axios instance for GraphQL API
const apiGraphqlInstance = axios.create({
  baseURL: urlApiGraphQl,
  timeout: 8000,
});

// Add a request interceptor for GraphQL API
apiGraphqlInstance.interceptors.request.use(
  async (config) => {
    // Modify the request before it is sent
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiGraphqlInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    logger.error("api  error",error)

    // Handle response errors for GraphQL API
    return Promise.reject(error);
  }
);

// Export the GraphQL API instance
export { apiGraphqlInstance ,apiRestInstance};
