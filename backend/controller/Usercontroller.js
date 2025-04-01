import { getUsers, getUser, insertUser,deleteUser } from "../model/Usermodel.js";

// import { config } from 'dotenv'

const fetchUsers = async (req, res) => {
  res.json(await getUsers());
};

const fetchUser = async (req, res) => {
  console.log(req.params.id);
  res.json(await getUser(req.params.id));
  // res.send('Endpoint reached')
};

const insertUserDb = async (req, res) => {
  let { name, age, gender, userRole } = req.body;
  try {
    await insertUser(name, age, gender, userRole);  // ✅ Correctly passing arguments
    res.send("Data was inserted successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const deleteUserDb = async (req, res) => {
    let { id } = req.params;
    await deleteUser(id);
    res.send("User was deleted successfully");
  };
  
export { fetchUsers, fetchUser, insertUserDb,deleteUserDb  };
