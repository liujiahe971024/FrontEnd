import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: String, required: true},
    stock: {type: String, required: true},
    image: {type: String}
}, {collection: 'products'});

export default mongoose.model('Product', ProductSchema);
