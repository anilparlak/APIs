const express = require("express");
const app = express();
const todoRoute = require("./routes/Todos")
const dotenv = require("dotenv").config();
var cors = require('cors')
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/',function(req,res){
    //res.sendFile(path.join(__dirname+'/index.html'));
    res.send(`
        <div style="display:flex; flex-direction:column;  align-items:center; height:100vh; width:100%;" >
            <h3> This API is created by Anıl Parlak for <em>Todo App</em> </h3>
            <span> <b>for get all todos:</b> <em> https://infinite-waters-90313.herokuapp.com/api/lists </em> </span>
            <span> <b>for get one of todos:</b>  <em>https://infinite-waters-90313.herokuapp.com/api/list/:id </em></span>
            <span> <b>for post todo:</b>  <em>https://infinite-waters-90313.herokuapp.com/api/save </em></span>
            <span> <b>for delete all todos:</b>  <em>https://infinite-waters-90313.herokuapp.com/api/delete/all </em></span>
            <span> <b>for delete one of todos:</b>  <em>https://infinite-waters-90313.herokuapp.com/api/delete/:id </em></span>
            <span> <b>for put one of todos:</b>  <em>https://infinite-waters-90313.herokuapp.com/api//update/:id </em> </span>
        </div>
    `)
  });

app.use("/api", todoRoute);


app.listen(PORT, ()=>{
    console.log(`backend is runnig on port: ${PORT}`)
})