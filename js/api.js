let ratings = document.getElementById("ratings");

ratings.onsubmit = (e) => {
  e.preventDefault();
  const data = { name: e.target[0].value, message: e.target[0].value };
  axios
    .post("https://star-api-17ya.onrender.com/api/v1/message", data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
