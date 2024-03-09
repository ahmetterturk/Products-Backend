import express from 'express'
import mongoose from 'mongoose'

export const getProducts = async (req, res) => {
  try {
    res.send('This is get products')
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