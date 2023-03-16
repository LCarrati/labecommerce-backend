export enum TCategory {
    MOUSE = "Mouses",
    TECLADOS = "Teclados",
    ELECTRONICS = "Eletrônicos"
}

export type TUser = {
    id :string,
    email :string,
    password :string
}

export type TProduct = {
    id :string,
    name :string,
    price :number,
    category : TCategory
}


export type TPurchase = {
    userId :string,
    productId :string,
    quantity :number,
    totalPrice :number
}

