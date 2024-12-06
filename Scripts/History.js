// Função para formatar a data no formato 'dd mmm yyyy' (exemplo: 05 out 2024)
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

// Função para exibir a data atual na página
function displayCurrentDate() {
    const currentDate = new Date();
    document.getElementById("currentDate").textContent = currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }); // Exibe a data no formato 'dd mmm yyyy'
}

// Função para filtrar os arquivos com base no tipo de filtro (hoje, semana, mês, ano)
function filterFiles(filterType) {
    const currentDate = new Date();
    let filteredFiles = []; // Array que listará as alterações filtradas

    // Itera sobre todos os arquivos e os filtra de acordo com o tipo de filtro
    files.forEach(file => {          
        const fileDate = new Date(file.date); // Converte a data do arquivo para objeto Date

        if (filterType === "today" && fileDate.toDateString() === currentDate.toDateString()) {
            filteredFiles.push(file); // Se for "hoje", adiciona à lista se a data do arquivo for a mesma que a data atual
        } else if (filterType === "week") {
            const oneWeekAgo = new Date(currentDate); // Cria uma data representando 7 dias atrás
            oneWeekAgo.setDate(currentDate.getDate() - 7);
            // Verifica se a data do arquivo está dentro da última semana
            if (fileDate >= oneWeekAgo && fileDate <= currentDate) {
                filteredFiles.push(file);
            }
        } else if (filterType === "month") {
            const oneMonthAgo = new Date(currentDate); // Cria uma data representando 1 mês atrás
            oneMonthAgo.setMonth(currentDate.getMonth() - 1);
            // Verifica se a data do arquivo está dentro do último mês
            if (fileDate >= oneMonthAgo && fileDate <= currentDate) {
                filteredFiles.push(file);
            }
        } else if (filterType === "year") {
            const oneYearAgo = new Date(currentDate); // Cria uma data representando 1 ano atrás(só esperando daqui 1 ano pra saber se o código funciona)
            oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
            // Verifica se a data do arquivo está dentro do último ano
            if (fileDate >= oneYearAgo && fileDate <= currentDate) {
                filteredFiles.push(file);
            }
        }
    });

    renderHistory(filteredFiles);
}

// Pega as alterações salvas no localStorage e valida se não existe ou se o tamanho é 0(caso exista a chave, 
// mas não tenha nenhum valor dentro)
function renderHistory() {
    const historyStorage = JSON.parse(localStorage.getItem("history"));
    const filesList = document.getElementById("filesList");
    
    if (!(historyStorage) || historyStorage.length === 0) {
        filesList.innerHTML = "<p>Nenhum histórico encontrado.</p>";
        return;
    }

    // Cria o cabeçalho da lista de arquivos
    filesList.innerHTML = `
        <div class="file-item file-item-header">
            <div>Tipo</div>
            <div>Nome</div>
            <div>Criado em</div>
            <div>Modificado em</div>
        </div>
    `;

    // Itera sobre o histórico e cria um item para cada entrada
    historyStorage.forEach(item => {
        let modal = document.getElementById("myModal");
        let btn = document.getElementsByClassName("myBtn");
        let span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
        modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            }
        }
        const fileElement = document.createElement("div");
        fileElement.classList.add("file-item");
        fileElement.innerHTML = `
            <div class='myBtn'>${item.type.toUpperCase()}</div>
            <div class='myBtn'>${item.name}</div>
            <div class='myBtn'>${formatDate(item.creationDate)}</div>
            <div class='myBtn'>${formatDate(item.modificationDate)}</div>
        `;

        fileElement.addEventListener('click', () => {
            alert(item.description);
        })
        filesList.appendChild(fileElement);
    });
}

// Executa a função pra mostrar o histórico sem nenhum filtro aplicado e executa a função pra mostrar a data 
// atual assim que o DOM da página é carregado.
document.addEventListener('DOMContentLoaded', function() {
    renderHistory();
    displayCurrentDate();
});