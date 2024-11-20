sessionStorage.setItem("activeUser", "Caio");

class Document {
  constructor(name, type, size, sender) {
    this.name = name;
    this.type = this.typeImage(type);
    this.size = this.formatSize(size); // Formatando o tamanho logo ao criar o documento
    this.sender = sessionStorage.getItem("activeUser");
    this.idNumber = this.setIdNumber();
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

  // Formata o tamanho do documento para KB ou MB
  formatSize(size) {
    if (size < 1024) {
      return `${size} B`; // Menor que 1KB se tornará Byte
    } else if (size < 1048576) { // Menor que 1 MB se tornará KiloByte
      return `${(size / 1024).toFixed(2)} KB`;
    } else {
      return `${(size / 1048576).toFixed(2)} MB`; // Maior que 1 MB se torna MegaByte
    }
  }

  // Remove a barra para usar o nome do tipo de arquivo
  typeImage(type) {
    let image = type.split("/");
    return `${image[0]}${image[1]}`;
  }
}
  
document.getElementById("fileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  let dc = new Document(file.name, file.type, file.size);
  createDocumentHTML(dc);
  saveDocument(dc);
});

function saveDocument(document) {
  let documentStorage = JSON.parse(localStorage.getItem("documents"));
  if (!documentStorage) documentStorage = {};
  documentStorage[document.idNumber] = document;
  delete document.idNumber;
  localStorage.setItem("documents", JSON.stringify(documentStorage));
}

function createDocumentHTML(document) {
  let documentHTML = `
    <div class="borda">
      <img src="../../Assets/DocumentImages/`+document.type+`.svg" onerror="this.onerror=null;this.src='../../Assets/DocumentImages/others.svg'" width="64">
      <h2>`+document.name+`</h2>
      <h3>`+document.size+`</h3>
      <h4>`+document.sender+`</h4>
    </div>`;
  $(".file-input-wrapper").css({'background-image': 'none'});
  $("#file-container").append(documentHTML);

  let realDocumentHTML = `
    <div class="border">
      <div class="icon-container">
        <img src="../../Assets/icons/star.svg" class="document-icon">
        <img src="../../Assets/icons/dots.svg" class="document-icon">
      </div>
      <img src="../../Assets/DocumentImages/`+document.type+`.svg" onerror="this.onerror=null;this.src='../../Assets/DocumentImages/others.svg'" width="64">
      <h2>`+document.name+`</h2>
      <h3>`+document.size+`</h3>
    </div>`;

  $(".div-items-document").append(realDocumentHTML);
}

function loadAllDocuments() {
  let documentStorage = JSON.parse(localStorage.getItem("documents"));
  if (documentStorage)
    for (const [key, value] of Object.entries(documentStorage))
      createDocumentHTML(value);
}

loadAllDocuments();
