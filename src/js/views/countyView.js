import { elements, addComma } from './base';


const prepareRenderCounties = (arr, i) => {
    let item = `
        <div class="insert-county">
            <h1>${arr.county}</h1>
            <h2>Confirmed: ${addComma(arr.latest.confirmed)}</h2>
            <h2>Deaths: ${addComma(arr.latest.deaths)}</h2>
        </div>
    `;

    elements.countyContainer.insertAdjacentHTML('beforeend', item);
}



export const renderCounties = countyObj => {
    countyObj.forEach(prepareRenderCounties);

}

export const clearCounties = () => {
    [elements.countyContainer, elements.countyAndStateInfo].forEach(el => el.textContent = '');
}


export const countyTotals = (prov, latest) => {
    let countyTot = `
            <div class="state-number-info">
                <div>
                    <h1>${prov}</h1>
                </div>
                <div>
                    <h3>Confirmed Cases: ${addComma(latest.confirmed)}</h3>
                </div>
                <div>
                    <h3>Deaths: ${addComma(latest.deaths)}</h3>
                </div>
            </div>
            <div class="state-counties-title">
                <h4>State Counties:</h4>
            </div>   
    `;

    elements.countyAndStateInfo.insertAdjacentHTML('afterbegin', countyTot);
}

export const getCountyNodes = () => {
    let nList = document.querySelectorAll('.insert-county');
    let sArray = Array.from(nList);
    sArray.forEach(el => el.classList.add('slideOut'));
    console.log(nList);
}