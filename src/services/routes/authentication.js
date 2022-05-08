import customAxios from "./../customAxios";

const route = "/api/token/";

const authentication = {
    async byPostToken(dataUser) {

        let response = await customAxios.post(`${route}`,dataUser)
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.error(`Route ${route} does not exist !`, error);
            });

        if (response) {
            return response.data;
        }
        else
        {
            return null
        }
    },
}

export default authentication;
