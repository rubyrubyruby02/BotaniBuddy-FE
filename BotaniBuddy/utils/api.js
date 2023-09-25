import axios from "axios"


const axiosInstance = axios.create({
    baseURL: `https://creepy-gray-magpie.cyclic.cloud/`, 
    headers: {}
})


exports.logIn = (completeForm) =>{

    console.log("inside axios func")
    console.log(completeForm, "in axios")

   return axiosInstance.post(`api/login`, completeForm)
    .then((response)=>{
        console.log(response, "response");
        return response
    })
    .catch((error)=>{
        console.log(error);
        return error
    })
}

exports.searchBar = (searchedPlant) => {

  console.log('inside plant function axios')
  console.log(searchedPlant, 'in axios')

  return axiosInstance.get('/api/users/:user_id/add_by_search', searchedPlant)
  .then((response) => {
    console.log(response, 'response')
    return response
  })
  .catch((error) => {
    console.log(error)
    return error
  })
}