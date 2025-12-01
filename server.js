import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config()

const app =  express()

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("DB connected"))
.catch(()=> console.log(err));

const Todo = mongoose.mode1("Todo", new mongoose.Schema({
    text: String
}));

app.get('/todos', async(requestAnimationFrame, res)=>{
    res.json(await Todo.find());
})

app.post('/todos', async(req, res)=>{
    const todo = await todo.create({
        text : req.bosy.text
    })

    res.json(todo)
})

app.delete("/todos/id", async( req, res)=>{
    await Todo.findByIdAndDelete(req.params.id)
    res.json({
        message: "deleted"
    })
})

app.listen(process.env.PORT, () => console.log("sever is running on port", process.env.PORT))