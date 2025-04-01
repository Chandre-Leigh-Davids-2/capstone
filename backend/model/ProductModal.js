import {createPool} from 'mysql2/promise'
import { config } from 'dotenv';
config()


const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});


const getProducts = async () => {
    let [data] = await pool.query('SELECT * FROM products')
    return data
}


const getProduct = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM products WHERE product_id = ?', [id])
    return data
}


const insertProduct = async (name, age, gender, userRole) => {
    try {
        const [data] = await pool.query(`
            INSERT INTO users (username, userAge, userGender, userRole)
            VALUES (?, ?, ?, ?)
        `, [name, age, gender, userRole]);

        return 'User inserted successfully';
    } catch (err) {
        console.error("Error inserting user:", err.message);
        throw new Error("Failed to insert user");
    }
};


const deleteProduct = async (id) => {
    let [data] = await pool.query(`
        DELETE FROM users
        WHERE userID = ?
        `, [id]
    )
    return 'User deleted'
}

// console.log(await getPeerDb());


export {getProducts, getProduct, insertProduct,deleteProduct}


