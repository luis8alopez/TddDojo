const server = require('./app/app');
const port = process.env.PORT || 4000;

server.listen(port,()=>{
    console.log('App running on port: ',port);    
});