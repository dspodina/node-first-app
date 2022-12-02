// import express from "express"
const {Pool, Client} = require ("pg")

const pool = new Pool ({
    user: "", 
    host: "127.0.0.1",
    database: "daria",
    password: null, 
    port: 5432
}) 
// pool.query(`CREATE TABLE users (
//     id     serial,
//     name    varchar(40),
//     PRIMARY KEY(id)
// );
// `, (error, result)=>{
//     console.log(error, result)
// })
// pool.query(`INSERT INTO users (name) VALUES
// ('Tampopo'),
// ('The Dinner Game');`, (error, result)=>{
//         console.log(error, result)
//     })
pool.query(`Select * from users`, (error, result)=>{
        console.log(result.rows)
    })
let users = ['Eva', 'Adam', 'Jhon', 'Tim', 'Elsa', 'Anna']
// for (let i = 0; i < users.length; i++) {
//  pool.query(`INSERT INTO users (name) VALUES
// ('${users[i]}');`, (error, result)=>{
//         console.log(error, result)
//     })
// }