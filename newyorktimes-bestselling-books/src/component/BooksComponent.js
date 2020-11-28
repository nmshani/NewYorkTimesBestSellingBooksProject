import React, { Component } from 'react'
import BooksService from '../service/BooksService';


class BooksComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            books:[],
            age_group: "",
            amazon_product_url: "",
            article_chapter_link: "",
            asterisk: 0,
            author: "",
            book_image: "",
            book_image_height: 500,
            book_image_width: 329,
            book_review_link: "",
            book_uri: "",
            buy_links: [],
            contributor: "",
            contributor_note: "",
            dagger: 0,
            description: "",
            first_chapter_link: "",
            isbns: [],
            price: 0,
            primary_isbn10: "",
            primary_isbn13: "",
            publisher: "",
            rank: this.props.match.params.id,
            rank_last_week: 0,
            sunday_review_link: "",
            title: "",
            weeks_on_list: 1
        }
        this.purchaseBookClicked = this.purchaseBookClicked.bind(this)
        this.navigateToHome = this.navigateToHome.bind(this);
    }

    componentDidMount() {
        //Get book rank id from the selected book from the home page table
        var id = this.state.rank;
        var bookslist:[];
        //Get Book list and filter book by passed ID from the Home page which was selected
        BooksService.retrieveAllBooks()
            .then(
                response => {
                    debugger;
                    console.log(response);
                    //Book list
                    bookslist = response.data.results['books'];
                    this.setState({books:bookslist});
                    //Return selected book from the home page table
                    const oneBook = this.state.books.filter(function(book){
                        if(book['rank'] == id){
                            return book;
                        }
                    })
                    //Set Book details to state parameters
                    this.setState({
                        age_group: oneBook[0]['age_group'],
                        amazon_product_url: oneBook[0]['amazon_product_url'],
                        article_chapter_link: oneBook[0]['article_chapter_link'],
                        asterisk: oneBook[0]['asterisk'],
                        author: oneBook[0]['author'],
                        book_image: oneBook[0]['book_image'],
                        book_image_height: oneBook[0]['book_image_height'],
                        book_image_width: oneBook[0]['book_image_width'],
                        book_review_link: oneBook[0]['book_review_link'],
                        book_uri: oneBook[0]['book_uri'],
                        buy_links: oneBook[0]['buy_links'],
                        contributor: oneBook[0]['contributor'],
                        contributor_note: oneBook[0]['contributor_note'],
                        dagger: oneBook[0]['dagger'],
                        description: oneBook[0]['description'],
                        first_chapter_link: oneBook[0]['first_chapter_link'],
                        isbns: oneBook[0]['isbns'],
                        price: oneBook[0]['price'],
                        primary_isbn10: oneBook[0]['primary_isbn10'],
                        primary_isbn13: oneBook[0]['primary_isbn13'],
                        publisher: oneBook[0]['publisher'],
                        rank: oneBook[0]['rank'],
                        rank_last_week: oneBook[0]['rank_last_week'],
                        sunday_review_link: oneBook[0]['sunday_review_link'],
                        title: oneBook[0]['title'],
                        weeks_on_list: oneBook[0]['weeks_on_list']
                    })
                    console.log('oneBook :',oneBook)
                    console.log('State :',this.state)
                }
            ).catch(err => {
                console.log('Error ->',err.message);
            });
    }

    //Naviage to Home page
    navigateToHome() {
        this.props.history.push(`/`)
    }

    //Buy book from amazon
    purchaseBookClicked() {
        window.open(this.state.amazon_product_url, "_blank") //to open new page
    }


    render() {

        let { description, rank } = this.state

        return (
        	<>
            <div>
                <h3>Book Details</h3>
                <h6 className="alert alert-warning">Book Rank</h6>
                <div>{this.state.rank}</div>
                <h6 className="alert alert-warning">Title</h6>
                <div>{this.state.title}</div>
                <h6 className="alert alert-warning">Description</h6>
                <div>{this.state.description}</div>
                <h6 name="description" component="div" className="alert alert-warning" />
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Contributor</th>
                                <th>Publisher</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.author}</td>
                                <td>{this.state.contributor}</td>
                                <td>{this.state.publisher}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <img class="img-rounded" width="{this.state.book_image_width}" heigth="{this.state.book_image_height}" src={this.state.book_image} />
            </div>
            <h6 name="description" component="div" className="alert alert-warning" />

            <div className="row">
	            <button className="btn btn-success" onClick={this.purchaseBookClicked}>Buy Now</button>
                <button className="btn btn-warning" onClick={this.navigateToHome}>Cancel</button>
	        </div>
            </>

        )
    }
}

export default BooksComponent