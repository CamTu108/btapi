
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('CamTu')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})