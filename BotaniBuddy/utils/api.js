import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://creepy-gray-magpie.cyclic.cloud/api"/* "http://192.168.1.226:3000/api" */,
});
//https://creepy-gray-magpie.cyclic.cloud/api/users/650da470f65780777749fea5/identify_plants_image
export function postImage(data, user_id) {
  // dev: 650da8f0eb4e280152239ead
  // real: 650da470f65780777749fea5
  return axiosInstance
    .post("/users/650da470f65780777749fea5/identify_plants_image", data, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    })
    .then(({data}) => {
      return data
    })
    .catch((err) => {
      for (const key in err) {
        console.log(`${key}: ${err[key]}`);
      }
      console.log((err.response.data.msg));
      console.log((err.response.data.detail))
    });
}
