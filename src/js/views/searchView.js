/**
 * 
 * Original Code
 

import { elements } from './base';


export const getInput = () => elements.searchInput.value;//remember that since this is an arrow function and we only have one line it will automatically return this value here

export const clearInput = () => elements.searchInput.value = '';



const  renderResults = arr => {
    let item = `
        <li>
            <a class="results__link" href="">
                <div class="results__data">
                    <h3 class="state__name">${arr.county} County</h3>
                    <h3 class="cases">Cases: ${arr.latest.confirmed} Deaths: ${arr.latest.deaths}</h3>
                </div>
            </a>
        </li>
    `
    console.log(arr.county);
    elements.resultsList.insertAdjacentHTML('beforeend', item);
}



export const displayResults = countyArray => {
    countyArray.sort((a, b) => {
        if (a.county > b.county) {
            return 1
        } else {
            return -1
        }
    });
    countyArray.forEach(renderResults);
}

export const clearResults = () => {
    let item = '';
    elements.resultsList.innerHTML = '';
}

*/

/**
 * 
 * Sorting alphabetically
 *  so I have my array and I think we need to sort it first in our display results or as its own method and then pass it in
 *      so to sort we need to take our array and then sort based on arr.county
 *          array.map()
 * 
 * 
 * 
 * 
 * 
 */


 /**
  * 
  * CSS GRID CODE
  */

 import { elements } from './base';


 export const getInput = () => elements.searchInput.value;//remember that since this is an arrow function and we only have one line it will automatically return this value here
 
 export const clearInput = () => elements.searchInput.value = '';
 
 
 
 const  renderResults = arr => {
     let item = `
         <li>
             <a class="results__link" href="">
                 <div class="results__data">
                     <h3 class="state__name">${arr.county} County</h3>
                     <h3 class="cases">Cases: ${arr.latest.confirmed} Deaths: ${arr.latest.deaths}</h3>
                 </div>
             </a>
         </li>
     `
     console.log(arr.county);
     elements.resultsList.insertAdjacentHTML('beforeend', item);
 }
 
 
 
 export const displayResults = countyArray => {
     countyArray.sort((a, b) => {
         if (a.county > b.county) {
             return 1
         } else {
             return -1
         }
     });
     countyArray.forEach(renderResults);
 }
 
 export const clearResults = () => {
     let item = '';
     elements.resultsList.innerHTML = '';
 }
 