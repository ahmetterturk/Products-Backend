import express from 'express'
import mongoose from 'mongoose'
import axios from 'axios'

export const getProducts = async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products')
    const products = response.data
    const responseStatus = response.status

    res.status(responseStatus).json(products);
  } catch (error) {
    console.log("This is error")
  }
}

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const product = response.data;
    const responseStatus = response.status;

    res.status(responseStatus).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const addProduct = async (req, res) => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    }
    
    const response = await axios.post('https://dummyjson.com/products/add', req.body, headers)
    const product = response.data
    const responseStatus = response.status

    res.status(responseStatus).json(product);
  } catch (error) {
    console.log("This is error")
  }
}

export const editProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const userData = req.body.userData;

    if (userData.user.isAdmin === false && userData.user.permissions !== 'edit') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const newData = req.body.newData;

    const response = await axios.put(`https://dummyjson.com/products/${id}`, newData);

    const product = response.data;
    const responseStatus = response.status;

    res.status(responseStatus).json(product);
  } catch (error) {
    console.error("Error editing product:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// extra
export const searchProducts = async (req, res) => {
  try {
    const { q } = req.query;
    console.log('q', q);
    const response = await axios.get(`https://dummyjson.com/products/search?q=${q}`);
    const searchResults = response.data;

    console.log('searchResults', searchResults);

    res.json(searchResults);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
