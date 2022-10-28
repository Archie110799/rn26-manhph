window.onload = function () {
  let id = getIdUrl();
  getUser(id);
};

function getUser(id) {
  let url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + id;
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("input__email").value = data.name;
      document.getElementById("btn__submit").textContent = "Update";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(id);
}
