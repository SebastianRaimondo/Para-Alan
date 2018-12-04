const axios = require("axios");

function getAlu(id) {
  return axios.get("http://localhost:3001/api/alumnos/" + id);
}

function editAlu(id, aluInfo, cb) {
  axios
    .put("http://localhost:3001/api/alumnos/" + id, aluInfo)
    .then(() => cb());
}

function createAlu(alu, cb) {
  axios.post("http://localhost:3001/api/alumnos/", alu).then(() => cb());
}

function deleteAlu(id, fn) {
  axios.delete("http://localhost:3001/api/alumnos/" + id).then(() => fn());
}

function getAlumumnos() {
  return axios.get("http://localhost:3001/api/alumnos");
}
export default { getAlumumnos, deleteAlu, createAlu, editAlu, getAlu };
