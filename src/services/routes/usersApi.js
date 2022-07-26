import customAxios from "./../customAxios";
import jwtDecode from "jwt-decode";

const ROUTE = "/api/users/";

const usersApi = {

  async createUser(user) {

    let response = await customAxios.post(`${ROUTE}`, user)
      .then((data) => {
        return data;
      })
      .catch(error => {
        console.error(`Route ${ROUTE} does not exist !`, error);
      });

    if (response) {
      return response.data;
    }
    return [];

  },

  async getUser(token) {

    const PAYLOAD = jwtDecode(token?.access);
    const USER_ID = PAYLOAD?.user_id;

    let response = await customAxios.get(`${ROUTE+USER_ID}`)
      .then((data) => {
        return data;
      })
      .catch(error => {
        console.error(`Route ${ROUTE+USER_ID} does not exist !`, error);
      });

    if (response) {
      return response.data;
    }
    return [];

  },

}

export default usersApi;
