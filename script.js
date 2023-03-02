const dataLodedSection = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      showdataSection(data.data);
    });
};
const showdataSection = (data) => {
  //   console.log(data.tools[0].image);
  const showData = document.getElementById("show_data");
  data.tools.forEach((datas) => {
    console.log(datas.published_in);
    const divArea = document.createElement("div");
    divArea.classList.add("col");
    divArea.innerHTML = `
     <div class="card p-4">
     <img src="${datas.image}" class="card-img-center " alt="..." />
     <div class="card-body">
       <h5 class="card-title">Features</h5>
      <div>
          <ol>
               <li>${datas.features[0]}</li>
               <li>${datas.features[1]}</li>
               <li>${datas.features[2]}</li>
          </ol>
      </div>
     <div>
          <div>
               <h2 class="mt-5">${datas.name}</h2>
               <p><i class="fa-solid fa-calendar me-2"></i>${datas.published_in}</p>
          </div>
          <button type="button" class="btn btn-danger"><i class="fa-solid fa-arrow-right"></i></button>
     </div>
     </div>
   </div>
     `;
    showData.appendChild(divArea);
  });
};

dataLodedSection();
