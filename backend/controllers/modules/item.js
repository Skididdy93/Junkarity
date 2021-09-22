const { Item } = require('../../Models');

const itemModule = {
    createFromData: async (data) => {
        const post = new Item({
            name: data.name,
            description: data.description,
            price: data.price,
            //Look up category by name if category exists pull objectID else create throw 
            //if(data.catego)
        });
        await post.save();
        // could do other stuff
        return post;
    }
}

module.exports = {
    itemModule,
}