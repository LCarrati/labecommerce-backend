"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Olá mundo!');
const database_1 = require("./database");
const types_1 = require("./types");
console.table(database_1.users);
console.table(database_1.products);
console.table(database_1.purchases);
console.log('///////////////////////////////////////////////');
console.table((0, database_1.createUser)("u003", "beltrano@email.com", "beltrano99"));
(0, database_1.getAllUsers)();
console.table((0, database_1.createProduct)("p004", "Monitor HD", 800, types_1.TCategory.ELECTRONICS));
(0, database_1.getAllProducts)();
console.table((0, database_1.getProductById)("p004"));
console.table((0, database_1.queryProductsByName)("monitor"));
console.table((0, database_1.createPurchase)("u003", "p004", 2, 1600));
console.table((0, database_1.getAllPurchasesFromUserId)("u003"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/ping', (req, res) => {
    res.status(200).send('pong');
});
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
//# sourceMappingURL=index.js.map