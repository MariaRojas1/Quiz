const express = require ('express')
const route = express.Router();
const pool = require ('../database')
route.get ('/consultar', async(req, res) => {
    const usua =await pool.query('select * from periodo_academico')
    res.render ('periodo_academico/consultar', { usua });

})