<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciamento de Documentos</title>

    <!-- Links para os arquivos CSS do projeto que estilizam as páginas -->
    <link rel="stylesheet" href="../../Styles/Main.css">
    <link rel="stylesheet" href="../../Styles/History.css">
    <link rel="stylesheet" href="../../Styles/Sidebar.css">
    <link rel="stylesheet" href="../../Styles/Explorer.css">
    <link rel="stylesheet" href="../../Styles/Modal.css">

    
    <!-- Estilo específico pro arquivo não conflitar depois com outros css -->
    <style>
        /* Estilo para alinhar e definir tamanho fixo para cada coluna */
        .file-item {
            display: flex;
            justify-content: space-between;  /* Alinha os itens de maneira espaçada */
            background-color: transparent;  /* Mantém o fundo transparente */
            padding: 10px;  /* Adiciona espaço interno aos itens */
            cursor: pointer;
        }
        
        .file-item > div {
            flex: 1;  /* Faz com que cada item ocupe a mesma quantidade de espaço */
            text-align: center;  /* Centraliza o texto dentro de cada item */
            padding: 5px;  /* Adiciona padding interno nos itens */
            color: var(--primary-color);  /* Define a cor do texto */
        }

        .file-item-header {
            font-weight: bold;  /* Deixa o texto em negrito */
            background-color: transparent;  /* Fundo transparente */
            color: var(--primary-color);  /* Cor do texto */
            cursor: default;
        }
    </style>
</head>

<body>
    <!-- Container principal da página -->
    <div class="container-general" style="z-index: 2;">
        
        <!-- Plugin de acessibilidade VLibras -->
        <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>
        </div>

        <!-- Barra lateral de navegação -->
        <nav class="sidebar">
            <div class="header">
                <!-- Título da aplicação -->
                <h2>NeoFiles</h2>
            </div>
            
            <!-- Itens de navegação principais -->
            <div class="menu">
                <!-- Link para a página inicial -->
                <a href="Home.php" class="menu-item">
                    <span class="icon">🏠</span> Início
                </a>
                <!-- Link para a página de arquivos -->
                <a href="./Explorer.php" class="menu-item ">
                    <span class="icon">📄</span> Arquivos
                </a>
                <!-- Link para a página de histórico, com a classe 'active' para destacar que esta página está em uso -->
                <a href="./History.php" class="menu-item active">
                    <span class="icon">⏳</span> Histórico
                </a>
                <!-- Link para a página de lixeira -->
                <a href="./Lixeira.php" class="menu-item">
                    <span class="icon">🗑️</span> Lixeira
                </a>
            </div>
            
            <!-- Seções adicionais para Favoritos e Recentes (ainda não está conteúdo definido, Lucas arruma depois essa bomba) -->
            <div class="sections">
                <div class="section">
                    <h3>Favoritos</h3>
                    <hr>
                </div>
                <div class="section">
                    <h3>Recentes</h3>
                    <hr>
                </div>
            </div>
        </nav>

        <!-- Seção principal de conteúdo relacionada ao histórico -->
        <section class="timeline" style="flex: 2;">
            <!-- Título da seção de Histórico -->
            <h1>Histórico</h1>

            <!-- Filtro de data para mostrar arquivos modificados de acordo com o período selecionado -->
            <div class="date-filter">
                <div id="currentDate"></div>
                
                <!-- Filtros para selecionar o período: Hoje, Semana, Mês, Ano -->
                <div class="filters">
                    <div onclick="filterFiles('today')">Hoje</div>
                    <div onclick="filterFiles('week')">Semana</div>
                    <div onclick="filterFiles('month')">Mês</div>
                    <div onclick="filterFiles('year')">Ano</div>
                </div>
            </div>

            <!-- Linha horizontal separando o filtro do conteúdo -->
            <hr>

            <!-- Lista de arquivos exibidos no histórico -->
            <div class="files-list" id="filesList">
                <!-- Cabeçalho da tabela de arquivos -->
                <div class="file-item file-item-header">
                    <div>Tipo</div>
                    <div>Nome</div>
                    <div>Criado em</div>
                    <div>Modificado em</div>
                </div>
            </div>
        </section>

    </div>

    
<div id="myModal" class="modal">
    <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
    </div>
</div>

    <!-- Scripts para exibição de alterações no histórico -->
    <script src="../../Scripts/History.js"></script>
    <!-- Script para adição do darkmode -->
    <script src="../../Scripts/DarkMode.js"></script>
    <!-- Script para o plugin de acessibilidade VLibras -->
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script> new window.VLibras.Widget('https://vlibras.gov.br/app'); </script>
</body>
</html>
