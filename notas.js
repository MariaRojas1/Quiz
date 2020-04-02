const express = require ('express')
const route = express.Router();
const pool = require ('../database')
route.get ('/consultar', async(req, res) => {
    const usua =await pool.query('select * from notas')
    res.render ('notas/consultar', { usua });

})

route.post ('listarnotas', async(req, res)=>{
    const {nota} = req.body
    const newNotas ={nota};
    await pool.query('insert into notas set ?', [newNotas]);
    Console.log(req,body);
    res.send('notas/mostrar_notas');

})