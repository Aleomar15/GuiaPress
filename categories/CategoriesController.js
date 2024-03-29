const express =  require("express");
const router = express.Router();//Cria rotas sem estar no seu arquivo principal
const Category = require("./Category");
const slugify = require("slugify");
const adminAuth = require("../middlewares/adminAuth");

router.get("/admin/categories",adminAuth, (req,res)=>{

    Category.findAll().then(categories =>{
        res.render("admin/categories/index", {categories: categories});
    });
    
});

router.get("/admin/categories/new",adminAuth,(req,res)=>{
    res.render("admin/categories/new" );
});

router.post("/categories/save",adminAuth,(req,res)=>{
    var title = req.body.title;
    if(title != undefined){
        Category.create({//irá salvar os dados no bd
            title: title,
            slug: slugify(title)
        }).then(()=>{
            res.redirect("/admin/categories");
        });
    }else{
        res.redirect("/admin/categories/new");
    }
});

router.post("/categories/delete",adminAuth, (req, res)=>{
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){//verifica se o id é numero
            Category.destroy({//irá deletar a categoria pelo id
                where:{
                    id: id
                }
            }).then(()=>{
                res.redirect("/admin/categories");
            });
        }else{//se não for um número
            res.redirect("/admin/categories");
        }
    }else{// se  for nulo
        res.redirect("/admin/categories");
    }
});

router.get("/admin/categories/edit/:id",adminAuth,(req,res)=>{
    var id = req.params.id;//passa o paramentro por id, maneira mais fácil
    if(isNaN(id)){
        res.redirect("/admin/categories");
    }
    Category.findByPk(id).then(category=>{
        if(category != undefined){
           res.render("admin/categories/edit",{category: category}); 
        }else{
            res.redirect("/admin/categories");
        }
    }).catch(erro => {
        res.redirect("/admin/categories");
    })
});

router.post("/categories/update",adminAuth, (req,res)=>{
    var id = req.body.id;
    var title =  req.body.title;
    Category.update({title:title, slug: slugify(title)},{//atualizando um dado
        where:{
            id:id
        }
    }).then(()=>{
        res.redirect("/admin/categories");
    })
});

module.exports = router;