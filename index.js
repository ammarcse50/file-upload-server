const express = require('express')
const multer  = require('multer')
 const cors = require('cors');
 const path = require('path');
  const app= express()
  app.use(cors())
  app.use(express.json())
  const port= process.env.PORT ||5000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })


app.post('/upload', upload.single('file'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })



  app.listen(port,()=>{
    console.log('server is running')
  })