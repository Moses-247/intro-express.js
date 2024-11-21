//Setting up Express
import express from 'express';

const app = express();

const mockUsers = [
    {id: 1, username: "Moses Asuga",displayName: "Moses"},
    {id: 2, username: "Rayan Hassan",displayName: "Rayan"},
    {id: 3, username: "Grace Boke", displayName: "Grace"}
]

// const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("Hello World")
});

app.get("/api/users", (req, res) => {
    res.send(mockUsers);
});

app.get("/api/users/:id ", (req, res) => {
    console.log(req.params);
    const parsedId = parsedInt(req.params.id);
    console.log(parsedId);
    if(isNaN(parsedId)) return res.status(400).send({msg:"Bad request. Invalid ID"});
});

app.get('/api/products', (req, res) =>{
    res.send([{id: 123, name: "Chicken Pasta", price: 1250 }]);
});

app.listen(3000, () =>{
    console.log("server running at localhost:3000");
});