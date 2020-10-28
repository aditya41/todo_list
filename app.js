const express = require('express')
const { dirname } = require('path')
const app = express()

let todo = []

app.use('/', express.static(__dirname + '/static'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.post('/addtodo', (req, res) => {
    todo.push(
        req.body.task
    )
    res.send('done')
})
app.post('/delete', (req, res) => {
    let idx = req.body.i
        // console.log(req.body.task)
    if (req.body.task)
        idx = todo.indexOf(`${req.body.task}`)
        // console.log(idx)
    todo.splice(idx, 1)
    res.send("deleted")
})
app.get('/todo', (req, res) => {
        res.send(todo)
    })
    // app.get('/', (req, res) => {
    //     res.send('hello')
    // })

app.listen(4444, () => {
    console.log('started at 4444')
})