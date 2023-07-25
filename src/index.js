const express = require("express");
const cors = require("cors");

const app = express();

//Middleware JSON
app.use(express.json());

//Middleware JSON
app.use(cors());

// Rotas
app.get("/retorno", function(request, response){
    response.status(200).json({retorno: "Confirmado"});
});

app.listen(3000, function(){
    console.log("Iniciado Porta 3000");

});