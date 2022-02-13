import customAxios from "./../customAxios";

const route = "/api/articles/";

const articlesApi = {
    async getArticlesSortedByDate() {

        let response = await customAxios.get(`${route}`)
            .then((data) => {
                return data;
            })
            .catch(error => {
                console.error(`Route ${route} does not exist !`, error);
            });

        if (response) {
            /** Step to sort Article by date **/
            response.data.sort(function (a, b) {
                /** Have to use "new Date" to format "field date" in timestamp **/
                return new Date(b.date) - new Date(a.date);
            })
            return response.data;
        }
        return [];

    }
}

export default articlesApi;
