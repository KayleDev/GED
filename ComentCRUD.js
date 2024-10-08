// Criado por: Lucas Leite Lima da Silva
// Esse código é responsavel por criar, alterar, remover e salvar comentários

// ESSA PARTE SERÁ EXCLUIDA POSTERIORMENTE, FEITO APENAS PARA DEBUG
sessionStorage.setItem("activeUser", "Lucas");

class Coment {
  constructor() {
    (this.content = this.setContent()),
      (this.sender = this.setUser()),
      (this.date = this.setDate()),
      (this.idNumber = this.setIdNumber());
  }

  setUser() {
    return sessionStorage.getItem("activeUser");
  }

  setIdNumber() {
    let comentStorage = JSON.parse(localStorage.getItem("coments"));
    let idNumber = 1;
    if (comentStorage)
      for (
        idNumber = 1;
        idNumber <= Object.keys(comentStorage).length;
        idNumber++
      );
    return idNumber;
  }

  setContent() {
    const inContent = document.querySelector("#comentInput");
    return inContent.value;
  }

  setDate() {
    const date = new Date();
    const datePtBr =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return datePtBr
  }
}

// CREATE
function createComent() {
  const coment = new Coment();
  saveComent(coment);
  createComentHTML(coment);
}
createComent();

function saveComent(coment) {
  let comentStorage = JSON.parse(localStorage.getItem("coments"));
  if (!comentStorage) comentStorage = {};
  comentStorage[coment.idNumber] = coment;
  localStorage.setItem("coments", JSON.stringify(comentStorage));
}

function createComentHTML(coment) {}

// UPDATE
function updateComentContent(idNumber) {}

// DELETE
function deleteComent(idNumber) {
  deleteComentFromStorage(idNumber);
  deleteComent(idNumber);
}

function deleteComentFromStorage() {
  const comentStorage = JSON.parse(localStorage.getItem("coments"));
  delete comentStorage[idNumber];
  localStorage.setItem("coments", JSON.stringify(comentStorage));
}

function deleteComentHTML() {}
