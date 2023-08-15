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

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
});

export default app;
