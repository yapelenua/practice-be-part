const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

app.get('/hello', (req, res) => {
  res.json({ message: 'hello' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})