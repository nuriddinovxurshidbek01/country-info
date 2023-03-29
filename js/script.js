"use strict";

let wrapper = $(".wrapper");
let elSearch = $(".searchMain")

const dataInfo = fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then((data) => {

        renderUi(data);
        console.log(data);
        // search(data)
    })



function renderUi(array = data) {
    array.forEach(item => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
                          <img src="${item.flags.png}" class="card-img-top mainImg" alt="flag">
                            <div class="card-body p-2">
                                <h class="card-title  fs-2">${item.name.common}</h>
                                <p class="card-text"> <strong>Population: </strong> ${item.population} </p>
                                <p class="card-text"> <strong>Region: </strong> ${item.region} </p>
                                <p class="card-text"> <strong>Capital: </strong> ${item.capital} </p>
                                <buttom class="btn btn-primary">More Info</buttom>
                            </div>
        `
            // <p class="card-text">${evt.flags.alt? evt.flags.alt :"The flag of North Macedonia has a red field, at the center of which is a golden-yellow sun with eight broadening rays that extend to the edges of the field."} </p>
        wrapper.append(card);

    });
}

// function search(array) {
//     elSearch.addEventListener("keyup", (evt) => {
//         evt.preventDefault();

//         let value = evt.target.value;
//         wrapper.innerHTML = "";
//     })

//     let newItem = array.filter(item => {
//         return item.title.includes(value);
//     })
//     renderUi(newItem);
// }