const express =  require("express");
const router = express.Router();//Cria rotas sem estar no seu arquivo principal
const Category = require("./Category");
const slugify = require("slugify");
router.get("/admin/categories/new", (req,res)=>{
    res.render("admin/categories/new" );
});
router.post("/categories/save",(req,res)=>{
    var title = req.body.title;
    if(title != undefined){
        Category.create({//irá salvar os dados no bd
            title: title,
            slug: slugify(title)
        }).then(()=>{
            res.redirect("/");
        });
    }else{
        res.redirect("/admin/categories/new");
    }
});
router.get("/admin/categories", (req,res)=>{

    Category.findAll().then(categories =>{
        res.render("admin/categories/index", {categories: categories});
    });
    
});
module.exports = router;