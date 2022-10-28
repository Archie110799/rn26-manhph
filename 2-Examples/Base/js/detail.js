window.onload = function () {
  let id = getIdUrl();
  getUser(id);
};

function getUser(id) {
  let url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + id
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderInfo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(id);
}

function getIdUrl() {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
  return id;
}

function renderInfo(user) {
  const contentHTML = `
    <p>${user?.id}</p>
    <p>${user?.name}</p>
    <button onclick="gotoForm()">Update</button>
  `;
  const elm = document.getElementById("info");
  elm.innerHTML = contentHTML;
}

function gotoForm() {
  let id = getIdUrl();
  gotoFormURL(id);
}

function gotoFormURL(id) {
  window.location.href = `./form.html?id=${id}`;
}
