import axios from "axios"


const axiosInstance = axios.create({
    baseURL: `https://creepy-gray-magpie.cyclic.cloud/`, 
    headers: {}
})


exports.logIn = (completeForm) =>{

   return axiosInstance.post(`api/login`, completeForm)
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        console.log(error);
        return error
    })
}