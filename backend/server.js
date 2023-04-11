require('dotenv').config()
require('./config/database').connect();
const http=require('http');
const app=require('./app');


const PORT = process.env.PORT || 3000;
console.log(PORT)
const httpServer=http.createServer(app);

httpServer.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})