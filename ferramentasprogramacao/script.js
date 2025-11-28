const dadosDoSite = {
    frontend: {
        titulo: "💻 1. HTML, CSS e JS",
        texto: `
            <strong>O que é:</strong> O <strong>HTML</strong> é a espinha dorsal da Web. No Front-end, ele trabalha com seus "irmãos":<br><br>
            🧱 <strong>HTML:</strong> Cria a estrutura.<br>
            🎨 <strong>CSS:</strong> Dá o estilo, cores e beleza.<br>
            ⚡ <strong>JavaScript:</strong> Adiciona interatividade e lógica.<br><br>
            <strong>Como funciona:</strong> O navegador recebe o código e "desenha" a tela. Hoje em dia, o Front-end consome APIs para buscar dados dinâmicos (como o preço do Bitcoin 🪙 ou a previsão do tempo 🌦️) sem recarregar a página.
        `
    },
    banco: {
        titulo: "🗄️ 2. Banco de Dados",
        texto: `
            <strong>O que é:</strong> É o "cofre" digital onde as informações são guardadas. Sem ele, o aplicativo teria amnésia assim que você fechasse a janela.<br><br>
            <strong>Importância:</strong> Bancos de dados garantem que:<br>
            🔐 Seus dados de login estejam seguros.<br>
            📂 Seu histórico de compras seja preservado.<br>
            🔎 O sistema consiga achar um prodduto em específico no meio de 1 milhão de produtos.
        `
    },
    mobile: {
        titulo: "📱 3. Mobile",
        texto: `
            <strong>O que são:</strong> Softwares feitos para rodar nativamente no celular IOs ou Android.<br><br>
            <strong>Diferencial:</strong> Ao contrário de um site comum, eles acessam o hardware do celular:<br>
            📍 GPS para saber onde entregar a comida.<br>
            📸 Câmera para escanear cartões.<br>
            🔔 Notificações Push para avisar promoções.<br><br>
            <strong>Comunicação:</strong> O app é só uma "casca". Ele vive pedindo dados para o servidor via internet 📡.
        `
    },
    integracao: {
        titulo: "⚙️ 4. Como tudo se conecta",
        texto: `
            Para um sistema real funcionar, acontece o seguinte ciclo em milissegundos:<br><br>
            1️⃣ <strong>Ação:</strong> Você clica em "Comprar" no App 📱.<br>
            2️⃣ <strong>Requisição:</strong> O App manda um sinal (API) para o Servidor ☁️.<br>
            3️⃣ <strong>Busca:</strong> O Servidor pergunta ao Banco de Dados: "Tem estoque?" 🗄️.<br>
            4️⃣ <strong>Resposta:</strong> O Banco diz "Sim!", o Servidor confirma e o App mostra "Compra Sucesso! ✅".
        `
    },
    exemplos: {
        titulo: "💡 5. Exemplos Reais",
        texto: `
            <div class="exemplo-card" style="border-left: 5px solid #1DB954; background: #f1f1f1; padding: 15px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
                <h3 style="color: #1DB954; margin-top:0;">🎵 Spotify (Streaming)</h3>
                <p><strong>📱 Front/Mobile:</strong> Interface com capas de álbuns, play/pause e letras de música.</p>
                <p><strong>🗄️ Banco de Dados:</strong> Guarda milhões de músicas, quem você segue e suas playlists criadas.</p>
                <p><strong>🔄 Integração:</strong> Quando você dá <strong>Play ▶️</strong>, o app envia seu ID de usuário para o servidor. O servidor checa no banco se você é <em>Premium</em> ⭐. Se for, ele libera o arquivo de áudio para tocar no seu fone.</p>
            </div>
            
            <div class="exemplo-card" style="border-left: 5px solid #ffe600; background: #fffbe6; padding: 15px; border-radius: 0 8px 8px 0;">
                <h3 style="color: #d9c400; text-shadow: 0px 0px 1px black; margin-top:0;">📦 Mercado Livre (E-commerce)</h3>
                <p><strong>📱 Front/Mobile:</strong> Vitrine de produtos, carrinho de compras e rastreio.</p>
                <p><strong>🗄️ Banco de Dados:</strong> O coração do sistema. Controla estoque, preços e endereços.</p>
                <p><strong>🔄 Integração:</strong> Ao clicar em <strong>Finalizar Compra 💳</strong>, o sistema dispara várias ações: abate 1 item do estoque no banco, avisa o sistema de logística para separar o pacote 🚚 e envia um e-mail de confirmação para você 📧.</p>
            </div>
        `
    }
};

function mudarConteudo(tema, buttonEl) {
    const container = document.getElementById('area-conteudo');
    const informacao = dadosDoSite[tema];

    // Efeito visual simples
    container.style.opacity = 0;
    
    setTimeout(() => {
        container.innerHTML = `
            <h2>${informacao.titulo}</h2>
            <div class="texto-conteudo">${informacao.texto}</div>
        `;
        container.style.opacity = 1;
    }, 150);

    if (buttonEl) {
        const botoes = document.querySelectorAll('.btn-nav');
        botoes.forEach(b => b.classList.remove('ativo'));
        buttonEl.classList.add('ativo');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const primeiroBotao = document.querySelector('.btn-nav');
    if (primeiroBotao) {
        mudarConteudo('frontend', primeiroBotao);
    }
});