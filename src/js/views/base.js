/**
 * Original Code
 

export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    resultsList: document.querySelector('.results__list')

}

*/


/**
 * CSS GRID CODE
 */

export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    resultsList: document.querySelector('.results__list'),
    statesList: document.querySelector('.states-container'),
    countyContainer: document.querySelector('.county-container'),
    countyAndStateInfo: document.querySelector('.select-county-and-state-name'),
    usConfirmed: document.querySelector('.us-confirmed'),
    usDeaths: document.querySelector('.us-deaths'),
    worldCountries: document.querySelector('.world-countries-container'),
    worldConfirmed: document.querySelector('.world-confirmed'),
    worldDeaths: document.querySelector('.world-deaths'),
    countyLikesStar: document.querySelector('.select-like')

}








export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg class="spin">
                <use xlink:href="img/spinner-solid.svg#icon-1"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}

export const elementStrings = {
    loader: 'loader'
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);

    if (loader) loader.parentElement.removeChild(loader);
}



export const addComma = num => {
   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}