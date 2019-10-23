const Alu = require("../models/alumno");
const aluCtrl = {};

aluCtrl.getAlumumnos = async (req, res, next) => {
  try {
    const alumnos = await Alu.find();

    if (alumnos) {
      res.ok(alumnos);
    } else {
      res.notFound();
    }
  } catch (exception) {
    res.internalServerError();
  }
};

//aluCtrl.getAlumumnos = async (req, res, next) => {
//try {
// let ids = ["5d7bc555d223470140a8cc67", "5d7bc52cd223470140a8cc66"];
//let ids = req.params.ids;
//const alumnos = await Alu.find()
//.where("_id")
//.in(ids)
//.exec();
//if (alumnos) {
// res.ok(alumnos);
//} else {
// res.notFound();
// }
//} catch (exception) {
// res.internalServerError();
// }
//};

aluCtrl.createAlu = async (req, res, next) => {
  try {
    console.log(req);
    const alumno = new Alu({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      nLegajo: req.body.nLegajo,
      email: req.body.email,
      userGit: req.body.userGit
    });
    await alumno.save();
    res.created(alumno);
  } catch (exception) {
    res.internalServerError();
  }
};

aluCtrl.getAlu = async (req, res, next) => {
  try {
    const { id } = req.params;
    const alumno = await Alu.findById(id);

    res.ok(alumno);
  } catch (exception) {
    res.internalServerError();
  }
};

aluCtrl.editAlu = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Alu.updateOne(
      { _id: id },
      {
        $set: {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          nLegajo: req.body.nLegajo,
          email: req.body.email,
          userGit: req.body.userGit,
          estaEnEstosCursos: req.body.estaEnEstosCursos
        }
      }
    );
    res.noContent();
  } catch (exception) {
    res.internalServerError();
  }
};

aluCtrl.deleteAlu = async (req, res, next) => {
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

module.exports = aluCtrl;
