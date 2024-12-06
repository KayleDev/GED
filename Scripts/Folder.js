sessionStorage.setItem("activeUser", "Caio");

class Folder {
  constructor(name) {
    this.name = name;
    this.sender = sessionStorage.getItem("activeUser");
    this.idNumber = this.setIdNumber();
  }

  setUser() {
    return sessionStorage.getItem("activeUser");
  }

  setIdNumber() {
    let idCounter = localStorage.getItem('folderIdCounter');
    if (!idCounter) {
      idCounter = 1;
    } else {
      idCounter = Number(idCounter) + 1;
    }

    localStorage.setItem('folderIdCounter', idCounter);
    return idCounter;
  }
}

function createFolder() {
  let name = prompt("Qual será o nome da pasta?");
  let folder;
  if (name != null) {
    folder = new Folder(name);
  } else {
    alert("Insira um nome.");
    return;
  }
  $.ajax({
    type: "POST",
    url: "createPage.php",
    data: { id: "folder" + folder.idNumber },
    success: (url) => {
      folder.url = url;
      createFolderHTML(folder, folder.idNumber);
      saveFolder(folder);
    }
  });
} $("#btn-Options").click(createFolder);

function saveFolder(folder) {
  let folderStorage = JSON.parse(localStorage.getItem("folders"));
  if (!folderStorage) folderStorage = {};
  folderStorage[folder.idNumber] = folder;
  delete folder.idNumber;
  localStorage.setItem("folders", JSON.stringify(folderStorage));
}

function createFolderHTML(folder, id) {
  let folderHTML = `
    <a class="border" href="`+ folder.url +`" id="folder_`+id+`">
      <div class="icon-container">
          <img src="../../Assets/icons/star.svg" class="folder-icon">
          <img src="../../Assets/icons/dots.svg" class="folder-icon">
      </div>
      <img src="../../Assets/DocumentImages/folder.png" width="64">
      <h2 id="folder-name_`+id+`">`+ folder.name + `</h2>
      <h4>`+ folder.sender + `</h4>
    </a>`;

  $(".div-items-folder").append(folderHTML);
}

// DELETE
function deleteFolder(idNumber) {
  deleteFolderFromStorage(idNumber);
  deleteFolderHTML(idNumber);
}

function deleteFolderFromStorage(idNumber) {
  let folderStorage = JSON.parse(localStorage.getItem("folders"));
  delete folderStorage[idNumber];
  if (Number(Object.keys(folderStorage).length) == 0)
    return localStorage.removeItem("folders");
  localStorage.setItem("folders", JSON.stringify(folderStorage));
}

function deleteFolderHTML(idNumber) {
  $("#folder_"+idNumber).remove();
}

// RENAME
function renameFolder(idNumber) {
  const newName = prompt()
  renameFolderFromStorage(idNumber, newName);
  renameFolderHTML(idNumber, newName);
}

function renameFolderFromStorage(idNumber, nm) {
  let folderStorage = JSON.parse(localStorage.getItem("folders"));
  folderStorage[idNumber].name = nm;
  localStorage.setItem("folders", JSON.stringify(folderStorage));
}

function renameFolderHTML(idNumber, nm) {
  $("#folder-name_"+idNumber).text(nm);
}

function loadAllFolders() {
  let folderStorage = JSON.parse(localStorage.getItem("folders"));
  if (folderStorage)
    for (const [key, value] of Object.entries(folderStorage))
      createFolderHTML(value, key);
}

loadAllFolders();
