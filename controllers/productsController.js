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

    const headers = {
      'Content-Type': 'application/json'
    }

    const response = await axios.put(`https://dummyjson.com/products/${id}`, req.body, headers)
    const product = response.data
    const responseStatus = response.status
    
    res.status(responseStatus).json(product);
  } catch (error) {
    console.log("This is error", error)
  }
}

// extra
export const searchProducts = async (req, res) => {
  try {
    res.send('This is get Search')
  } catch (error) {
    console.log("This is error")
  }
}