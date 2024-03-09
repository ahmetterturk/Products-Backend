import express from 'express'
import mongoose from 'mongoose'
import axios from 'axios'

export const getProducts = async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products')
    const products = response.data
    const responseStatus = response.status

    res.status(200).json(products);
  } catch (error) {
    console.log("This is error")
  }
}

export const addProduct = async (req, res) => {
  try {
    res.send('This is add products')
  } catch (error) {
    console.log("This is error")
  }
}

export const editProduct = async (req, res) => {
  try {
    res.send('This is edit products')
  } catch (error) {
    console.log("This is error")
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