import { elements, addComma } from './base';





const prepareStateRender = arr => {
    let item = `
        <div class="insert-state">
            <a class="results-link" href="#${arr.province}">
                <h1 class="province">${arr.province}</h1>
            </a>
        </div>  
    `
    elements.statesList.insertAdjacentHTML('beforeend', item);
}




export const renderStates = statesArray => {

    statesArray.forEach(prepareStateRender);
}

export const renderAmericaTotals = total => {
    elements.usConfirmed.textContent = addComma(total.confirmed);
    elements.usDeaths.textContent = addComma(total.deaths);
}