const express = require ('express')
const route = express.Router();
const pool = require ('../database')
route.get ('/consultar', async(req, res) => {
    const usua =await pool.query('select * from asigna_materia_docente')
    res.render ('asignar_materias/consultar', { usua });

})