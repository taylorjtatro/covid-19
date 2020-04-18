export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, province, county, confirmed, deaths) {
        const like = {id, province, county, confirmed, deaths }
        this.likes.push(like);
        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
        //will return true or false
    }

    getNumLikes() {
        return this.likes.length;
    }
}