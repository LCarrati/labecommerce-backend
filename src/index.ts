console.log('Olá mundo!')

import { users, products, purchases, createUser, getAllUsers, createProduct, getAllProducts, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database"
import { TCategory, TProduct, TPurchase, TUser } from "./types"

console.table(users)
console.table(products)
console.table(purchases)

console.log('///////////////////////////////////////////////')

console.table(createUser("u003", "beltrano@email.com", "beltrano99"))
getAllUsers()
console.table(createProduct("p004", "Monitor HD", 800, TCategory.ELECTRONICS))
getAllProducts()
console.table(getProductById("p004"))


console.table(queryProductsByName("monitor"))
console.table(createPurchase("u003", "p004", 2, 1600))
console.table(getAllPurchasesFromUserId("u003"))


import express, { Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());


app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong')
})

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})

app.get('/products', (req: Request, res: Response) => {
    res.status(200).send(products)
})

app.get('/products/search', (req: Request, res: Response) => {
    const q = req.query.q as string
    const result = products.filter(product => product.name.toLowerCase().includes(q.toLowerCase()))
    res.status(200).send(result)
})

app.post('/users', (req: Request, res: Response) => {
    const {id, email, password}: TUser = req.body
    const newUser: TUser = {
        id,
        email,
        password
    }
    users.push(newUser)
    res.status(201).send('Usuário cadastrado com sucesso!')
})

app.post('/products', (req: Request, res: Response) => {
    const {id, name, price, category}: TProduct = req.body
    const newProduct: TProduct = {
        id,
        name,
        price,
        category
    }
    products.push(newProduct)
    res.status(201).send('Produto cadastrado com sucesso!')
})

app.post('/purchases', (req: Request, res: Response) => {
    const {userId, productId, quantity, totalPrice}: TPurchase = req.body
    const newPurchase: TPurchase = {
        userId, 
        productId, 
        quantity, 
        totalPrice
    }
    purchases.push(newPurchase)
    res.status(201).send('Compra realizada com sucesso!')
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});