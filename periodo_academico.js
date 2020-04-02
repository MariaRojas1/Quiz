const express = require ('express')
const route = express.Router();
const pool = require ('../database')
route.get ('/consultar', async(req, res) => {
    const usua =await pool.query('select * from periodo_academico')
    res.render ('periodo_academico/consultar', { usua });

})

route.post ('listarperiodo_academico', async(req, res)=>{
    const {periodo} = req.body
    const newPeriodo_academico ={periodo};
    await pool.query('insert into periodo academico set ?', [newPeriodo_academico]);
    Console.log(req,body);
    res.send('periodo_academico/mostrar_periodo_academico');

})