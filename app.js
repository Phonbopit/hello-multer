const express = require('express')
const multer = require('multer')

const app = express()

const upload = multer({ dest: 'uploads' })

app.get('/', (rea, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/upload', upload.single('photo'), (req, res) => {
  res.send(req.file)
})

app.listen(9999, () => console.log('Running on port 9999'))
