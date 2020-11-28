import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BooksListComponent from './BooksListComponent';
import BooksComponent from './BooksComponent';

class NewYorkBestSellingBooksApp extends Component {
    render() {
        return (
        	<Router>
                <>
                    <h1 class="bg-danger">New York Times Best-Selling Books List Application</h1>
                    
                    <Switch>
			          	<Route exact path="/" component={BooksListComponent}/>
						<Route exact path="/book" component={BooksListComponent}/>
						<Route exact path="/book/:id" component={BooksComponent}/>
                    </Switch>
                </>
            </Router>
        )
    }
}

export default NewYorkBestSellingBooksApp