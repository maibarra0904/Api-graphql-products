import express from 'express';


const server = express();

//Routing
server.get('/', (req, res) => {
    
    res.json({msg: 'Hello'})

})


export default server