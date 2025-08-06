
const cardsContainer = document.querySelector(".cards-wraper");
function fetchUserDetails() {
  fetch("https://fakestoreapi.com/products")
    .then((results) => results.json())
    .then((data) => {
      data.forEach((element) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${element.image}" alt="thumbnail" width="300" height="140" />
            <div class="content">
              <h2>${element.title}</h2>
              <p class="desc">${element.description}</p>
              <p class="price">${element.price}</p>
              <div class="d-flex gap-2 py-4">
              <button class="btn btn-danger" onclick=deleteProduct(${element.id})>Delete</button>
              <button class="btn btn-primary" onclick=updateProduct(${element.id})>Update</button>
              </div>
              <div>rating: ${element.rating.rate} (${element.rating.count} reviews)</div>
            </div>`;
        cardsContainer.append(card);
        console.log("data");
      });
      console.log("data", data);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

fetchUserDetails();

function addProduct() {
  const payload = {
    "id": 1,
    "title": "Product 1",
    "price": 50,
    "description": "description",
    "category": "Blog",
    "image": "http://example.com"
  }
  fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    body: payload
  })
    .then(res => {
      console.log(res, 'res')
    })
}

function deleteProduct(id) {

  console.log(id)
  fetch('https://fakestoreapi.com/products/' + id, {
    method: 'DELETE'
  })
    .then(function (res) {

      return res.json();
    })
    .then(result => {
      console.log('result', result)
      alert('Deleted successfully')
    })
    .catch(error => {

    })
}

function updateProduct(id) {
  fetch('https://fakestoreapi.com/products/' + id, {
    method: 'PUT',
    body: {
      "id": id,
      "title": "title",
      "price": 50,
      "description": "string",
      "category": "string",
      "image": "http://example.com"
    }
  })
    .then(data => data.json())
    .then(res => {
      console.log('res', res)
      alert('Updated successfully')
    })
    .catch(error => {
      alert('Error occured')
    })
}