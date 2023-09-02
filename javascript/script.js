
const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();

  console.log(data.massage);
  const categoriesContainer = document.getElementById("category-container");

  data.data?.forEach((category) => {
    
    const div = document.createElement("div");
    div.innerHTML = `
      <button onclick="handleLoadData('${category.category_id}')"  class="btn  sm:w-none btn-sm sm:btn-sm md:btn-md lg:btn-lg focus:bg-pink-400 focus:text-white">${category.category}</button>
      `;
    categoriesContainer.appendChild(div);
  });
};
let Id ;
const handleLoadData = async (categoryID) => {
  Id = categoryID;
  const response = await fetch(
    ` https://openapi.programming-hero.com/api/videos/category/${categoryID}`
  );
  const data = await response.json();
  const drawing = document.getElementById("for-drawing");

  if (data.message === "no data found!!!") {
    drawing.innerHTML = "";
    forDrawing();
  } else {
    drawing.innerHTML = "";
  }
   

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  data.data?.forEach((information) => {
    

    const time = information?.others?.posted_date;
    
    const timeInHours = Math.floor(time / 3600);
    const timeInMin = parseInt(time % 60);
    console.log(timeInHours, timeInMin);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 shadow-xl ">
        <div  class="relative text-white object-cover ">
         <img  class="h-40 w-[100%]" src=${information?.thumbnail} />
          <div  class="absolute bottom-1 right-1 bg-black ">
          
            ${timeInHours} hrs ${timeInMin} min ago 
          </div>
          
        </div>
        <div class="flex gap-4 items-center">
        <div>
        <div class="avatar p-4">
        <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img  class="w-full h-40" src= ${
            information?.authors[0]?.profile_picture
          }  />
        </div>
      </div>
        </div>
        <div>
          <h6 class="font-bold text-xl  ">${information.title}</h6>
          <div class="flex  items-center gap-2">
          <h2>${information.authors[0].profile_name}</h2>
          <h2>${
            information?.authors[0]?.verified
              ? '<span class="verified-badge"><img width="16" height="16" src="https://img.icons8.com/color/96/verified-badge.png" alt="verified-badge"/></span>'
              : ""
          }</h2>
          </div>
          <h2 class="">${information.others?.views} views</h2>
          
        </div>
      </div>
     
      `;
    cardContainer.appendChild(div);
    
  });
  
};

handleCategory();
handleLoadData("1000");
const forDrawing = () => {
  const drawing = document.getElementById("for-drawing");
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="flex justify-center mt-8 ">
  <img src="./images/Icon.png" alt="">
  </div>
  <h1 style="font-size:28px" class="text-center text-4xl font-bold mt-4">Oops!! Sorry ,there is no content here</h1>
  
  `;
  drawing.appendChild(div);
};
const SortViews = async () => {
  const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${Id}`);
  const channeldata = await (res.json());

  const array = channeldata.data;

  array.sort((a, b) => {
      const aViews = parseFloat(a.others.views);
      const bViews = parseFloat(b.others.views);
      return bViews - aViews;
  });
  
   

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  array?.forEach((information) => {
    

    const time = information?.others?.posted_date;
    console.log(time);
    const timeInHours = Math.floor(time / 3600);
    const timeInMin = parseInt(time % 60);
    console.log(timeInHours, timeInMin);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card bg-base-100 shadow-xl ">
        <div  class="relative text-white object-cover ">
         <img  class="h-40 w-[100%]" src=${information?.thumbnail} />
          <div  class="absolute bottom-1 right-1 bg-black ">
          
            ${timeInHours} hrs ${timeInMin} min ago 
          </div>
          
        </div>
        <div class="flex gap-4 items-center">
        <div>
        <div class="avatar p-4">
        <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img  class="w-full h-40" src= ${
            information?.authors[0]?.profile_picture
          }  />
        </div>
      </div>
        </div>
        <div>
          <h6 class="font-bold text-xl  ">${information.title}</h6>
          <div class="flex  items-center gap-2">
          <h2>${information.authors[0].profile_name}</h2>
          <h2>${
            information?.authors[0]?.verified
              ? '<span class="verified-badge"><img width="16" height="16" src="https://img.icons8.com/color/96/verified-badge.png" alt="verified-badge"/></span>'
              : ""
          }</h2>
          </div>
          <h2 class="">${information.others?.views} views</h2>
          
        </div>
      </div>
     
      `;
    cardContainer.appendChild(div);
    
  });
}
 const getTime = () =>{
  
 }
