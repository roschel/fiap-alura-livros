import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static listarAutorPorId = (req, res) => {
    const id = req.params.id;
    autores.findById(id, (err, autores) => {
      if (err || !autores) {
        res.status(404).send({ message: `Autor ${id} não encontrado` });
      } else {
        res.status(200).send(autores.toJSON());
      }
    });
  };

  static cadastrarAutor = (req, res) => {
    let Autor = new autores(req.body);
    Autor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar Autor` });
      } else {
        res.status(201).send(Autor.toJSON());
      }
    });
  };

  static atualizarAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao atualizar Autor` });
      }
    });
  };

  static excluirAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor excluido com sucesso" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao excluir Autor` });
      }
    });
  };
}

export default AutorController;
