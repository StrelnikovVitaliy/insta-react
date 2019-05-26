export default class InstaService {

    constructor() {
        this._apiBase = 'http://localhost:3000/'
    }
    getResource = async (url) => {
        // будет записан рез запроса от сервера
        const res = await fetch(`${this._apiBase}${url}`); 
        // если не ок то ошибка
        //res статус - статус ошибки (что за ошибка)
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        //возвращает промис - что нам придут данные в формате json 
        return res.json()
    }

    //create new method get all posts using getResource - async too couse we wait for answer await posts
    getAllPosts = async () => {
        const res = await this.getResource('posts/');
        return res;
    }
}
