
      // Dados fictícios para pesquisa
      const mockData = [
        "Apple",
        "Banana",
        "Blueberry",
        "Cherry",
        "Cranberry",
        "Grape",
        "Lemon",
        "Lime",
        "Orange",
        "Peach",
        "Pear",
        "Pineapple",
        "Raspberry",
        "Strawberry",
        "Watermelon"
    ];
    
    // Limite de resultados para exibir
    const maxResults = 5;
    
    // Seleciona os elementos necessários
    const inputField = document.querySelector(".input-container input[type='text']");
    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('results-container');
    
    // Adiciona o container de resultados abaixo do campo de pesquisa
    inputField.parentElement.appendChild(resultsContainer);
    
    // Função para exibir os resultados filtrados
    function displayResults(results) {
        // Limpa os resultados anteriores
        resultsContainer.innerHTML = "";
    
        // Se houver resultados, exibe o container
        if (results.length > 0) {
            resultsContainer.style.display = "block";
            results.slice(0, maxResults).forEach(result => {
                // Cria um elemento para cada resultado
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");
                resultItem.textContent = result;
                resultsContainer.appendChild(resultItem);
    
                // Adiciona evento de clique para cada item de resultado
                resultItem.addEventListener("click", () => {
                    inputField.value = result; // Preenche o campo com o item clicado
                    resultsContainer.style.display = "none"; // Oculta a lista de resultados
                });
            });
        } else {
            // Se não houver resultados, oculta o container
            resultsContainer.style.display = "none";
        }
    }
    
    // Função para filtrar os dados com debounce
    let debounceTimeout;
    function handleSearchInput() {
        const query = inputField.value.trim().toLowerCase();
    
        if (!query) {
            resultsContainer.style.display = "none";
            return;
        }
    
        // Filtra os dados fictícios com base na consulta
        const filteredResults = mockData.filter(item =>
            item.toLowerCase().includes(query)
        );
    
        // Exibe os resultados filtrados
        displayResults(filteredResults);
    }
    
    // Função de debounce para limitar chamadas frequentes
    function debounce(fn, delay) {
        return function (...args) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => fn.apply(this, args), delay);
        };
    }
    
    // Event listener para capturar o texto enquanto o usuário digita
    inputField.addEventListener("input", debounce(handleSearchInput, 300));
    
    // Navegação com teclado
    let currentIndex = -1;
    inputField.addEventListener("keydown", function (e) {
        const resultItems = document.querySelectorAll(".result-item");
        if (resultsContainer.style.display === "block") {
            if (e.key === "ArrowDown") {
                currentIndex = Math.min(currentIndex + 1, resultItems.length - 1);
                highlightResult(resultItems);
            } else if (e.key === "ArrowUp") {
                currentIndex = Math.max(currentIndex - 1, 0);
                highlightResult(resultItems);
            } else if (e.key === "Enter") {
                if (currentIndex >= 0 && currentIndex < resultItems.length) {
                    inputField.value = resultItems[currentIndex].textContent;
                    resultsContainer.style.display = "none";
                }
            }
        }
    });
    
    // Destaca o item de resultado atual
    function highlightResult(resultItems) {
        resultItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.style.backgroundColor = "#e0e0e0";
                item.style.cursor = "pointer";
            } else {
                item.style.backgroundColor = "transparent";
            }
        });
    }
    
    // Fecha os resultados quando o campo perde o foco
    inputField.addEventListener("blur", function () {
        setTimeout(() => {
            resultsContainer.style.display = "none";
            currentIndex = -1; // Reseta o índice da navegação
        }, 200);
    });
    
    // Fecha os resultados quando o campo recebe foco novamente
    inputField.addEventListener("focus", function () {
        const query = inputField.value.trim().toLowerCase();
        if (query) {
            const filteredResults = mockData.filter(item =>
                item.toLowerCase().includes(query)
            );
            displayResults(filteredResults);
        }
    });
    