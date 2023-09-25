import axios from "axios"


const axiosInstance = axios.create({
    baseURL: `https://creepy-gray-magpie.cyclic.cloud/`, 
    headers: {}
})


exports.logIn = (password, text) =>{

    const completeForm = {
        username: text,
        password: password
    }


   return axiosInstance.post(`api/login`, completeForm)
    .then((response)=>{
      
        return response
    })
    .catch((error)=>{
        return error
    })
}


exports.registerUser = (text, password) => {

    const newUser = {
        username: text, 
        password: password
    }

    return axiosInstance.post('api/register', newUser)
    .then((response)=> {
        return response
    })
    .catch((error)=> {
        return error
    })
} 

exports.getPlantButtons = (user_id) => {
    return axiosInstance
        .get(`api/users/${user_id}/plants`)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        })
}

exports.getPlantInfos = (user_id, plant_id) => {
    return axiosInstance
        .get(`api/users/${user_id}/plants/${plant_id}`)
        .then(({data}) => {
            return data
        })
        .catch((error) => {
            return error
        })
}