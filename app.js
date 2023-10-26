const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {getAllParts,getSinglePart,addPart,editPart,deletePart,findPart} = require('./controllers/partController')
require('dotenv').config()

const app = express();

app.use(express.json())

app.get('/',(req,res) => {
    res.send('Hello')
})

app.get('/parts',getAllParts);
app.get('/parts/:id',getSinglePart);
app.post('/parts',addPart);
app.put('/parts/:id',editPart);
app.delete('/parts/:id',deletePart);
app.post('/parts/find',findPart)

mongoose.connect('mongodb+srv://'+ process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@cluster0.9qiie4f.mongodb.net/'+ process.env.DB_NAME).then(() => {
    console.log('Connected to DB')
    app.listen(process.env.PORT,() => {
        console.log('Server running on PORT ' + process.env.PORT);
    })
}).catch((error) => {console.log(error)})

