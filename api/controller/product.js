// import mysql from 'mysql';
import db from './../db';

export const getProducts = (req, res) => {
    let sql = 'SELECT * FROM products'
    db.query(sql, (err, response) => {
        if (err) throw err
        res.status(400);
        res.json(response)
    })
}

export const getItemProducts = (req, res) => {
	let sql =`SELECT * FROM products WHERE id=${req.params.id}`
    db.query(sql, (err, response) => {
        if(err) throw err
        res.json(response)
        })

export const getLengthProducts = (req , res) => {
    let sql = 'SELECT COUNT(id) FROM Products'
    db.query(sql, (err, response) => {
        if(err) throw err
        res.json(response);
    })
}
}
