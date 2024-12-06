// Obtém os elementos do DOM
const dropdownButton = document.getElementById("dropdownButton");
const opacityEffect = document.getElementById("opacity-Effect");
const fileInputWrapper = document.getElementById("fileInputWrapper");
const btnOptions2 = document.getElementById("btn-Options2");

// Ativa o efeito de sobreposição ao clicar no dropdown
dropdownButton.addEventListener("click", () => {
  opacityEffect.style.opacity = 0.5;
  opacityEffect.style.pointerEvents = "auto";
});

// Fecha o menu e remove o efeito de opacidade ao clicar na sobreposição
opacityEffect.addEventListener("click", () => {
  opacityEffect.style.opacity = 0;
  opacityEffect.style.pointerEvents = "none";
  fileInputWrapper.style.display = "none";
});

// Exibe o fileInputWrapper e ativa o efeito de opacidade
btnOptions2.addEventListener("click", () => {
  fileInputWrapper.style.display = "flex";
  opacityEffect.style.opacity = 0.5;
  opacityEffect.style.pointerEvents = "auto";
});

// Remove a imagem de fundo do fileInputWrapper quando um arquivo é selecionado
fileInput.addEventListener("change", () => {
  fileInputWrapper.style.backgroundImage = "none";
});
