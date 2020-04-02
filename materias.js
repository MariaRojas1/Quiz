const express = require ('express')
const route = express.Router();
const pool = require ('../database')
route.get ('/listar', async(req, res) => {
    const usua =await pool.query('select * from materia')
    res.render ('materias/listar', { usua });

})

route.post ('listarmaterias', async(req, res)=>{
    const {materia} = req.body
    const newMateria ={materia};
    await pool.query('insert into materias set ?', [newMateria]);
    Console.log(req,body);
    res.send('materia/mostrar_materia');

})
