import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "tbc",
});

export function postImage(image, user_id) {
  return axiosInstance
    .post(`/api/users/${user_id}/plants/addByImage`, image)
    .then((response) => {
      //some stuff
    });
}
