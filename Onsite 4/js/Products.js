const Products = [
    {
        id : 1,
        name : "Product 1",
        Description : "This is Description for Product 1",
        Price : "20.00$",
        image : "../images/Products/img1.jpg"
    },
    {
        id : 2,
        name : "Product 2",
        Description : "This is Description for Product 2",
        Price : "25.00$",
        image : "../images/Products/img2.jpg"
    },
    {
        id : 3,
        name : "Product 3",
        Description : "This is Description for Product 3",
        Price : "20.00$",
        image : "../images/Products/img3.jpg"
    },
    {
        id : 4,
        name : "Product 4",
        Description : "This is Description for Product 4",
        Price : "40.00$",
        image : "../images/Products/img4.jpg"
    },
    {
        id : 5,
        name : "Product 5",
        Description : "This is Description for Product 5",
        Price : "15.00$",
        image : "../images/Products/img5.jpg"
    },
    {
        id : 6,
        name : "Product 6",
        Description : "This is Description for Product 6",
        Price : "19.99$",
        image : "../images/Products/img6.jpg"
    },
    {
        id : 7,
        name : "Product 7",
        Description : "This is Description for Product 7",
        Price : "20.00$",
        image : "../images/Products/img7.jpg"
    },
    {
        id : 8,
        name : "Product 8",
        Description : "This is Description for Product 8",
        Price : "80.00$",
        image : "../images/Products/img8.jpg"
    },
    {
        id : 9,
        name : "Product 9",
        Description : "This is Description for Product 9",
        Price : "10.00$",
        image : "../images/Products/img9.jpg"
    },
    {
        id : 10,
        name : "Product 10",
        Description : "This is Description for Product 10",
        Price : "20.00$",
        image : "../images/Products/img10.jpg"
    },
    {
        id : 11,
        name : "Product 11",
        Description : "This is Description for Product 11",
        Price : "21.00$",
        image : "../images/Products/img11.jpg"
    },
    {
        id : 12,
        name : "Product 12",
        Description : "This is Description for Product 12",
        Price : "22.00$",
        image : "../images/Products/img12.jpg"
    },
]
function addProducts() {
    const container = document.getElementById("cards");
    container.innerHTML = "";
    Products.forEach((product) =>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML =`
            <img src="${product.image}" alt="">
            <h3>${product.name}</h3>
            <p id="description">${product.Description}</p>
            <p id="Price">${product.Price}</p>
            <button class="btn">Add To Cart</button>
        `
        container.appendChild(card);
    });
}
addProducts()