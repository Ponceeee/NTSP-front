const Item = require('../models/Item');

const itemService = {
    getAllItems: async () => {
        return await Item.find();
    },

    getItemById: async (item_id) => {
        return await Item.findOne({ item_id });
    },

    createItem: async (itemData) => {
        const item = new Item(itemData);
        return await item.save();
    },

    updateItem: async (item_id, itemData) => {
        return await Item.findOneAndUpdate(
            { item_id },
            itemData,
            { new: true }
        );
    },

    deleteItem: async (item_id) => {
        return await Item.findOneAndDelete({ item_id });
    }
};

module.exports = itemService;