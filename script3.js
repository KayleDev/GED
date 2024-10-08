// Criando uma classe documento
class Document {
    // Esse documento poderá ter um nome, um tipo(texto, word e etc), e um tamanho em bytes
    constructor(name, type, size) {
        this.name = name;
        this.type = type;
        this.size = size;
    }

    // A formatação em bytes não é boa então esse método transforma o valor do tamanho do documento em 
    // MegaByte ou KiloByte
    newSize() {
        if(this.size.length < 7) {
            return `${Math.round(+this.size/1024).toFixed(2)}KB`
        } else {
            return `${(Math.round(+this.size/1024)/1000).toFixed(2)}MB`
        }
    }

    // 
    get typeImage() {
        if(this.type === "text/plain") {
            return "32329.png";
        } else if(this.type === "image/png") {
            return "1829415.png";
        }
    }
}

// Sempre que o documento sofrer uma alteração ele vai pegar o primeiro elemento que ele achar no evento
document.getElementById("fileInput").addEventListener("change", (e) => {
    const file = e.target.files[0]

// Checagem para ver se existe um elemento
    if(file) {
        // Passagem dos dados para a nova instância da classe, para fazer a conversão de Bytes para Mb ou
        // Kb é necessário que o tamanho seja uma string.
        let dc = new Document(file.name, file.type, file.size.toString());
        // Container que guardará todos os documentos inseridos
        let container = document.getElementById("file-container");

        // Div que armazenará os elementos do documento
        let div = document.createElement("div");

        // Imagem que representa o documento
        let img = document.createElement("img");
        // Nome do documento
        let documentName = document.createElement("h2");
        // Tamanho do documento
        let documentSize = document.createElement("h3");

        // Nome de classe que colocará uma borda entre os elementos do documento
        div.className = "borda";

        // Imagem que representa o tipo de documento sendo colocada no src do img
        img.src = dc.typeImage;
        // Definindo um tamanho em pixels pra imagem
        img.width = 256;

        // Colocando o nome do documento como conteúdo do elemento
        documentName.textContent = file.name;
        // Colocando o tamanho já convertido como conteúdo do elemento
        documentSize.textContent = dc.newSize();

        // Colocando a imagem, o nome do documento e o tamanho do documento como elementos filhos da div
        div.appendChild(img);
        div.appendChild(documentName);
        div.appendChild(documentSize);

        // Por fim colocar a div como elemento filha do container
        container.appendChild(div);
    }
})