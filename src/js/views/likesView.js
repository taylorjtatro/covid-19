import elements from './base';

export const toggleLikeBtn = (id, isLiked) => {
    //boolean here and we will just say true or false in our index.js
    const iconString = isLiked ? `fas fa-star ${id}` : `far fa-star ${id}`;


    //this should select the heart when clicked and change it to either full or not
    document.querySelector(`.${id}`).setAttribute('class', iconString);
    
    //icon outlined is far fa-star

    //icon full is fas fa-star
}