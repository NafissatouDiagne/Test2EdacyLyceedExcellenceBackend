require("dotenv").config()

const mongoose= require('mongoose');
mongoose.connect(process.env.DATABASE,
{ useNewUrlParser: true,
    useUnifiedTopology: true });
    
mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection ERROR: " + err.message);
  });
  
  mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!");
  });
require("./models/Student");
require("./models/Classe");
const app = require('./app')

const server = app.listen(8000,()=>{
    console.log('Server is listening in port 8000');
});
