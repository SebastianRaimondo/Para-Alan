const express = require("express");
const router = express.Router();

const aluCtrl = require("../controllers/alu.controller");

router.get("/", aluCtrl.getAlumumnos);

router.post("/", aluCtrl.createAlu);
router.get("/:id", aluCtrl.getAlu);
router.put("/:id", aluCtrl.editAlu);
router.delete("/:id", aluCtrl.deleteAlu);

module.exports = router;
