console.log("welcome");
const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  console.log(data.data);
  const categoriesContainer = document.getElementById("category-container");

  data.data?.forEach((category) => {
    console.log(category);
    const div = document.createElement("div");
    div.innerHTML = `
      <button onclick="handleLoadData('${category.category_id}')" class="btn">${category.category}</button>
      `;
    categoriesContainer.appendChild(div);
  });
};
const handleLoadData = async (categoryID) => {
  const response = await fetch(
    ` https://openapi.programming-hero.com/api/videos/category/${categoryID}`
  );
  const data = await response.json();
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  data.data?.forEach((information) => {
    console.log(data.data);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 shadow-xl ">
        <figure>
          <img
            src=${information?.thumbnail}
          />
        </figure>
        <div class="flex gap-4 items-center">
        <div>
        <div class="avatar">
        <div class="w-24 rounded-full">
          <img src=${information?.authors[0]?.profile_picture} />
        </div>
      </div>
        </div>
        <div>
          <h6>${information.title}</h6>
          
        </div>
      </div>
      <div class="flex gap-4">
      <h2>${information.authors[0].profile_name}</h2>
      
      <h2>${information?.authors[0]?.verified}</h2>
      </div>
      <h2>${information.others?.views} views</h2>
      
      `;
    cardContainer.appendChild(div);
  });
};

handleCategory();
