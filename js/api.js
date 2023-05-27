let ratings = document.getElementById("ratings"),
  ratingBox = document.getElementById("rating-box");

ratings.onsubmit = (e) => {
  e.preventDefault();
  if (e.target[0].value.length == 0 || e.target[1].value.length == 0) {
    alert("لم تتم اضافه تقيمك تاكد من كتابه البيانات");
  } else {
    const data = { name: e.target[0].value, message: e.target[1].value };
    axios
      .post("https://star-api-17ya.onrender.com/api/v1/message", data)
      .then(function (response) {
        alert("تم اضافه تقيمك نجاح");
      })
      .catch(function (error) {
        alert("لم يتم اضافه تقيمك");

        console.log(error);
      });
  }
};

axios
  .get("https://star-api-17ya.onrender.com/api/v1/message")
  .then(function (response) {
    response.data.message
      .reverse()
      .slice(0, 4)
      .map((item) => {
        ratingBox.innerHTML += `
      <div class="col-lg-3">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.message}</p>
            <a href="http://wa.me/+966538774001" class="bg-success text-white p-1 rounded-2"><i class="fa-brands fa-whatsapp fa-2xl" style="color: #03e264"></i> للتواصل</a>
          </div>
        </div>
      </div>
      `;
      });
  })
  .catch(function (error) {
    console.log(error);
  });
