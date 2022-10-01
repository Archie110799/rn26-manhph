if (typeof document === "undefined") {
  // during server evaluation
  console.log("Server loadding...!!!!");
} else {
  // during client's browser evaluation
  const collection = document.getElementsByClassName("item");
  console.log(collection);
}

fetch("header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });

fetch("footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
