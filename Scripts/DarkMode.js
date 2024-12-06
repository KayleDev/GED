// Função que é ativada ao clicar no botão de desligar na página Home.php, ela mudará o site para o modo escuro
function backgroundColor() {
    let checkBox = document.getElementById("inCheck");

    // Isso pega o root(elemento raiz) da página
    let root = document.documentElement;

    // Cada variável representa uma variável no root do Main.css, o .trim() é usado para caso tenha um código
    // como --primary-color: #252525 ;(com espaço no final) ele não quebre.
    let primaryColor = getComputedStyle(root).getPropertyValue("--primary-color").trim();
    let primaryTextColor = getComputedStyle(root).getPropertyValue("--primary-text-color").trim();

    let bodyColor = getComputedStyle(root).getPropertyValue("--body-color").trim();
    let darkBodyColor = getComputedStyle(root).getPropertyValue("--dark-body-color").trim();

    let secondaryDarkColor = getComputedStyle(root).getPropertyValue("--secondary-dark-color").trim();
    let secondaryWhiteColor = getComputedStyle(root).getPropertyValue("--secondary-white-color").trim();

    // A logica usada é que quando o botão ficar checked, a variável(css do root) que estava como --primary-color(#252525)
    // vai ter o seu conteúdo trocado com a --primary-text-color(#e8e6e3)
    // Logo a --primary-color fica com #e8e6e3 enquanto a --primary-text-color fica com #252525
    // É a mesma lógica pros outros 4.
    if (checkBox.checked) {
        root.style.setProperty("--primary-color", primaryTextColor); 
        root.style.setProperty("--primary-text-color", primaryColor); 

        root.style.setProperty("--body-color", darkBodyColor); 
        root.style.setProperty("--dark-body-color", bodyColor); 

        root.style.setProperty("--secondary-dark-color", secondaryWhiteColor); 
        root.style.setProperty("--secondary-white-color", secondaryDarkColor); 
        localStorage.setItem("bgColor", "dark"); 
    } else {
    // Se a checkbox tiver desmarcada, as variáveis(css do root) vão receber o valor das variáveis(JS)     
        root.style.setProperty("--primary-text-color", primaryColor); 
        root.style.setProperty("--primary-color", primaryTextColor);

        root.style.setProperty("--dark-body-color", bodyColor); 
        root.style.setProperty("--body-color", darkBodyColor); 

        root.style.setProperty("--secondary-white-color", secondaryDarkColor); 
        root.style.setProperty("--secondary-dark-color", secondaryWhiteColor);
        localStorage.setItem("bgColor", "light"); 
    }
}

window.addEventListener("load", () => {
    let checkBox = document.getElementById("inCheck");
    let root = document.documentElement;

    let primaryColor = getComputedStyle(root).getPropertyValue("--primary-color").trim();
    let primaryTextColor = getComputedStyle(root).getPropertyValue("--primary-text-color").trim();

    let bodyColor = getComputedStyle(root).getPropertyValue("--body-color").trim();
    let darkBodyColor = getComputedStyle(root).getPropertyValue("--dark-body-color").trim();

    let secondaryDarkColor = getComputedStyle(root).getPropertyValue("--secondary-dark-color").trim();
    let secondaryWhiteColor = getComputedStyle(root).getPropertyValue("--secondary-white-color").trim();

    // Quando a página é carregada, vai ser checado no localStorage qual o valor salvo, se tiver dark vai
    // trocar os valores que nem no primeiro if da backGroundColor()
    if (localStorage.getItem("bgColor") === "dark") {
        root.style.setProperty("--primary-color", primaryTextColor);
        root.style.setProperty("--primary-text-color", primaryColor);
        root.style.setProperty("--body-color", darkBodyColor);
        root.style.setProperty("--dark-body-color", bodyColor);
        root.style.setProperty("--secondary-dark-color", secondaryWhiteColor); 
        root.style.setProperty("--secondary-white-color", secondaryDarkColor); 
        checkBox.checked = true; 
    } else if (localStorage.getItem("bgColor") === "light") {
    // Quando a página é carregada, vai ser checado no localStorage qual o valor salvo, se tiver light vai
    // trocar os valores que nem no segundo if da backGroundColor()    
        root.style.setProperty("--primary-text-color", primaryTextColor);
        root.style.setProperty("--primary-color", primaryColor);
        root.style.setProperty("--dark-body-color", darkBodyColor);
        root.style.setProperty("--body-color", bodyColor);
        root.style.setProperty("--secondary-white-color", secondaryWhiteColor); 
        root.style.setProperty("--secondary-dark-color", secondaryDarkColor);
    }
});