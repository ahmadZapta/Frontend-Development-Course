
const cardsContainer = document.querySelector(".cards-wraper");

function deleteProduct(id) {
  fetch('https://fakestoreapi.com/products/' + id, {
    method: 'delete',
  })
    .then((res) => res.json())
    .then((data) => console.log('res', data))
}

function addToCart() {
  const payload = {
    "id": 1,
    "userId": "1",
    "products": [
      {
        "id": 1,
        "title": "string",
        "price": 0.1,
        "description": "string",
        "category": "string",
        "image": "http://example.com"
      }
    ]

  }

  fetch('https://fakestoreapi.com/carts', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => console.log(data));
}

function updateCart(id) {
  const payload = {
    "id": 1,
    "userId": 1,
    "products": [
      {
        "id": 1,
        "title": "string",
        "price": 0.1,
        "description": "string",
        "category": "string",
        "image": "http://example.com"
      }
    ]
  }

  fetch('https://fakestoreapi.com/carts/' + id, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => console.log(data));
}

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
              <button onClick="deleteProduct(${element.id})" class="btn btn-danger">Delete</button>
              <button onClick="updateCart(${element.id})" class="btn btn-primary">Update</button>
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

const el = document.getElementById("myDiv");

console.log(el.getAttribute("data-id"));
console.log(el.getAttribute("DATa-id"));
console.log(el.dataset.id);