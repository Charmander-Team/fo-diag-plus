import axios from 'axios';

const articlesApi = {
    async getArticles() {
        try {
            let response = await axios.get('https://api.diag-plus.tk/api/articles/')
                .then((data) => {
                    return data;
                })
            return response.data

        } catch (error) {
            console.log(error)
        }
    }
}

export default articlesApi;
