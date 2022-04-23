const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/autores_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log('We are connecting with database'))
.catch((err)=>console.log(err));