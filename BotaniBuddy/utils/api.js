import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://creepy-gray-magpie.cyclic.cloud/`,
  headers: {},
});

exports.logIn = (completeForm) => {
  return axiosInstance
    .post(`api/login`, completeForm)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

exports.searchBar = (name, user_id) => {
  return axiosInstance
    .post(`/api/users/650da89de046626a01ae5752/add_by_search`, { name })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error, "error");
      return error;
    });
};

exports.logIn = (password, text) => {
  const completeForm = {
    username: text,
    password: password,
  };

  return axiosInstance
    .post(`api/login`, completeForm)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

exports.registerUser = (text, password) => {
  const newUser = {
    username: text,
    password: password,
  };

  return axiosInstance
    .post("api/register", newUser)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
