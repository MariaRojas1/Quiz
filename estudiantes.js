const express = require ('express')
const route = express.Router();
const pool = require ('../database')
route.get ('/listar', async(req, res) => {
    const usua =await pool.query('select * from estudiantes')
    res.render ('estudiantes/listar', { usua });

})