const {createStore, combineReducers, applyMiddleware} = require('redux');
const thunk = require('redux-thunk');
const {composeWithDevTools} = require('redux-devtools-extension');
const {itemListReducer} = require('./reducers/itemReducers');

const reducer= combineReducers({
    itemList: itemListReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk.default)));

module.exports = store;