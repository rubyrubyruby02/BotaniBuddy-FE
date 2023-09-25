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