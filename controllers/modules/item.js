const itemModule = {
    createFromData: async (data) => {
        const post = new Item({
            name: data.name,
            description: data.description,
            price: data.price, 
        });
        await post.save();
        // could do other stuff
        return post;
    }
}

module.exports = {
    itemModule,
}