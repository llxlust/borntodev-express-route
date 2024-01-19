import express from "express"
import * as dotenv from 'dotenv'
import bodyParser  from "body-parser"
dotenv.config()



if(!process.env.PORT){
    process.exit(1)
}

const app = express()

const port = parseInt(process.env.PORT)

app.use(bodyParser.json())

let products = [
    {
        id: 1,
        name: "sneakers",
        price: 3100
    },
    {
        id: 2,
        name: "jacket",
        price: 5000
    }
]

app.get('/products',(req,res)=>{
    res.json(products)
})


app.post('/products',(req,res)=>{
    products.push(req.body)
    res.json(products)
})

app.put('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const updateProduct = products.map((product)=>{
        if(product.id === id){
            product = req.body
            return product
        }
        return product
    })
    res.json(updateProduct)
})

app.delete('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const useObject = products.filter((item)=>item.id !== id)
    res.json(useObject)
})

app.listen(port,()=>console.log(`Server is running on port ${port}`))