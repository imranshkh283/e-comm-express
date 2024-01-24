const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');

app.listen(config.port, () => {
    mongoose.connect(config.mongoose.url).then((r)=>{
        console.log(`Server is running on port ${config.port}`);
        console.log('Connected to MongoDB')
    });

});