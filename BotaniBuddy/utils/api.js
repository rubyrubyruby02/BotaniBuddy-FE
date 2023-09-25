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
    .post(`/api/users/6511523890ae7626d1e65f/add_by_search`, name)
    .then((response) => {
      const strignified = JSON.stringify(response);
      console.log(strignified, "response");
      return strignified;
    })
    .catch((error) => {
      console.log(error, "error");
      return error;
    });
};
