console.log("welcome");
const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
 
  console.log(data.massage);
  const categoriesContainer = document.getElementById("category-container");

  data.data?.forEach((category) => {
    console.log(category);
    const div = document.createElement("div");
    div.innerHTML = `
      <button onclick="handleLoadData('${category.category_id}')" class="btn w-15 md:w-32 lg:w-48">${category.category}</button>
      `;
    categoriesContainer.appendChild(div);
  });
};
const handleLoadData = async (categoryID) => {
  const response = await fetch(
    ` https://openapi.programming-hero.com/api/videos/category/${categoryID}`
  );
  const data = await response.json();
  const drawing = document.getElementById('for-drawing');

  if (data.message === "no data found!!!"){
    drawing.innerHTML = "";
    forDrawing();
  }
  else{
    drawing.innerHTML = "";
  }
  
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  
  data.data?.forEach((information) => {
    console.log(data.data);
    const time = information?.others?.posted_date;
    console.log(time);
    const timeInHours = Math.floor( time / 3600);
    const timeInMin = parseInt(time % 60);
    console.log(timeInHours,timeInMin);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 shadow-xl h-48">
        <div style="position:relative; color:white;object-fit:cover;" class="relative">
         <img style="height:160px; width:100%;" src=${information?.thumbnail} />
          <div style="position:absolute;bottom:0; right:0; background-color: black; ">
            ${timeInHours} hrs ${timeInMin} min ago 
          </div>
          
        </div>
        <div class="flex gap-4 items-center">
        <div>
        <div class="avatar p-4">
        <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img  class="w-full h-40" src= ${information?.authors[0]?.profile_picture}  />
        </div>
      </div>
        </div>
        <div>
          <h6>${information.title}</h6>
          <div class="flex  items-center gap-2">
          <h2>${information.authors[0].profile_name}</h2>
          <h2>${information?.authors[0]?.verified? '<span class="verified-badge"><img width="16" height="16" src="https://img.icons8.com/color/96/verified-badge.png" alt="verified-badge"/></span>' : '' }</h2>
          </div>
          <h2 class="">${information.others?.views} views</h2>
          
        </div>
      </div>
     
      `;
    cardContainer.appendChild(div);
  });
};

handleCategory();
handleLoadData('1000');
 const forDrawing = () => {
  const drawing = document.getElementById('for-drawing');
  const div = document.createElement('div');
  div.innerHTML=`
  <div class="flex justify-center mt-8 ">
  <img src="./images/Icon.png" alt="">
  </div>
  <h1 class="text-center text-4xl font-bold mt-4">Oops!! Sorry ,there is no content here</h1>
  
  `
  drawing.appendChild(div);

 }
