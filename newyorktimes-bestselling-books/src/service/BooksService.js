import axios from 'axios'

//Api URL
const API_NYTIMES = `https://api.nytimes.com/svc/books/v3`
const LIST_API = `https://api.nytimes.com/svc/books/v3/lists.json`

//API Key from the https://developer.nytimes.com/my-apps which I created App
const API_KEY = `vIQz1qkxq8xQjiINyJI2WSRYIsaZJfNQ`
//Name
const NAME = `hardcover-fiction`



const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Accept": "*/*",
  	"api-key": API_KEY,
  	"Content-Type": "application/json"
  }
};


class BooksService {

    //Returns the books on the best sellers list for the specified date and list name.
    //API -> "/lists/2019-01-20/hardcover-fiction.json" or "/lists/current/hardcover-fiction.json"
    //I used "current" for {date} to get the latest list.
    //Used default name as "hardcover-fiction"
    retrieveAllBooks() {
        debugger
        return axios.get(`${API_NYTIMES}/lists/current/${NAME}.json?api-key=${API_KEY}`);
    }

    //The book reviews service lets you get NYT book review by author, ISBN, or title.
    bookReviewService(){
        debugger
        return axios.get(`${API_NYTIMES}/lists/current/${NAME}.json?api-key=${API_KEY}`);
    }
}

export default new BooksService()