const dropdownButton = document.getElementById("dropdownButton");
const opacityEffect = document.getElementById("opacity-Effect");
const fileInputWrapper = document.getElementById("fileInputWrapper");
const btnOptions2 = document.getElementById("btn-Options2");

// Ativa a sobreposição ao abrir o dropdown
dropdownButton.addEventListener("click", () => {
  opacityEffect.style.opacity = 0.5;
  opacityEffect.style.pointerEvents = "auto"; // Ativa o efeito de opacidade
});

// Fecha o menu e remove a sobreposição ao clicar fora do menu de opções
opacityEffect.addEventListener("click", () => {
  opacityEffect.style.opacity = 0;
  opacityEffect.style.pointerEvents = "none";
  fileInputWrapper.style.display = "none";
});

// Mostra o fileInputWrapper ao clicar no botão de upload
btnOptions2.addEventListener("click", () => {
  fileInputWrapper.style.display = "flex";
  opacityEffect.style.opacity = 0.5;
  opacityEffect.style.pointerEvents = "auto";
});

// Remove a imagem de fundo quando um documento é adicionado
fileInput.addEventListener("change", () => {
  fileInputWrapper.style.backgroundImage = "none";
});


