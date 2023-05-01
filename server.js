const express = require('express');
const app = express();
const routes = require('./routers/routers');
const notFound = require("./middleware/not_found");

app.use(express.json());
app.use("/api/database/v1",routes);
app.use(notFound);

const port = 5000;

app.listen(port,()=>{
    console.log("Listening");
})

