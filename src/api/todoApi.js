import axios from "axios";

export const getTodo = () => async () => {
  axios({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
    headers: {
      token: localStorage.getItem('AccessToken'),
    },
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const postTodo = (data) => async () => {
  axios({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "POST",
    headers: {
      token: localStorage.getItem('AccessToken'),
    },
    data: JSON.stringify(data),
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
}