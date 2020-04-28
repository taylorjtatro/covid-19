// Global app controller
//https://coronavirus-tracker-api.herokuapp.com/v2/


/* THIS WAS ORIGINAL BUT WE WILL RETOOL TO TRY GRID LAYOUT


import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

//Global State of the App
const state = {};

//function we want to call when the submit button is pressed on our search form
const controlSearch = async () => {
    //what we want to happen in here

    //1. Get the query from the view
    const query = searchView.getInput();//we will add an eventListener in our searchView so we will do this as a placeholder for now (this will end up equaling whatever they type in to the search form box)

    if (query) {
        //2 create a new Search object and add it to state
        state.searchAmerica = new Search(query);
        console.log(query)

        //3 Prepare UI for Results
        searchView.clearResults();
        //4 Search for Recipes
        await state.searchAmerica.getResults();//this is where we are actually going to call to the server to get our data from the search object we create above

        //render results on UI
        searchView.displayResults(state.searchAmerica.result);
        console.log(state.searchAmerica.result);

        //Clear search box
        searchView.clearInput();
        
    }
}

elements.searchForm.addEventListener('submit', e => {
    //so notice when you click the submit button our page reloads by defualt. Well we dont want that we just want our data to appear
    e.preventDefault();
    controlSearch();
})





/*
const searchAmerica = new Search('locations?source=csbs&province=New York');//so this is creating my search object which in its prototype has the getResults method which does our axios ajax call to get our data
console.log(searchAmerica);
searchAmerica.getResults();


const searchWorld = new Search('locations');
console.log(searchWorld);
searchWorld.getResults();

*/



/********************
 * CSS GRID LAYOUT BELOW TO TEST
 * 
 */

import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
import OnLoad from './models/OnLoad';
import * as onLoadView from './views/onLoadView';
import County from './models/County';
import * as countyView from './views/countyView';
import LoadWorld from './models/LoadWorld';
import * as loadWorldView from './views/loadWorldView';
import Likes from './models/Likes';
import * as likesView from './views/likesView';

//Global State of the App
const state = {};




const controlSearch = async () => {

       // renderSpinner(elements.statesList);

        //2 create a new Search object and add it to state
        state.searchAmerica = new OnLoad();
        

        //3 Prepare UI for Results
        //searchView.clearResults();
        //4 Search for Recipes
    try {    
        await state.searchAmerica.loadResults();//this is where we are actually going to call to the server to get our data from the search object we create above
        state.searchAmerica.listState();
        //render results on UI
       // searchView.displayResults(state.searchAmerica.result);
        //console.log(state.searchAmerica.result);
        state.searchAmerica.findNoProvince();
        state.searchAmerica.removeNoProvince();

        onLoadView.renderAmericaTotals(state.searchAmerica.latest);
        
        onLoadView.renderStates(state.searchAmerica.testing123);
    }
    catch(error) {
        console.log(error);
        alert(error);
    }



}

//Think that we should have an onload that then our "searchView" will really initally be like the startUp view which will get the data initially 

window.addEventListener('load', controlSearch);

const controlWorld = async () => {

    state.searchWorld = new LoadWorld();

    try {
        await state.searchWorld.loadWorldResults();

        state.searchWorld.listCountries();


        loadWorldView.renderWorldTotals(state.searchWorld.latest)

        loadWorldView.renderCountries(state.searchWorld.countries);
    }
    catch(error) {
        console.log(error);
        alert(error)
    }



}

window.addEventListener('load', controlWorld);



/*********
 * COUNTY CONTROLLER
 */

const controlCounty = async () => {
    //Get id from url
    const province = window.location.hash.replace('#', ''); //so window.location is the entire url and the hash is just the hash property
   
  let provinceFix = province.replace('%20', ' ');
  
  
//this logs our hash

    if (provinceFix) {
        
        //prepare UI for changes
    //THIS WILL BE TESTING TO SEE IF I CAN GET IT TO SLIDE OUT

/*
    const tester = e => {
        console.log(e.target)
        let test = document.querySelectorAll('.province');
        console.log(test);
        let ttwo = document.querySelectorAll('.insert-county');
        console.log(ttwo);
        let tarr = Array.from(ttwo);
        console.log(tarr);
        tarr.forEach(el => {
            el.classList.add('slideOut');
        })
    }
    
    document.querySelector('.body').addEventListener('click', tester)
*/

//This gets our countyNodes to add our slide out class
countyView.getCountyNodes();
//this just delays the getting our counties by 1 second may want to move 
const timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
    //look up promises again and awaiting them
    //https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout

}

await timeout(1000);
    

         countyView.clearCounties();

renderLoader(elements.countyAndStateInfo);
//Here is wehre we should add the loading spinner!!!!!!!!!!!


        //create new recipe object
        state.county = new County(provinceFix);
        //create recipe data

    try {
        await state.county.getCounties()
        //render recipe
        const countyOrder = state.county.orderCounties();
        //console.log(state.county)


        clearLoader();

        countyView.countyTotals(provinceFix, state.county.stateTotals);

        countyView.renderCounties(countyOrder);


    }
    catch(error) {
        console.log(error)
        alert(error)
    }

    }

}







//ok what is the best way to get our state name when they click on it.

 //window.addEventListener('hashchange', controlCounty);
 //window.addEventListener('load', controlCounty);

 ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlCounty));


/*********
 * Likes Controller
 */

const controlLike = (countyId) => {
    if (!state.likes) state.likes = new Likes();
    const currentId = countyId;
    const heartSelector = `div-${currentId}`;
    console.log(countyId);


    //user has not yet liked current recipe
    if (!state.likes.isLiked(currentId)) {
        //add like to state
        const newLike = state.likes.addLike(currentId, state.county.province, state.county.countyInfo[currentId].county, state.county.countyInfo[currentId].latest.confirmed, state.county.countyInfo[currentId].latest.deaths)
        //toggle the like button
        likesView.toggleLikeBtn(heartSelector, true);

        //add like to UI list
        console.log(state.likes)
    } else {
        //remove like to state
        state.likes.deleteLike(currentId);
        //toggle the like button
        likesView.toggleLikeBtn(heartSelector, false);
        //remove like to UI list
        console.log(state.likes)
    }


}



 document.querySelector('.county-container').addEventListener('click', e => {
     let id;
    if (e.target.matches('.fa-star')) {

       
       
        id = e.target.id;


        controlLike(id);
    }

    
})

window.state = state;





