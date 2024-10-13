const btnDropdown = document.getElementById("dropdownButton");
let opacityEffect = document.getElementById("opacity-Effect");
let btnOptions2 = document.getElementById("btn-Options2");
let container = document.getElementById("container");
let fileInputWrapper = document.getElementById("fileInputWrapper");
let fileInput = document.getElementById("fileInput");

// Sempre que o botão de dropdown for clicado, ele deixará o fundo mais escuro mudando a opacidade
btnDropdown.addEventListener("focus", () => {
  opacityEffect.style.opacity = 0.5;
  opacityEffect.style.backgroundColor = "rgba(0,0,0,0.5)";
});

// Sempre que o botão de adicionar documento for clicado, ele também deixará o fundo mais escuro, além disso tirará a invisibilidade do
// fileInputWrapper que é o container que mostrará os documentos.
btnOptions2.addEventListener("click", () => {
  opacityEffect.style.opacity = 0.5;
  opacityEffect.style.backgroundColor = "rgba(0,0,0,0.5)";
  fileInputWrapper.style.display = "flex";

  // Toda vez que qualquer lugar que for clicado e não seja a parte de documento, a tela voltará ao normal. e o fileInputWrapper
  // ficará invisivel denovo
  container.addEventListener("click", (event) => {
    if (!fileInputWrapper.contains(event.target)) {
      opacityEffect.style.opacity = 1;
      opacityEffect.style.backgroundColor = "";

      fileInputWrapper.style.display = "none";
    }
  });
});

// Sempre que o botão de dropdown perder o foco, a tela voltará ao normal.
// OBS: Arrumar depois. Após clicar em um dos botões de adicionar documento ou pasta, a tela fica na coloração padrão por 0.5 segundos
btnDropdown.addEventListener("blur", () => {
  opacityEffect.style.opacity = 1;
  opacityEffect.style.backgroundColor = "";
});

// Quando a tela de documentos aparece, ela não tem nenhum elemento e contém uma imagem no meio dela, após ocorrer uma mudança
// (no caso um documento for adicionado) a imagem no meio sumirá;
fileInput.addEventListener("change", () => {
  fileInputWrapper.style.backgroundImage = "none";
});
