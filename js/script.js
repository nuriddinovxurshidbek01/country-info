"use strict";

let wrapper = $(".wrapper");

const dataInfo = fetch("https://restcountries.com/v3.1/all?fields=name,flags")
    .then(res => res.json())
    .then((data) => {

        renderUi(data);
        console.log(data);
    })



function renderUi(array = data) {
    array.forEach(evt => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
                          <img src="${evt.flags.png}" class="card-img-top mainImg" alt="flag">
                            <div class="card-body p-2">
                                <h class="card-title  fs-2">${evt.name.common}</h>
                                <p class="card-text">${evt.name.official}</p>
                                <buttom class="btn btn-primary">Go somewhere</buttom>
                            </div>
        `
            // <p class="card-text">${evt.flags.alt? evt.flags.alt :"The flag of North Macedonia has a red field, at the center of which is a golden-yellow sun with eight broadening rays that extend to the edges of the field."} </p>
        wrapper.append(card);

    });
}