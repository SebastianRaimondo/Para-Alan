const express = require("express");
const router = express.Router();

const ProfCtrl = require("../controllers/prof.controller");

router.get("/", ProfCtrl.getProfesores);
router.post("/", ProfCtrl.createProfesor);
router.get("/:id", ProfCtrl.getProfesor);
router.put("/:id", ProfCtrl.editProfesor);
router.delete("/:id", ProfCtrl.deleteProfesor);

module.exports = router;
