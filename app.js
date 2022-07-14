const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads')
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  },
})

const upload = multer({ storage, limits: { fileSize: 1024 * 1024 } })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/upload', upload.single('photo'), (req, res) => {
  res.send(req.file)
})

app.post('/images', upload.array('images'), (req, res) => {
  res.send(req.files)
})

app.listen(9999, () => console.log('Running on port 9999'))
