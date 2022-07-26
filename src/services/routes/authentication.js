import customAxios from "./../customAxios";

const route = "/api/token/";
const routeTokenRefresh = "/api/token/refresh/";

const authentication = {

  async generateToken(credentials) {

    let response = await customAxios.post(`${route}`, credentials)
      .then((data) => {
        return data;
      })
      .catch(error => {
        console.error(`Route ${route} does not exist !`, error);
      });

    if (response) {
      return response.data;
    }
    return [];
  },

  async refresh(token) {
    let response = await customAxios.post(`${routeTokenRefresh}`, {refresh: token})
      .then((data) => {
        return data
      })
      .catch(error => {
        console.error(`Route ${routeTokenRefresh} does not exist !`, error)
      })

    if (response) {
      return response.data;
    }
    return [];
  }
}

export default authentication;
