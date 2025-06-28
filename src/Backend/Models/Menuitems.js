const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    restaurant_id: {type: mongoose.Schema.Types.ObjectId, ref: 'restaurant', required: true},
    name: {type: String,required: true},
    price: {type: Number, required: true},
    available: {type: Boolean, default: true}
});

const Menuitem = mongoose.model('Menuitems', menuItemSchema);

module.exports = Menuitem;