const pool = require('../db');

const createUser = async (name) => {
    const result = await pool.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [name]);
    return result.rows[0];
};

const getUsers = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

const deleteUser = async (id) => {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
};

module.exports = { createUser, getUsers, deleteUser };
