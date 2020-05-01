// Global app controller
//https://coronavirus-tracker-api.herokuapp.com/v2/



import { elements, renderLoader, clearLoader } from './views/base';
import OnLoad from './models/OnLoad';
import * as onLoadView from './views/onLoadView';
import County from './models/County';
import * as countyView from './views/countyView';
import LoadWorld from './models/LoadWorld';
import * as loadWorldView from './views/loadWorldView';


//Global State of the App
const state = {};




const controlSearch = async () => {

       // renderSpinner(elements.statesList);

        // create a new OnLoad object and add it to state
        state.searchAmerica = new OnLoad();
        


    try {    
        await state.searchAmerica.loadResults();//this is where we are actually going to call to the server to get our data from the search object we create above
        state.searchAmerica.listState();
        state.searchAmerica.findNoProvince();
        state.searchAmerica.removeNoProvince();

        onLoadView.renderAmericaTotals(state.searchAmerica.latest);
        
        onLoadView.renderStates(state.searchAmerica.statesArr);
    }
    catch(error) {
        console.log(error);
        alert(error);
    }



}



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
  
  


    if (provinceFix) {
        



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
    


    state.county = new County(provinceFix);
     

    try {
        await state.county.getCounties()
        
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




window.state = state;





