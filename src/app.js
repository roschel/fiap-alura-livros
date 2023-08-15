import express from "express";
import db from "./config/db.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro do mongo"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

routes(app);

app.get("/livros/:id", async (req, res) => {
  let { id } = req.params;

  let livro = await livros.findById(id);

  if (!livro) {
    return res.status(404).send(`Livro ${id} não encontrado`);
  }
  res.status(201).json(livro);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);

  console.log(livros);

  res.status(201).send("ok");
});

app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);

  livros[index].titulo = req.body.titulo;

  res.status(201).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
});

export default app;
