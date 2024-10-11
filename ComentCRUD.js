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
      idNumber = Number(Object.keys(comentStorage)[Object.keys(comentStorage).length - 1]) + 1;
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
    return datePtBr;
  }
}

// CREATE
function createComent() {
  const coment = new Coment();
  saveComent(coment);
  createComentHTML(coment);
}

function saveComent(coment) {
  let comentStorage = JSON.parse(localStorage.getItem("coments"));
  if (!comentStorage) comentStorage = {};
  comentStorage[coment.idNumber] = coment;
  delete coment.idNumber;
  localStorage.setItem("coments", JSON.stringify(comentStorage));
}

function createComentHTML(coment) {
  let comentStorage = JSON.parse(localStorage.getItem("coments"));
  let idNumber = 1;
  if (comentStorage)
    idNumber = Number(Object.keys(comentStorage)[Object.keys(comentStorage).length - 1]);

  let main = document.querySelector("main");

  let commentMain = document.createElement("div");
  commentMain.classList.add("comment");
  commentMain.id = "comment_" + idNumber;
  main.appendChild(commentMain);

  let commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");
  commentMain.appendChild(commentHeader);

  let headerUser = document.createElement("div");
  headerUser.classList.add("comment-header-user");
  commentHeader.appendChild(headerUser);

  let userImg = document.createElement("img");
  headerUser.appendChild(userImg);

  let userName = document.createElement("p");
  userName.textContent = coment.sender;
  headerUser.appendChild(userName);

  let commentInfo = document.createElement("div");
  commentInfo.classList.add("comment-header-info");
  commentHeader.appendChild(commentInfo);

  let infoDate = document.createElement("p");
  infoDate.textContent = coment.date;
  commentInfo.appendChild(infoDate);

  let commentContent = document.createElement("input");
  commentContent.classList.add("comment-content");
  commentContent.setAttribute("type", "text");
  commentContent.setAttribute("value", coment.content);
  commentContent.disabled = true;
  commentMain.appendChild(commentContent);

  let commentOptions = document.createElement("div");
  commentOptions.classList.add("comment-options");
  commentMain.appendChild(commentOptions);

  let optionEdit = document.createElement("input")
  optionEdit.setAttribute("type", "button");
  optionEdit.setAttribute("value", "Editar");
  commentOptions.appendChild(optionEdit);

  let optionDelete = document.createElement("input");
  optionDelete.setAttribute("type", "button");
  optionDelete.setAttribute("value", "Excluir");
  optionDelete.addEventListener("click", function() {deleteComent(idNumber)});
  commentOptions.appendChild(optionDelete);
}

// UPDATE
function updateComentContent(idNumber) {}

// DELETE
function deleteComent(idNumber) {
  deleteComentFromStorage(idNumber);
  deleteComentHTML(idNumber);
}

function deleteComentFromStorage(idNumber) {
  let comentStorage = JSON.parse(localStorage.getItem("coments"));
  delete comentStorage[idNumber];
  if (Number(Object.keys(comentStorage).length) == 0) {
    localStorage.removeItem("coments");
    return;
  }
  localStorage.setItem("coments", JSON.stringify(comentStorage));
}

function deleteComentHTML(idNumber) {
  let coment = document.querySelector("#comment_"+idNumber);
  coment.remove();
}
