// Selecting page elements
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.querySelector("#countrySearch");

const getCountry = (country) => {
    const url = "https://restcountries.com/v3.1/name/"
    const request = new XMLHttpRequest();
    request.responseType = "json";

    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            renderCountry(request.response[0]);
        }
    }
    request.open("GET", `${url}${country}`);
    request.send();

}

// getCountry("Germany");


const getCountryAndNeighbour = (country) => {

    const url = "https://restcountries.com/v3.1/name/"
    const alpha = "https://restcountries.com/v3.1/alpha/"
    const request = new XMLHttpRequest();
    //request.responseType = "json";

    request.open("GET", url + country);
    request.send();

    request.addEventListener("load", function () {
        console.log(this.responseText)
        const response = JSON.parse(this.responseText);
        console.log(response[0]);
        let neighbour = response[0].borders[0];
        renderCountry(response[0]);

        const request2 = new XMLHttpRequest();
        request2.open("GET", `${alpha}${neighbour}`);
        request2.send();
        request2.addEventListener("load", function () {
            const response = JSON.parse(this.responseText);
            console.log(response);
            renderCountry(response[0], "neighbour");
            let neighbour = response[0].borders[0];
            const request3 = new XMLHttpRequest();
            request3.open("GET", `${alpha}${neighbour}`);
            request3.send();

            request3.addEventListener("load", function () {
                const response = JSON.parse(this.responseText);
                console.log(response);
                renderCountry(response[0], "neighbour");
            })
        })
    })

}

// btn.addEventListener("click", displayCountry);
btn.addEventListener('click', displayCountries);