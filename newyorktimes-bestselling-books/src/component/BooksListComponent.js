import React, { Component } from 'react';
import BooksService from '../service/BooksService';

class BooksListComponent extends Component {

constructor(props) {
        super(props)
        this.state = {
            bookList : [],
            bookAll:[],
        }
        this.refreshDocuments = this.refreshDocuments.bind(this);
        this.viewBookClicked = this.viewBookClicked.bind(this);
    }

    componentDidMount() {
        this.refreshDocuments();
    }
    //Refresh page
    refreshDocuments() {
        BooksService.retrieveAllBooks()
            .then(
                response => {
                    debugger;
                    console.log(response);
                    //Get Result set
                    this.setState({bookList : response.data.results})
                    //Get book list
                    this.setState({bookAll:this.state.bookList['books']})
                    console.log('Book List :',this.state.bookList['books'])
                    console.log('Book All :',this.state.bookAll)
                }
            ).catch(err => {
                console.log('Error ->',err.message);
            });
            
    }

    //Click View Button for more details
    viewBookClicked(id) {
        console.log('View Ranks ID ' + id)
        this.props.history.push(`/book/${id}`)
    }


    render() {
        return (
            <>
            <div className="container">
                <h3>All Books</h3>
                <div className="container">
                    <table class="table table-striped">
                        <thead>
                            <tr class="bg-info">
                                <th>Rank</th>
                                <th>Book Title</th>
                                <th>Description</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bookAll.map(
                                    book =>
                                        <tr key={book.rank}>
                                            <td>{book.rank}</td>
                                            <td>{book.title}</td>
                                            <td>{book.description}</td>
                                            <td><button className="btn btn-success" onClick={() => this.viewBookClicked(book.rank)}>View</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        )
    }
}

export default BooksListComponent