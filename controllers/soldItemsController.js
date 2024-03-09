import SoldItem from '../models/SoldItem.js';

export const createSoldItem = async (req, res) => {
  try {
    const {
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    } = req.body;

    const newSoldItem = new SoldItem({
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    });
    
    await newSoldItem.save();

    res.status(201).json({ message: 'Sold item created successfully', soldItem: newSoldItem });
  } catch (error) {
    console.error('Error creating sold item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
