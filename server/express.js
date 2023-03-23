const express = require('express');

const app = express();


const server =app.listen(4000,function(){
    const port = server.address().port
    
    console.log("App listening at http://localhost:",port)
})