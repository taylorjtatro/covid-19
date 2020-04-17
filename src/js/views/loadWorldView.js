import { elements, addComma } from './base';


const shortenName = name => {
    if (name.length > 15) {
        let shortName = `${name.slice(0, 15)}...`;
        return shortName;
    } else {
        return name;
    }
}
//arr.country
const prepareRenderCountries = arr => {
    let item = `
            <div class="insert-world-country">
                <div class="country-name">
                    <h1>${shortenName(arr.country)}</h1>
                </div>
                <div class="country-stats">
                    <h3 class="country-confirmed">Confirmed: ${addComma(arr.latest.confirmed)}</h3>
                    <h3 class="country-deaths">Deaths: ${addComma(arr.latest.deaths)}</h3> 
                </div>   
            </div> 
    `;

    elements.worldCountries.insertAdjacentHTML('beforeend', item);
}




export const renderCountries = el => {
    el.forEach(prepareRenderCountries);
}

export const renderWorldTotals = total => {
    elements.worldConfirmed.textContent = addComma(total.confirmed);
    elements.worldDeaths.textContent = addComma(total.deaths);
}