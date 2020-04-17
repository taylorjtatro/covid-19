/**
 * ORIGINAL CODE
 

import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {//so now this is a method within our Search object that we create when we call it in our index.js
        try {
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const res = await axios(`${proxy}https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=csbs&province=${this.query}&timelines=1`);
            this.result = res.data.locations;//this is wehre we are going to want to save our data so that it it is store din our search object.
                //so now we have our search saved in our res and our result saved in our this.result

        } catch (error){
            alert(error)
        }
    }
}

*/



/**
 * 
 * CSS GRID CODE
 */

import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {//so now this is a method within our Search object that we create when we call it in our index.js
        try {
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const resAmerica = await axios(`${proxy}https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=csbs`);
            this.result = resAmerica.data.locations;//this is wehre we are going to want to save our data so that it it is store din our search object.
                //so now we have our search saved in our res and our result saved in our this.result
            console.log(resAmerica);

        } catch (error){
            alert(error)
        }
    }
}