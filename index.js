const categoriesContainer = document.getElementById("categories");

const categories = [
  { id: 1, name: "Phones" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Real Estate" },
  { id: 4, name: "Vehicles" },
  { id: 5, name: "Fashion" },
  { id: 6, name: "Home & Garden" },
  { id: 7, name: "Sports" },
  { id: 8, name: "Toys & Games" },
  { id: 9, name: "Books" },
  { id: 10, name: "Health & Beauty" },
  { id: 11, name: "Computers" },

  { id: 13, name: "Musical Instruments" },
  { id: 14, name: "Baby Products" },

  { id: 16, name: "Art & Collectibles" },
  { id: 17, name: "Food & Beverages" },


];

categories.forEach((category) => {
  categoriesContainer.innerHTML += ` <div class="category">
          ${category.name}
        </div>`;
});
