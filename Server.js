import cors from 'cors'
import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = express();

// Define que usaremos json como metodo de adicionar post
app.use(express.json());
app.use(cors())

//Porta do computador que vai rodar
app.listen(3000);

// Cria/adiciona usuarios
app.post("/usuarios", async (req, res) => {
	await prisma.User.create({
		data: {
			email: req.body.email,
			name: req.body.nome,
			agr: req.body.idade,
		},
	});
	res.status(201).json(req.body);
});

//pega os usuarios
app.get("/usuarios", async (req, res) => {
	let users = []
	if (req.query) {
		users = await prisma.user.findMany({
			where: {
				name: req.query.name,
				age: req.query.age,
				email: req.query.email
			},
		});
	} else {
		users = await prisma.user.findMany();
	}

	res.status(200).json(users);
});

// Edita varios usuarios
app.put("/usuarios/:id", async (req, res) => {
	await prisma.User.update({
		where: {
			id: req.params.id,
		},
		data: {
			email: req.body.email,
			name: req.body.nome,
			agr: req.body.idade,
		},
	});
	res.status(201).json(req.body);
});

// Deleta Usuarios
app.delete("/usuarios/:id", async (req, res) => {
	await prisma.User.delete({
		where: {
			id: req.params.id,
		},
	});
	res.status(200).json({ Message: "Usuario excluido com sucesso!" });
});

/* As rotas precisam de duas coisas:
    1) Tipo da rota, o metodo http que vai usar (get, post, delete ou put).
    2) Endereço - Como: www.lojadoseuzé.com/produtos; o "/produtos" é o endereço onde o metodo vai buscar as informações por exemplo.
*/
