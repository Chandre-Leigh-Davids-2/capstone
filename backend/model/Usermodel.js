// import {pool} from '../config/config.js'
import {createPool} from 'mysql2/promise'
import { config } from 'dotenv';
config()


const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});


const getUsers = async () => {
    let [data] = await pool.query('SELECT * FROM users')
    return data
}


const getUser = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM users WHERE userID = ?', [id])
    return data
}


const insertUser = async (name, age, gender, userRole) => {
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


const deleteUser = async (id) => {
    let [data] = await pool.query(`
        DELETE FROM users
        WHERE userID = ?
        `, [id]
    )
    return 'User deleted'
}

// console.log(await getPeerDb());


export {getUsers, getUser, insertUser,deleteUser}


