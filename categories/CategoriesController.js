const express =  require("express");
const router = express.Router();//Cria rotas sem estar no seu arquivo principal
router.get("/categories",(req,res) =>{
    res.send("ROTA DE CATEGORIAS")
});
router.get("/admin/categories/new", (req,res)=>{
    res.render("admin/categories/new" );
});
module.exports = router;