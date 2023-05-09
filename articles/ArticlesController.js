const express =  require("express");
const router = express.Router();//Cria rotas sem estar no seu arquivo principal
router.get("/articles",(req,res) =>{
    res.send("ROTA DE ARTIGOA")
});
router.get("/admin/articles/new", (req,res)=>{
    res.render("admin/articles/new")
});
module.exports = router;