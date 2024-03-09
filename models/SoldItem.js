import mongoose from 'mongoose';

const soldItemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discountPercentage: {
    type: Number
  },
  rating: {
    type: Number
  },
  stock: {
    type: Number
  },
  brand: {
    type: String
  },
  category: {
    type: String
  },
  thumbnail: {
    type: String
  },
  images: {
    type: [String]
  }
});

const SoldItem = mongoose.model('SoldItem', soldItemSchema);

export default SoldItem;
