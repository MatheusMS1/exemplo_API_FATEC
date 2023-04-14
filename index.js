const express = require ('express')
import express from express
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`)
})