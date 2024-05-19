const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { connectDB } = require('./src/db/config')
const path = require('path')
const authRoute = require('./src/routes/auth')
const imageRoute = require('./src/routes/images')
const userRoute = require('./src/routes/user')
dotenv.config()
const app = express()
const port = process.env.PORT

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.options('*', cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello From Gallery')
})
// 

app.use('/auth', authRoute)
app.use('/image',imageRoute )
app.use('/user',userRoute )
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDB()
})