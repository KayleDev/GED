document.addEventListener("DOMContentLoaded", () => {
  const fileElements = document.querySelectorAll(".border");
  const contextMenu = document.getElementById("contextMenu");

  fileElements.forEach((fileElement) => {
    fileElement.addEventListener("contextmenu", (e) => {
      e.preventDefault(); // Previne o menu padrão do navegador.
      contextMenu.style.display = "block"; // Torna o menu visível.
      contextMenu.style.left = `${e.pageX}px`; // Define a posição horizontal do menu com base no clique.
      contextMenu.style.top = `${e.pageY}px`; // Define a posição vertical do menu com base no clique.

      // DELETE
      $("#context-delete").click(() => {
        let id = fileElement.id.split("_");
        if(id[0]=="document") 
          deleteDocument(id[1]);
        if(id[0]=="folder")
          deleteFolder(id[1]);
        $("#context-delete").off("click");
      });

      // RENAME
      $("#context-rename").click(() => {
        let id = fileElement.id.split("_");
        if(id[0]=="document") 
          renameDocument(id[1]);
        if(id[0]=="folder")
          renameFolder(id[1]);
        $("#context-rename").off("click");
      });
    });
  });

  // Adiciona um evento de clique global para esconder o menu ao clicar em qualquer outro lugar.
  document.addEventListener("click", () => {
    contextMenu.style.display = "none";
  });
});