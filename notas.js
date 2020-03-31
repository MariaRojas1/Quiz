const express = require ('express')
const route = express.Router();
const pool = require ('../database')
route.get ('/consultar', async(req, res) => {
    const usua =await pool.query('select * from notas')
    res.render ('notas/consultar', { usua });

})