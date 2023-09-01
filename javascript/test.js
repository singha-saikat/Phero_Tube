div.innerHTML=`
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src=${information?.thumbnail}
          />
        </figure>
        <div class="card-body">

        
          <h2 class="card-title">
           ${information.title}
            
          </h2>
          <p>
          ${information.details}
          </p>
          <h3> totoal viws: ${
            information.total_view ? information.total_view : "no vviews"
          }</h3>
          <div class="card-footer flex justify-between mt-8">
            <div class="flex">
              <div>
                <div class="avatar online">
                  <div class="w-14 rounded-full">
                    <img
                      src=${information.author?.img}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h6>${information.author?.name}</h6>
                <small>2022-08-24 17:27:34</small>
              </div>
            </div>
            <div class="card-detaild-btn">
              <button onclick=handleModal('${information._id}')
                class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
      
      `