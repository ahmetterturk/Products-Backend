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

export const addProduct = async (req, res) => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    }

    const data = {
      title: "Flying Skate Board",
      description: "Just hop on and fly",
      price: 100,
    }

    const response = await axios.post('https://dummyjson.com/products/add', data, headers)
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

    const data = {
      title: "Flying Skate Board",
      description: "Just hop on and fly",
      price: 100,
    }

    const response = await axios.put(`https://dummyjson.com/products/${id}`, data, headers)
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