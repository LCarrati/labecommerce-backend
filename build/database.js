"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
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
];
exports.products = [
    {
        id: 'prod001',
        name: 'Mouse',
        price: 10,
        category: types_1.TCategory.MOUSE
    },
    {
        id: 'prod002',
        name: 'Teclado',
        price: 20,
        category: types_1.TCategory.TECLADOS
    },
];
exports.purchases = [
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
];
function createUser(id, email, password) {
    let userToAdd = {
        id: id,
        email: email,
        password: password
    };
    exports.users.push(userToAdd);
    return "Cadastro realizado com sucesso";
}
exports.createUser = createUser;
function getAllUsers() {
    console.table(exports.users);
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    exports.products.push({
        id: id,
        name: name,
        price: price,
        category: category
    });
    return "Produto cadastrado com sucesso";
}
exports.createProduct = createProduct;
function getAllProducts() {
    console.table(exports.products);
}
exports.getAllProducts = getAllProducts;
function getProductById(id) {
    const result = exports.products.filter(product => product.id === id);
    return result;
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    const result = exports.products.filter(product => product.name.toLowerCase().includes(q.toLowerCase()));
    return result;
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    exports.purchases.push({
        userId: userId,
        productId: productId,
        quantity: quantity,
        totalPrice: totalPrice
    });
    return "Compra realizada com sucesso";
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(id) {
    const result = exports.purchases.filter(user => user.userId === id);
    return result;
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map