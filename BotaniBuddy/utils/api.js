import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://creepy-gray-magpie.cyclic.cloud/`,
  headers: {},
});

exports.logIn = (completeForm) => {
  console.log("inside axios func");
  console.log(completeForm, "in axios");

  return axiosInstance
    .post(`api/login`, completeForm)
    .then((response) => {
      console.log(response, "response");
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

exports.searchBar = (name, user_id) => {
  console.log("inside plant function axios");
  console.log(name, "in axios");

  return axiosInstance
    .post(`/api/users/650da89de046626a01ae5752/add_by_search`, {name})
    .then((response) => {
     console.log(response.data, 'in axios then block')
      return response.data;
    })
    .catch((error) => {
      console.log(error, "error");
      return error;
    });
};
