"use strict"
//REACT
import React from 'react';
import {render} from 'react-dom';
import {Router,Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {applyMiddleware ,createStore} from 'redux';
//IMPROT COMBINE REDUCERS
import reducers from './reducers';


//IMPROT ACTIONS
import {postBooks, deleteBook, updateBook} from './actions/bookActions';
import {addToCart} from './actions/cartActions';


const middleware = applyMiddleware(thunk, logger());
// STEP 1 create the store
const store = createStore(reducers, middleware);

// IMPORT PAGES
import BooksList from './components/pages/booksList';
import BookForm from './components/pages/bookForm';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Cart from './components/pages/cart';

import Main from './main';

const Routes=(
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path="/" component={Main}>
						<IndexRoute component={BooksList} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/admin" component={BookForm} />
						<Route path="/cart" component={Cart} />
					</Route>
				</Router>
			</Provider>
	)

render(
	Routes, document.getElementById('app')
	);

//  //-------------- CART ACTION ----------------

// //ADD TO CART
// store.dispatch(addToCart([{id:2}]))
