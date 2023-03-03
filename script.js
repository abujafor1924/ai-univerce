const dataLodedSection = (dataSort) => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      showdataSection(data.data.tools);
    });
};

const showdataSection = (data) => {
  //   show product or content
  toggaleSnipper(true);
  data.forEach((datas) => {
    // console.log(datas.features);
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
     <div class="d-flex justify-content-between ">
          <div>
               <h2 class="mt-5">${datas.name}</h2>
               <p><i class="fa-solid fa-calendar me-2"></i>${datas.published_in}</p>
          </div>
         <div class="mt-5">
         <button  type="button" class="btn btn-danger mt-4 "  data-bs-toggle="modal"
         data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right " onclick="showModalArea('${datas.id}')"></i></button>
         </div>
     </div>
     </div>
   </div>
     `;
    showData.appendChild(divArea);
  });
};

const showModalArea = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => modalDetailsArea(data.data));
};

const modalDetailsArea = (modals) => {
  console.log(modals);
  const modalOpen = document.getElementById("modal_open");
  modalOpen.innerHTML = "";
  const modalDiv = document.createElement("div");
  modalDiv.classList.add("col");

  modalDiv.innerHTML = `
 <div class="d-flex justify-content-around gap-3 ">
        <div class="card border border-danger rounded p-4">
        <div class="card-body">
          <h5 class="card-title">${modals.description}</h5>
         <div class="d-flex justify-content-around gap-4">
         <div class="text-success">
         <p class="m-0 p-0">${
           modals.pricing ? `${modals.pricing[0].price}` : "free of cost"
         }</p>
         <p class="m-0 p-0">${
           modals.pricing ? `${modals.pricing[0].price}` : "free of cost"
         }</p>
         </div>
         <div class="text-primary">
         <p class="m-0 p-0">${
           modals.pricing ? `${modals.pricing[1].price}` : "free of cost"
         }</p>
         <p class="m-0 p-0">${
           modals.pricing ? `${modals.pricing[1].price}` : "free of cost"
         }</p>
         </div>
         <div class="text-danger">
         <p class="m-0 p-0">${
           modals.pricing ? `${modals.pricing[2].price}` : "free of cost"
         }</p>
         <p class="m-0 p-0">${
           modals.pricing ? `${modals.pricing[2].price}` : "free of cost"
         }</p>
         </div>
         </div>
        <div class="d-flex justify-content-between mt-4">
            <div>
            <h6>Features</h6>
            <ul>
              <li>${modals.features[1].feature_name}</li>
              <li>${modals.features[2].feature_name}</li>
              <li>${modals.features[3].feature_name}</li>
            </ul>
            </div>
            <div>
            <h6>Integrations</h6>
            <ul>
              <li>${
                modals.integrations
                  ? `${modals.integrations[0]}`
                  : "no data found"
              }</li>
              <li>${
                modals.integrations
                  ? `${modals.integrations[1]}`
                  : "no data found"
              }</li>
              <li>${
                modals.integrations
                  ? `${modals.integrations[2]}`
                  : "no data found"
              }</li>
            </ul>
            </div>
            </div>
            </div>
        </div>
        
        <div class="card">
        <img src="${
          modals.image_link[0]
        }" class="card-img-top rounded p-2 position-relative" alt="...">
        <span class="badge bg-danger w-25 position-absolute mt-3 me-3 top-0 end-0 p-2">${
          modals.accuracy.score ? `${modals.accuracy.score}"% accuracy"` : ""
        }</span>
        <div class="card-body">
          <h5 class="card-title">${
            modals.input_output_examples
              ? `${modals.input_output_examples[0].input}`
              : "no data found"
          }</h5>
          <p class="card-text">${
            modals.input_output_examples
              ? `${modals.input_output_examples[0].output}`
              : "No Data Founded"
          }</p>
        </div>
        </div>
 </div>
  `;
  modalOpen.appendChild(modalDiv);
};

const toggaleSnipper = (loading) => {
  const loaderId = document.getElementById("loded_area");
  if (loading) {
    loaderId.classList.remove("d-none");
  } else {
    loaderId.classList.add("d-none");
  }
};
const showData = document.getElementById("show_data");

document.getElementById("btn_see").addEventListener("click", () => {
  dataLodedSection();
  toggaleSnipper(false);
});

dataLodedSection();
