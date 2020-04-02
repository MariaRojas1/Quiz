const express = require ('express');
const route = express.Router();
const pool = require ('../database');
route.get ('/listar', async(req, res) => {
    const usua =await pool.query('select * from estudiantes')
    res.render ('estudiantes/listar', { usua });

})

route.post ('listarestudiantes', async(req, res)=>{
    const {nombre_estudiante, edad, correo} = req.body
    const newEstudiante ={nombre_estudiante, edad, correo};
    await pool.query('insert into estudiantes set ?', [newEstudiante]);
    Console.log(req,body);
    res.send('estudiantes/mostrar_estudiantes');

})