const searchInputField = document.querySelector(".search-input");
const dispalyElement = document.querySelector(".filtered-item");
// Get Cities Data
const cities = [];
const dataUrl =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
fetch(dataUrl)
    .then((resp) => resp.json())
    .then((data) => cities.push(...data));

// Get Matches to UserSearch
function getMatches(userSearch, citiesArray) {
    return citiesArray.filter((ele) => {
        const regex = new RegExp(userSearch, "gi");
        return ele.city.match(regex) || ele.state.match(regex);
    });
}

// Format Population Number
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Diplay Matches
function display() {
    const matches = getMatches(this.value, cities);
    const displayItemsToHtml = matches.map((ele) => {
        const regex = new RegExp(this.value, "ig");
        const cityName = ele.city.replace(
            regex,
            `<span class="mark">${this.value}</span>`
        );
        const stateName = ele.state.replace(
            regex,
            `<span class="mark">${this.value}</span>`
        );
        const population = numberWithCommas(ele.population);
        return `<li><span>${cityName}, ${stateName}</span><span>${population}</span></li>`;
    });
    dispalyElement.innerHTML = displayItemsToHtml;
    if (this.value == "") {
        dispalyElement.innerHTML = "";
    }
}

// Add EventListener to Search Field
searchInputField.addEventListener("change", display);
searchInputField.addEventListener("keyup", display);
