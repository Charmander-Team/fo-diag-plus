import customAxios from "./../customAxios";

const route = "/api/users/";

const usersApi = {

  async createUser(user) {

    let response = await customAxios.post(`${route}`, user)
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

  async getUser(token) {

    console.log(token?.access);
    
    let response = await customAxios.get(`${route}`, token)
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

}

export default usersApi;
