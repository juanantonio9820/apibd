const express = require('express');
const router = express.Router();
const mysqlconnection = require('../database');


router.get('/', (req, res) => {
    mysqlconnection.query('SELECT * FROM registros',(err, rows, fields) => {
        if(!err) {
            res.json(rows);
        }else{
            console.log(err);
        }

    });

    router.get('/:correo', (req, res) => {
        const { correo } = req.params;
        mysqlconnection.query('SELECT * FROM registros WHERE correo = ? ', [correo], (err, 
            rows, fields) => {
            if(!err) {
                res.json(rows[0]);
            }else{
                console.log(err);
            }
        });
     
      
    });
    router.post('/', (req, res) =>{
        const { correo, nombre, contraseña, confirmarcontraseña } = req.body;
        console.log(req.body)
        const query = `

CALL registroAddOrEdit (?, ?, ?, ?);

        `;
mysqlconnection.query(query, [correo, nombre, contraseña, confirmarcontraseña], (err, rows, fields) => {
    if(!err) {
        res.json({status:'registro guardado'});
    }else{
        console.log(err);
    }

});
    });
});

module.exports = router;