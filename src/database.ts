import { TProduct, TPurchase, TUser, TCategory } from "./types";

export const users :Array<TUser>= [
    {
        id: 'admin',
        email: 'admin@admin.com',
        password: 'admin123'
    },
    {
        id: 'superadmin',
        email: 'superadmin@admin.com',
        password: 'superadmin123'
    },
]

export const products :Array<TProduct>= [
    {
        id: 'prod001',
        name: 'Mouse',
        price: 10,
        category: TCategory.MOUSE
    },
    {
        id: 'prod002',
        name: 'Teclado',
        price: 20,
        category: TCategory.TECLADOS
    },
]

export const purchases :Array<TPurchase> = [
    {
        userId: 'admin',
        productId: 'prod002',
        quantity: 2,
        totalPrice: 40
    },
    {
        userId: 'superadmin',
        productId: 'prod002',
        quantity: 5,
        totalPrice: 100
    },
]

export function createUser(id: string, email: string, password: string): string {
    let userToAdd = {
        id: id,
        email: email,
        password: password
    }
    users.push(userToAdd)
    return "Cadastro realizado com sucesso"
}

export function getAllUsers(): void  {
    console.table(users)
}

export function createProduct(id: string, name: string, price: number, category: TCategory): string {
    products.push({
        id: id,
        name: name,
        price: price,
        category: category
    })
    return "Produto cadastrado com sucesso"
}

export function getAllProducts() :void {
    console.table(products)
}

export function getProductById(id: string)  :Array<TProduct> | undefined {
    const result = products.filter(product => product.id === id)
    return result
}

export function queryProductsByName(q: string) :Array<TProduct> | undefined {
    const result = products.filter(product => product.name.toLowerCase().includes(q.toLowerCase()))
    return result
}

export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number) :string {
    purchases.push({
        userId: userId,
        productId: productId,
        quantity: quantity,
        totalPrice: totalPrice
    })
    return "Compra realizada com sucesso"
}

export function getAllPurchasesFromUserId(id: string) :Array<TPurchase> {
    const result = purchases.filter(user => user.userId === id)
    return result
}
