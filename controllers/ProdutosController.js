// Importando o Express
import express from "express"

// Carregando na variável router o express.Router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router()

// ROTA DE CLIENTES
router.get("/produtos", (req, res) => {
    const produtos = [
        { foto: "chirimoia-fino-de-jete.png", produto: "Fino de Jete", preco: 50 },
        { foto: "chirimoia-mcpherson.png", produto: "McPherson", preco: 24 },
        { foto: "chirimoia-honeyhart.png", produto: "Honeyhart", preco: 30 },
        { foto: "chirimoia-pink-mammoth.jpg", produto: "Pink Mammoth", preco: 25 },
    ];
    const imagem = "/imgs/chirimoia-fino-de-jete.png"
    res.render("produtos", {
        produtos: produtos
    });
});

// Exportando o objeto router
export default router;