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
    return $("#coment-form-text").val();
  }

  setDate() {
    const date = new Date();
    const datePtBr =
      date.getDate() + "/" + (date.getMonth()) + "/" + date.getFullYear();
    return datePtBr;
  }
}

// CREATE
function createComent() {
  const coment = new Coment();
  createComentHTML(coment.idNumber, coment);
  saveComent(coment);
}
$("#coment-form-button").click(createComent);

function saveComent(coment) {
  let comentStorage = JSON.parse(localStorage.getItem("coments"));
  if (!comentStorage) comentStorage = {};
  addComment(coment.idNumber);
  comentStorage[coment.idNumber] = coment;
  delete coment.idNumber;
  localStorage.setItem("coments", JSON.stringify(comentStorage));
}

  function createComentHTML(idNumber, coment) {  
  let commentHTML = `
    <div class='comment' id="comment_`+idNumber+`">
      <div class='comment-header'>
        <div class='comment-header-user'>
          <p>`+coment.sender+`</p>
        </div>
        <div class='comment-header-info'>
          <p></p>
          <p>`+coment.date+`</p>
        </div>
      </div>
      <input type="text" disabled value="`+coment.content+`" class='comment-content' id="comment-content_`+idNumber+`"></input>`;

  if(coment.sender == sessionStorage.getItem("activeUser")) {
    commentHTML +=`
      <div class='comment-options'>
        <button class="comment-activate-edit" id="comment-activate-edit_`+idNumber+`" onclick="activeEditComment(`+idNumber+`)">Editar</button>
        <button class="comment-delete" id="comment-delete_`+idNumber+`" onclick="deleteComent(`+idNumber+`)">Excluir</button>
        <button id="comment-confirm-edit_`+idNumber+`" onclick="updateComentContent(`+idNumber+`)" style="display: none;">Confirmar</button>
      </div>
    </div>`
  } else {
    commentHTML +=`
    </div>`;
  }    
  $("#comment-div").append(commentHTML);
}

// UPDATE
function activeEditComment(idNumber) {
  $(".comment-activate-edit").hide();
  $(".comment-delete").hide();
  $("#coment-form-button").prop('disabled', true);
  $("#comment-confirm-edit_"+idNumber).show();
  $("#comment-content_"+idNumber).prop('disabled', false);
}

function updateComentContent(idNumber) {
  let comentStorage = JSON.parse(localStorage.getItem("coments"));
  comentStorage[idNumber].content = $("#comment-content_"+idNumber).val();
  localStorage.setItem("coments", JSON.stringify(comentStorage));
  disableEditComment(idNumber);
}

function disableEditComment(idNumber) {
  $(".comment-activate-edit").show();
  $(".comment-delete").show();
  $("#coment-form-button").prop('disabled', false);
  $("#comment-confirm-edit_"+idNumber).hide();
  $("#comment-content_"+idNumber).prop('disabled', true);
}

// DELETE
function deleteComent(idNumber) {
  deleteComentFromStorage(idNumber);
  deleteComentHTML(idNumber);
}

function deleteComentFromStorage(idNumber) {
  let comentStorage = JSON.parse(localStorage.getItem("coments"));
  delete comentStorage[idNumber];
  if (Number(Object.keys(comentStorage).length) == 0)
    return localStorage.removeItem("coments");
  localStorage.setItem("coments", JSON.stringify(comentStorage));
}

function deleteComentHTML(idNumber) {
  $("#comment_"+idNumber).remove();
}

// INITIALIZE
function loadAllComment() {
  let activeStorage = JSON.parse(localStorage.getItem("activeDocument"));
  let documentStorage = JSON.parse(localStorage.getItem("documents"));
  let commentStorage = JSON.parse(localStorage.getItem("coments"));
  if (!commentStorage) return
  for (let i = 0; i < documentStorage[activeStorage].comment.length; i++) {
    createComentHTML(documentStorage[activeStorage].comment[i], commentStorage[documentStorage[activeStorage].comment[i]]); // Cria o HTML de cada documento
  } 
}