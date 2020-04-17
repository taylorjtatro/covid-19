import axios from 'axios';
import { proxy } from '../config';

export default class OnLoad {
    constructor() {

    }

    async loadResults() {
        try {

            
            const resAmerica = await axios(`${proxy}https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=csbs`);

            this.latest = resAmerica.data.latest;
           // console.log(this.latest)

            //console.log(resAmerica);
            this.result = resAmerica.data.locations;

        } catch(error) {
            alert(error);
        }
    }

 





    listState() {
        let statesList = [];

        this.result.sort((a,b) => {
            if (a.province > b.province) {
                return 1
            } else {
                return -1
            }
        });



        this.result.forEach(el => {
            if (statesList.length === 0) {
                statesList.push(el)
            } else if (el.province !== statesList       [statesList.length-1].province || statesList.length === 'undefined') {
                statesList.push(el);
            }
        })

      

      this.testing123 = statesList;

        return statesList;
    }


findNoProvince() {
    this.index = this.testing123.findIndex(el2 => el2.province === '');
    //https://stackoverflow.com/questions/15997879/get-the-index-of-the-object-inside-an-array-matching-a-condition
}

removeNoProvince() {
    this.testing123.splice(this.index, 1);


    //could also have used pop to remove the first item of an array
}




}


/* this is waht source=csbs =
    so maybe we just type in the states and then when they click on them all of the date is displayed in the top and then in the counties

resAmerica = {
    data: {
        latest: {
            confirmed: 124342,
            deaths: 23444
        },
        locations: [
            {
                coordinates:
                country:
                country_code:
                country_populations:
                county: 
                id: 0
                last_updated: Date,
                latest: {
                    conrimed: 30765,
                    deaths: 672;
                },
                province: the state
            }
        ]
    }
}

*/