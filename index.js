import express from "express";
import cors from "cors"
import fs from "fs"

const PORT = process.env.PORT || 8000

const app = express()

app.listen(PORT, () => {
    console.log('Server works');
})

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))

const products = JSON.parse(fs.readFileSync('./data/products.json'))
app.get('/data/products', (req, res) => {
    res.json(products)

})