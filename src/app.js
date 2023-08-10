import express from "express";

const app = express();

app.use(express.json());

const livros = [
  { id: 1, titulo: "O Senhor dos Anéis" },
  { id: 2, titulo: "O Hobbit" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
  res.status(200).send(livros);
});

app.get("/livros/:id", (req, res) => {
  let { id } = req.params;

  let index = buscaLivro(id);

  if (index == -1) {
    return res.status(404).send(`Livro ${id} não encontrado`);
  }
  res.status(201).json(livros[index]);
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

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
