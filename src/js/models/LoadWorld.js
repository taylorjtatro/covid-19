import axios from 'axios';
import { proxy } from '../config';

export default class LoadWorld {
    constructor() {

    }

    async loadWorldResults() {
        try {
            const resWorld = await axios(`${proxy}https://coronavirus-tracker-api.herokuapp.com/v2/locations`);
            
            this.latest = resWorld.data.latest;
            this.result = resWorld.data.locations;


        } catch(error) {
            alert(error);
        }
    }

    listCountries() {
        let countryList = [];
/*Original code sort by name
        this.result.sort((a,b) => {
            if (a.country > b.country) {
                return 1;
            } else {
                return -1;
            }
        })
 */       
// This sorts it so the ones with the most confirmed are first
this.result.sort((a,b) => {
    if (a.latest.confirmed < b.latest.confirmed) {
        return 1;
    } else {
        return -1;
    }
})
 console.log(this.result)
        this.result.forEach(el => {
            if (countryList.length === 0) {
                countryList.push(el)
            } else if (el.country !== countryList       [countryList.length-1].country || countryList.length === 'undefined') {
                countryList.push(el);
            }
        })

        this.countries = countryList;


    }



}


