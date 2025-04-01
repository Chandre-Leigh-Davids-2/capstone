import express from 'express'
import { fetchUsers, fetchUser, insertUserDb,deleteUserDb } from '../controller/Usercontroller.js'
import { fetchProducts, fetchProduct, insertProductDb,deleteProductDb  }  from '../controller/ProductsController.js'

const router = express.Router()

router.get('/getUsers', fetchUsers)
router.get('/getUser/:id', fetchUser)
router.post('/insertUser', insertUserDb)
router.post('/deleteUser', deleteUserDb)


router.get('/getProducts', fetchProducts)
router.get('/getProduct/:id', fetchProduct)
router.post('/insertProduct', insertProductDb)
router.post('/deleteProduct', deleteProductDb)



export {router}

// name, age, gender, userRole