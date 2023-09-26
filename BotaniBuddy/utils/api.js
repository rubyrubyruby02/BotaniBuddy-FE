import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://creepy-gray-magpie.cyclic.cloud/`,
  headers: {},
});

exports.searchBar = (name, user_id) => {
  return axiosInstance
    .post(`/api/users/${user_id}/add_by_search`, { name })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
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

export function postImage(data, user_id) {
  return axiosInstance
    .post(`api/users/${user_id}/identify_plants_image`, data, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    })
    .then(({ data }) => {
      return data;
    });
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