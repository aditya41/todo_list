const express = require('express')
const { dirname } = require('path')
const app = express()

let todo = []

app.use('/', express.static(__dirname + '/static'))

app.get('/addtodo', (req, res) => {
    todo.push(req.query.task)
    res.send('done')
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