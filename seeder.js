const mongoose = require('mongoose');
require('dotenv').config();
const items = require('./frontend/src/products.js');
const {Item, Order} = require('./Models');
const connectDB = require('./config/db.js');

connectDB();

const importData = async () => {
    try{
        const sampleItems = items.map((item) => {
            return{...item}
        })
        await Item.insertMany(sampleItems);
        console.log('Data Imported');
        process.exit();
    }catch(error){
        console.error(`${error}`);
        process.exit(1);
    }
} 

const deleteData = async () => {
    try{
        await Order.deleteMany();
        await Item.deleteMany();
        console.log('Data Deleted');
        process.exit();
    }catch(error){
        console.error(`${error}`);
        process.exit(1);
    }
} 

if(process.argv[2] === '-d'){
    deleteData();
}else {
    importData();
}


