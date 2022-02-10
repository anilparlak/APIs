const router = require("express").Router();
const todoschemas = require("../models/TodoSchema");


// Post 
router.post("/save", async (req,res) =>{
    try{    
        const {title, description} = req.body;
        if(!title) {
            res.status(500).json({
                'description': 'Title is not empty',
                'code': 400
            })
        }

        const newTodo = new todoschemas({
            title: req.body.title,
            description: req.body.description
        })
        const todo = await newTodo.save().then((res)=>{ console.log(res)}).catch(err => console.log(err))
        res.status(200).json({
            newTodo
        })
    } catch(err){
        res.status(500).json({
            'description': err,
            'code': 500
        })
    }
})

//Update
router.put("/update/:id", async (req,res) =>{
   
        try{
            const {id} = req.params.id;
            if(!id){
                res.status(500).json({
                    'description': 'id is not defined',
                    'code': 400
                })
            }
           const updateTodo = await todoschemas.findByIdAndUpdate(
                req.params.id,
               {
                    $set: req.body
                }
                );
            res.status(200).json(updateTodo)
          
            
        }catch(err){
            res.status(500).json(err)
        }
})

//Delete All
router.delete("/delete/all", async(req,res) =>{

    try{
        const deleteAllTodo = await todoschemas.deleteMany();
        res.status(200).json(deleteAllTodo)
       
    }catch(err){
        res.status(500).json({
            'description': err,
            'code': 500
        })
    }
})
//Delete
router.delete("/delete/:id", async(req,res) =>{

    try{
        const deleteTodo = await todoschemas.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteTodo)
    }catch(err){
        res.status(500).json(err)
    }
})
//Get All
router.get("/lists", async(req,res) => {
    var todos;
    try{
        todos = await todoschemas.find(req.params);
        res.status(200).json(todos)
    }catch(err){
        res.status(500).json(err)
    }
})
//Get one list
router.get("/list/:id", async(req,res) => {
    var todos;

    try{
        todos = await todoschemas.findById(req.params.id);
        res.status(200).json(todos)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router