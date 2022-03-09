const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Company', (req, res) =>{
    res.send('my Company')
})

app.get('/Company-json', (req, res) =>{
    res.send({
        name: "allen",
        country: "nepal",
        age: 24,
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})