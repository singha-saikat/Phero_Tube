console.log('welcome');
const handleCategory = async () => {
   const response = await fetch ('https://openapi.programming-hero.com/api/videos/categories');
   const data = await response.json();
   console.log(data.data);
   const categoriesContainer = document.getElementById('category-container');
   const div = document.createElement('div');
   data.data?.forEach((catagori) => {
      console.log(catagori);
      div.innerHTML =`
   <button class="btn">${catagori.category}</button>
   
   
   `
   
   })
   categoriesContainer.appendChild(div);
 } 



handleCategory();

 