const Category = require('./category.model');
const Item = require('./item.model');
const User = require('./user.model');

module.exports= {
    Category, //Short hand 
    Item: Item,
    User: User
}