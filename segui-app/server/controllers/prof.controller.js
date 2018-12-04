const Prof = require("../models/profesor");
const ProfCtrl = {};

ProfCtrl.getProfesores = async (req, res, next) => {
  try {
    const profesores = await Prof.find();
    if (profesores) {
      res.ok(profesores);
    } else {
      res.notFound();
    }
  } catch (exception) {
    res.internalServerError();
  }
};

ProfCtrl.createProfesor = async (req, res, next) => {
  try {
    console.log(req);
    const profesor = new Prof({
      nombre: req.body.nombre,
      apellido: req.body.apellido
    });
    await profesor.save();
    res.created(profesor);
  } catch (exception) {
    res.internalServerError();
  }
};

ProfCtrl.getProfesor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const profesor = await Prof.findById(id);

    res.ok(profesor);
  } catch (exception) {
    res.internalServerError();
  }
};

ProfCtrl.editProfesor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Prof.updateOne(
      { _id: id },
      {
        $set: {
          nombre: req.body.nombre,
          apellido: req.body.apellido
        }
      }
    );
    res.noContent();
  } catch (exception) {
    res.internalServerError();
  }
};

ProfCtrl.deleteProfesor = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await Alu.deleteOne({ _id: id });
    res.noContent();
  } catch (error) {
    console.log(error);
    res.internalServerError();
  }
};

module.exports = ProfCtrl;
