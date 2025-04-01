import {getProducts, getProduct, insertProduct,deleteProduct}from "../model/ProductModal.js";

// import { config } from 'dotenv'

const fetchProducts = async (req, res) => {
  res.json(await getProducts());
};

const fetchProduct = async (req, res) => {
  console.log(req.params.id);
  res.json(await getProduct(req.params.id));
};

const insertProductDb = async (req, res) => {
  let { name, age, gender, userRole } = req.body;
  try {
    await insertProduct(name, age, gender, userRole);  
    res.send("Data was inserted successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const deleteProductDb = async (req, res) => {
    let { id } = req.params;
    await deleteProduct(id);
    res.send("User was deleted successfully");
  };
  
export { fetchProducts, fetchProduct, insertProductDb,deleteProductDb };
