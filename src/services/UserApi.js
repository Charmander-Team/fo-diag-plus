import axios from 'axios'

const UserApi = {
    async AllUser(){
        try {
            let response = await axios.get('http://api.diag-plus.tk/api/users/')
            .then((data)=>{
              return data;
            })
            console.log(response)
            return response.data
    
        } catch (error) {
            console.log(error)
        }
    }
}

export default UserApi