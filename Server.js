import express from "express";

const app = express();

//Porta do computador que vai rodar
app.listen(3000);

//pega os usuarios
app.get("/usuarios", (req, res) =>
	res.send("Ok, deu muito bom para primeira tentativa"),
);

// Cria/adiciona usuarios
app.post("/usuarios");

// Edita varios usuarios
app.put("/usuarios");

// Deleta Usuarios
app.delete("/usuarios");

/* As rotas precisam de duas coisas:
    1) Tipo da rota, o metodo http que vai usar (get, post, delete ou put).
    2) Endereço - Como: www.lojadoseuzé.com/produtos; o "/produtos" é o endereço onde o metodo vai buscar as informações por exemplo.
*/
