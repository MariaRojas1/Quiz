const express = require ('express')
const route = express.Router();
const pool = require ('../database')
route.get ('/mostrar_docentes', async(req, res) => {
    const usua =await pool.query('select * from docentes')
    res.render ('docentes/listar', { usua });

})

route.get ('/update/:id_docente', async(req, res) => {
    const { id_docente } = req.params;
    const usua =await pool.query('select * from docentes where id_docente=?',[id_docente])
    res.render ('docentes/modificar',{usua});
})

route.post ('/update/:id_docente', async(req, res) => {
    const { id_docente } = req.params;
    const { nombre, edad } = req.body
    await pool.query("UPDATE docentes set nombre='" + [nombre] + "',edad='" + [edad] + "'WHERE id_docente='" + [id_docente] + "'");
    res.render ('docentes/mostrar_docentes',);
})

route.post ('listardocentes', async(req, res)=>{
    const {nombre_docente, edad, correo} = req.body
    const newDocente ={nombre_docente, edad, correo};
    await pool.query('insert into docentes set ?', [newDocente]);
    Console.log(req,body);
    res.send('docentes/mostrar_docentes');
})


module.exports = route;