// Importando o Express
import express from "express"

// Carregando na variável router o express.Router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router()

// ROTA DE CLIENTES
router.get("/perfil", (req, res) => {
    res.render("perfil");
});

// Exportando o objeto router
export default router;