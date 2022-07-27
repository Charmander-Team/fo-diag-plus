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

  async updateUser(token, newUserInfos) {

    const PAYLOAD = jwtDecode(token?.access);
    const USER_ID = PAYLOAD?.user_id;

    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    }
    delete newUserInfos.id

    let response = await customAxios.put(`${ROUTE + USER_ID}/`, newUserInfos, CONFIG)
      .then((data) => {
        return data;
      })
      .catch(error => {
        console.error(`Route ${ROUTE + USER_ID} does not exist !`, error);
      });

    if (response) {
      return response.data;
    }
    return [];

  },

  async getUser(token) {

    const PAYLOAD = jwtDecode(token?.access);
    const USER_ID = PAYLOAD?.user_id;

    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    }

    let response = await customAxios.get(`${ROUTE + USER_ID}`, CONFIG)
      .then((data) => {
        return data;
      })
      .catch(error => {
        console.error(`Route ${ROUTE + USER_ID} does not exist !`, error);
      });

    if (response) {
      return response.data;
    }
    return [];

  },

}

export default usersApi;
