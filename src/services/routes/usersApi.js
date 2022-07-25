import customAxios from "./../customAxios";

const route = "/api/users/";

const usersApi = {
    async getUsers() {

        /** Methode pour passer dans le header un token et autoriser l'accès a une route **/
        // Api.defaults.headers.common['Authorization'] = token;

        let response = await customAxios.get(`${route}`)
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

    // async createUser() {
    //
    //     let response = await customAxios.post(`${route}`)
    //         .then((data) => {
    //             return data;
    //         })
    //         .catch(error => {
    //             console.error(`Route ${route} does not exist !`, error);
    //         });
    //
    //     if (response) {
    //         return response.data;
    //     }
    //     return [];
    //
    // },
}

export default usersApi;
