import express from "express";
const app = express();

import PerfilController from "./controllers/PerfilController.js"
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"

app.set('view engine','ejs');
app.use(express.static("public"));

app.use("/",PerfilController);
app.use("/",PedidosController);
app.use("/",ProdutosController);

app.get("/", (req, res) => {
    res.render("index");
});

const port = 8080;

app.listen(port, (error) => {
    if (error){
        console.log(`Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`);
    } else {
        console.log(`Servidor inciado com sucesso em: http://localhost:${port}`);
    }
});