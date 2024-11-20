//Setting up Express
import express from 'express';

const app = express();

// const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("Hello World")
});

app.get("/api/users", (req, res) => {
    res.send([
        {id: 1, username: "Moses Asuga",displayName: "Moses"},
        {id: 2, username: "Rayan Hassan",displayName: "Rayan"},
        {id: 3, username: "Grace Boke", displayName: "Grace"}
    ]);
});

app.get('/api/products', (req, res) =>{
    res.send([{}])
})

app.listen(3000, () =>{
    console.log("server running at localhost:3000");
});