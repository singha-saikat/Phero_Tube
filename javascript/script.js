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
  data.data?.forEach((information) => {
    console.log(data.data);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src=${information?.thumbnail}
          />
        </figure>
      <div class=" flex gap-4 ">
         <div class="w-14 rounded-full">
            <img
               src=${information?.authors?.profile_picture}
            />
         </div>
         
            <h2 class="card-title">
            ${information.title}
            </h2>
      </div>
      <div class="flex gap-4 ">
      <h2>${information.authors?.profile_name}</h2>
      
      <h2>${information?.authors?.verified? verified: ''}</h2>
      </div>
      <h2>${information.others?.views} views</h2>
      
      `;
    cardContainer.appendChild(div);
  });
};

handleCategory();
