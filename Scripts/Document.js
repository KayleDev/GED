$("#document-popup").hide();
// Armazena o nome do usuário ativo no sessionStorage
sessionStorage.setItem("activeUser", "Caio");

class Document {
constructor(name, type, size) {
  this.name = name;
  this.type = this.typeImage(type);
  this.size = this.formatSize(size);
  this.sender = sessionStorage.getItem("activeUser");
  this.idNumber = this.setIdNumber();
  this.property = [];
  this.comment = [];
}

// Método para definir um número único para o documento
setIdNumber() {
  let idCounter = localStorage.getItem('documentIdCounter');
  if (!idCounter) {
      idCounter = 1;
  } else {
      idCounter = Number(idCounter) + 1;
  }
  localStorage.setItem('documentIdCounter', idCounter);
  return idCounter;
}

typeImage(type) {
// Aparentemente essa é a maneira mais otimizada de fazer a checagem do tipo de arquivo
// Basicamente cria um objeto e nesse objeto vai ter os tipos MIME(Multipurpose Internet Mail Extensions)
// que vão ser formatados pra extensão de arquivos.
const mimeTypes = {
  'application/pdf': 'pdf',
  'application/msword': 'doc', 
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'application/vnd.ms-excel': 'xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
  'application/vnd.ms-powerpoint': 'ppt',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'text/plain': 'txt',
  'application/zip': 'zip',
  'application/x-zip-compressed': 'zip',
  'application/vnd.rar': 'rar'
};
  let fileType = mimeTypes[type] || 'unknown';
  return fileType;
}

// Método para formatar o tamanho do documento
formatSize(size) {
  if (size < 1000) {
      return `${size} B`;
  } else if (size < 1000000) {
      return `${(size / 1000).toFixed(2)} KB`;
  } else {
      return `${(size / 1000000).toFixed(2)} MB`;
  }
}
}

// CREATE
document.getElementById("fileInput").addEventListener("change", (e) => {
const file = e.target.files[0];
if (!file) return;

let dc = new Document(file.name, file.type, file.size);
createDocumentHTML(dc, dc.idNumber);
saveDocument(dc);
});

// Função para salvar o documento no localStorage
function saveDocument(document) {
// Obtém os documentos já armazenados no localStorage
let documentStorage = JSON.parse(localStorage.getItem("documents"));
if (!documentStorage) documentStorage = {}; // Se não houver documentos, cria um novo objeto

// Adiciona o novo documento ao storage, usando o ID como chave
documentStorage[document.idNumber] = document;
delete document.idNumber; // Remove o ID antes de salvar, pois não precisa ser salvo no objeto

// Salva os documentos atualizados no localStorage
localStorage.setItem("documents", JSON.stringify(documentStorage));
createDocumentHistory(document, 'O documento foi criado.');
}

function createDocumentHistory(document, desc) {
const history = {
name: document.name,
creationDate: new Date().toISOString(),
modificationDate: new Date().toISOString(),
type: document.type,
description: desc
};

let historyStorage = JSON.parse(localStorage.getItem("history"));
if (!historyStorage) historyStorage = [];

historyStorage.unshift(history);

localStorage.setItem("history", JSON.stringify(historyStorage));
}

// Função para criar a representação HTML do documento
function createDocumentHTML(document, id) {
// Cria um bloco HTML com os dados do documento (imagem, nome, tamanho, remetente)
let documentHTML = `
<div class="borda">
  <img src="../../Assets/DocumentImages/`+document.type+`.png" onerror="this.onerror=null;this.src='../../Assets/DocumentImages/unknown.svg'" width="64">
  <h2>`+document.name+`</h2>
  <h3>`+document.size+`</h3>
  <h4>`+document.sender+`</h4>
</div>`;
$(".file-input-wrapper").css({'background-image': 'none'}); // Remove a imagem de fundo do input
$("#file-container").append(documentHTML); // Adiciona o HTML do documento ao container

// Cria uma versão simplificada do documento para outro lugar na página
let realDocumentHTML = `
<div class="border" id="document_`+id+`" onclick="documentPopUpActivate(`+id+`)">
  <div class="icon-container">
    <img src="../../Assets/icons/star.svg" class="document-icon">
    <img src="../../Assets/icons/dots.svg" class="document-icon">
  </div>
  <img src="../../Assets/DocumentImages/`+document.type+`.png" onerror="this.onerror=null;this.src='../../Assets/DocumentImages/unknown.svg'" width="64">
  <h2 id="document-name_`+id+`">`+document.name+`</h2>
  <h3>`+document.size+`</h3>
</div>`;

$(".div-items-document").append(realDocumentHTML); // Adiciona a versão simplificada ao container
}

// DELETE
function deleteDocument(idNumber) {
deleteDocumentFromStorage(idNumber);
deleteDocumentHTML(idNumber);
}

function deleteDocumentFromStorage(idNumber) {
let documentStorage = JSON.parse(localStorage.getItem("documents"));
delete documentStorage[idNumber];
if (Number(Object.keys(documentStorage).length) == 0)
return localStorage.removeItem("documents");
localStorage.setItem("documents", JSON.stringify(documentStorage));
}

function deleteDocumentHTML(idNumber) {
$("#document_"+idNumber).remove();
}

// RENAME
function renameDocument(idNumber) {
const newName = prompt()
renameDocumentFromStorage(idNumber, newName);
renameDocumentHTML(idNumber, newName);
}

function renameDocumentFromStorage(idNumber, nm) {
let documentStorage = JSON.parse(localStorage.getItem("documents"));
documentStorage[idNumber].name = nm;
localStorage.setItem("documents", JSON.stringify(documentStorage));
}

function renameDocumentHTML(idNumber, nm) {
$("#document-name_"+idNumber).text(nm);
}

// INIT
function loadAllDocuments() {
let documentStorage = JSON.parse(localStorage.getItem("documents"));
if (documentStorage)
// Itera sobre todos os documentos e os exibe
for (const [key, value] of Object.entries(documentStorage))
  createDocumentHTML(value, key); // Cria o HTML de cada documento
} loadAllDocuments();

// DOCUMENT POP UP
function documentPopUpActivate(id) {
localStorage.setItem("activeDocument", id);
$('#property-pessoa').empty();
$("#document-popup").show();
loadAllProperties();

}

function addProperty(id) {
let documentStorage = JSON.parse(localStorage.getItem("documents"));
let activeStorage = JSON.parse(localStorage.getItem("activeDocument"));
documentStorage[activeStorage].property.push(id);
localStorage.setItem("documents", JSON.stringify(documentStorage));
}

function addComment(id) {
let documentStorage = JSON.parse(localStorage.getItem("documents"));
let activeStorage = JSON.parse(localStorage.getItem("activeDocument"));
documentStorage[activeStorage].comment.push(id);
localStorage.setItem("documents", JSON.stringify(documentStorage));
}