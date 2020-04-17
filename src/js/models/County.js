/***
 * So we ahve our array of all objects
 *  //we can maybe just push our states names into the array we used for onload
 * 
 * so here we need to get all of our states objects into an array based on the province they pick.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

import axios from 'axios';
import { proxy } from '../config';


 export default class County {
     constructor(province) {
        this.province = province;
     }

     //function to create array of counties
    async getCounties() {
        try {
           
            const res = await axios(`${proxy}https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=csbs&province=${this.province}`);

            this.countyInfo = res.data.locations;
            console.log(this.countyInfo);

            this.stateTotals = res.data.latest;

        } catch(error) {
            alert(error)
        }
    }



    orderCounties() {
        const countyOrder = this.countyInfo.sort((a,b) => {
            if (a.county > b.county) {
                return 1;
            } else {
                return -1;
            }

        })

       return countyOrder
       
    }
 }