import Api from './Api.js'

const UserApi = {
    async AllUser(){
        try {
            // // Methode pour passer dans le header un token et autoriser l'accès a une route
            // Api.defaults.headers.common['Authorization'] = token;
            let response = await Api.get('/api/users/')
            .then((data)=>{
              return data;
            })
            console.log("User",response)
            return response.data
    
        } catch (error) {
            console.log(error)
        }
    }
}

export default UserApi
