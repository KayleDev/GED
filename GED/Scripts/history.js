const files = [
  { name: "Relatório Mensal", date: "2024-10-05", lastModified: "2024-10-10", type: "pdf" },
  { name: "Reunião de Estratégia", date: "2024-10-08", lastModified: "2024-10-09", type: "pptx" },
  { name: "Planilha de Custos", date: "2024-10-07", lastModified: "2024-10-08", type: "xlsx" },
  { name: "Resumo de Vendas", date: "2024-10-01", lastModified: "2024-10-03", type: "pdf" },
  { name: "Minuta de Contrato", date: "2024-09-15", lastModified: "2024-09-20", type: "docx" },
  { name: "Relatório Anual", date: "2023-12-20", lastModified: "2024-01-10", type: "pdf" },
  { name: "Slides para Apresentação", date: "2024-09-30", lastModified: "2024-10-02", type: "pptx" },
  { name: "Notas de Reunião", date: "2024-10-08", lastModified: "2024-10-08", type: "txt" },
  { name: "Documentação de Projeto", date: "2024-07-21", lastModified: "2024-07-30", type: "docx" },
  { name: "Lista de Clientes", date: "2024-01-15", lastModified: "2024-01-20", type: "xlsx" },
  { name: "Planejamento de Marketing", date: "2024-01-10", lastModified: "2024-01-15", type: "pdf" }
];

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

function displayCurrentDate() {
  const currentDate = new Date();
  document.getElementById("currentDate").textContent = currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

function renderFiles(filteredFiles) {
  const filesList = document.getElementById("filesList");
  filesList.innerHTML = `
      <div class="file-item file-item-header">
          <div>Tipo</div>
          <div>Nome</div>
          <div>Criado em</div>
          <div>Modificado em</div>
      </div>
  `;

  filteredFiles.forEach(file => {
      const fileElement = document.createElement("div");
      fileElement.classList.add("file-item");
      
      fileElement.innerHTML = `
          <div>${file.type.toUpperCase()}</div>
          <div>${file.name}</div>
          <div>${formatDate(file.date)}</div>
          <div>${formatDate(file.lastModified)}</div>
      `;

      filesList.appendChild(fileElement);
  });
}

function filterFiles(filterType) {
  const currentDate = new Date();
  let filteredFiles = [];

  files.forEach(file => {
      const fileDate = new Date(file.date);

      if (filterType === "today" && fileDate.toDateString() === currentDate.toDateString()) {
          filteredFiles.push(file);
      } else if (filterType === "week") {
          const oneWeekAgo = new Date(currentDate);
          oneWeekAgo.setDate(currentDate.getDate() - 7);
          if (fileDate >= oneWeekAgo && fileDate <= currentDate) {
              filteredFiles.push(file);
          }
      } else if (filterType === "month") {
          const oneMonthAgo = new Date(currentDate);
          oneMonthAgo.setMonth(currentDate.getMonth() - 1);
          if (fileDate >= oneMonthAgo && fileDate <= currentDate) {
              filteredFiles.push(file);
          }
      } else if (filterType === "year") {
          const oneYearAgo = new Date(currentDate);
          oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
          if (fileDate >= oneYearAgo && fileDate <= currentDate) {
              filteredFiles.push(file);
          }
      }
  });

  renderFiles(filteredFiles);
}

displayCurrentDate();
renderFiles(files);