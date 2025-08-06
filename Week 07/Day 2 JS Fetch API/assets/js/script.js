const productForm = document.getElementById("productForm");

addEventListener("submit", function (e) {
  e.preventDefault();
  const payload = {
    id: 1,
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    description: document.getElementById("description").value,
    category: document.getElementById("category").value,
    image: document.getElementById("image").value,
  };

  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
    })
    .catch((error) => {
      console.log(error);
    });
});
