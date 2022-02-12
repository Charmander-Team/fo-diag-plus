import customAxios from "./../customAxios";

const route = "/api/articles/";

const articlesApi = {
    async getArticlesSortedByDate() {
        try {
            let response = await customAxios.get(`${route}`)
                .then((data) => {
                    return data;
                })
                .catch(error => {
                    console.error(`Route ${route} does not exist !`, error);
                });

            if (response) {
                // Step to sort Article by date
                response.data.sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date);
                })
                return response.data;
            }
            return [];

        } catch (error) {
            //console.log(error);
        }
    }
}

export default articlesApi;
