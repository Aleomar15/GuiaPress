const express =  require("express");
const router = express.Router();//Cria rotas sem estar no seu arquivo principal
router.get("/articles",(req,res) =>{
    res.send("ROTA DE ARTIGOA")
});
router.get("/admin/articles/new", (req,res)=>{
    res.send("ROTA PARA CRIAR UM NOVO ARTIGO!" )
});
module.exports = router;