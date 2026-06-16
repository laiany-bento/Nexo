let progressoGlobal = 10;
let topicosExplorados = new Set(['home']);
let tamanhoFonteBase = 100;
let leitorAtivo = false;

const paginas = {
    home: `
        <div class="hero-modular-banner">
            <h1>O Núcleo NEXUS</h1>
            <div class="subtitulo-filosofico">"A máquina não isola o homem, ela expande a fronteira do que ele pode conhecer." — Visão Tecnológica</div>
            <button class="btn-cta" onclick="navegar('ia')">Iniciar Jornada de Conhecimento</button>
        </div>
        <div class="modulo-card-tela">
            <h2>Bem-vindo ao Ecossistema</h2>
            <p>O NEXUS foi reformulado para ser mais que um repositório: é uma experiência imersiva de aprendizado sobre tecnologia moderna. Explore nossos módulos abaixo.</p>
            
            <h3>O que você vai encontrar aqui:</h3>
            <div class="container-flashcards-modular">
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">🤖 I.A. Avançada</div>
                        <div class="face-modular-verso">Aprenda como redes neurais e Transformers processam a linguagem humana.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">🎭 Mídias & Deepfakes</div>
                        <div class="face-modular-verso">Entenda como a mídia sintética é criada e como combater as fake news visuais.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">🔒 Segurança Real</div>
                        <div class="face-modular-verso">Teste senhas na prática e aprenda protocolos modernos de defesa cibernética.</div>
                    </div>
                </div>
            </div>
        </div>
    `,
    ia: `
        <div class="hero-modular-banner">
            <h1>Inteligência Artificial</h1>
            <div class="subtitulo-filosofico">"A inteligência é a capacidade de se adaptar à mudança." — Stephen Hawking</div>
        </div>
        <div class="modulo-card-tela">
            <h2>Sistemas Cognitivos Artificiais</h2>
            <p>A IA moderna parou de apenas "seguir regras" para começar a "reconhecer padrões", simulando a intuição matemática humana.</p>
            
            <div class="container-flashcards-modular">
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">Redes Neurais</div>
                        <div class="face-modular-verso">Inspiradas no cérebro. Camadas de "neurônios" matemáticos que ajustam pesos para aprender com erros.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">LLMs (ChatGPT)</div>
                        <div class="face-modular-verso">Modelos de Linguagem Grande. Preveem a próxima palavra com base no contexto absoluto de uma frase.</div>
                    </div>
                </div>
            </div>

            <div class="bloco-interativo-modulo" id="quiz-ia">
                <h3>Avaliação Cognitiva (Fase 1)</h3>
                <div class="pergunta-grupo" data-index="1">
                    <p>Qual tecnologia revolucionou o entendimento de textos por IA ao processar palavras simultaneamente?</p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'ia')">Arquitetura Transformer</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'ia')">Máquina de Escrever Analógica</button>
                </div>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:600;"></span>
            </div>
        </div>
    `,
    computadores: `
        <div class="hero-modular-banner">
            <h1>Sistemas Computacionais</h1>
            <div class="subtitulo-filosofico">"O hardware é a parte do computador que você chuta; o software é a que você xinga." — Arthur C. Clarke</div>
        </div>
        <div class="modulo-card-tela">
            <h2>A Base da Pirâmide Digital</h2>
            <p>Todo modelo complexo de IA ou segurança roda sobre uma base física: transistores microscópicos que ligam e desligam bilhões de vezes por segundo.</p>
            
            <div class="container-flashcards-modular">
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">Transistor</div>
                        <div class="face-modular-verso">A invenção mais importante do século XX. Funciona como um interruptor eletrônico para os zeros e uns.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">SSD vs HDD</div>
                        <div class="face-modular-verso">SSDs usam chips de memória flash (rápidos, sem partes móveis). HDDs usam discos magnéticos giratórios (mais lentos).</div>
                    </div>
                </div>
            </div>

            <div class="bloco-interativo-modulo" id="quiz-computadores">
                <h3>Auditoria de Hardware (Fase 1)</h3>
                <div class="pergunta-grupo" data-index="1">
                    <p>Qual o componente central que executa as instruções matemáticas (o "cérebro" da máquina)?</p>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'computadores')">Placa Mãe (Motherboard)</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'computadores')">CPU (Processador)</button>
                </div>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:600;"></span>
            </div>
        </div>
    `,
    seguranca: `
        <div class="hero-modular-banner">
            <h1>Segurança Cibernética</h1>
            <div class="subtitulo-filosofico">"A única maneira de ter um sistema seguro é desligá-lo e enterrá-lo em um bloco de concreto." — Gene Spafford</div>
        </div>
        <div class="modulo-card-tela">
            <h2>Laboratório de Vulnerabilidades</h2>
            <p>O elo mais fraco da segurança digital raramente é a criptografia do servidor, mas sim o comportamento e as credenciais do usuário humano.</p>

            <div class="bloco-interativo-modulo">
                <h3>Simulador de Força Bruta</h3>
                <p>O que faz uma senha ser forte? Tamanho (+12 caracteres), números, símbolos e mistura de maiúsculas/minúsculas.</p>
                <input type="password" class="input-modular-campo" id="input-senha" oninput="analisarSenhaProfunda(this.value)" placeholder="Digite uma senha para testar...">
                <div id="dicas-senha" style="font-size:0.9rem; margin-top:10px; color:#64748b;"></div>
                <div id="resultado-senha" style="margin-top:15px; font-weight:700; font-size:1.1rem; color:var(--texto-cinza)">Pronto para análise.</div>
                <button class="btn-reset" onclick="resetarSenha()">Limpar Simulador</button>
            </div>
        </div>
    `,
    deepfakes: `
        <div class="hero-modular-banner">
            <h1>Mídias e Deepfakes</h1>
            <div class="subtitulo-filosofico">"Uma mentira dá a volta ao mundo antes que a verdade tenha tempo de calçar as botas." — Mark Twain</div>
        </div>
        <div class="modulo-card-tela">
            <h2>A Era da Mídia Sintética</h2>
            <p>A manipulação de mídia não é mais apenas Photoshop. Hoje, modelos de IA conseguem sintetizar áudio, vídeo e texto indetectáveis a olho nu.</p>
            <br>
            <h3>Como funciona um Deepfake?</h3>
            <p>Utiliza-se uma arquitetura chamada <strong>GAN (Rede Adversarial Generativa)</strong>. Uma rede de IA cria o vídeo falso (Gerador), enquanto outra tenta descobrir que é falso (Discriminador). Elas competem até que o Gerador crie algo tão perfeito que o Discriminador não consiga mais notar o erro.</p>

            <div class="container-flashcards-modular">
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">Voice Cloning</div>
                        <div class="face-modular-verso">Basta 3 segundos do seu áudio de WhatsApp para uma IA replicar sua voz e ligar para a sua família pedindo dinheiro.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">Como se proteger?</div>
                        <div class="face-modular-verso">Crie "Palavras de Segurança" familiares. Se alguém ligar pedindo dinheiro, pergunte a senha secreta da família.</div>
                    </div>
                </div>
            </div>
        </div>
    `,
    robotica: `
        <div class="hero-modular-banner">
            <h1>Robótica Avançada</h1>
            <div class="subtitulo-filosofico">"A ficção científica de hoje é a realidade mecânica de amanhã." — Isaac Asimov</div>
        </div>
        <div class="modulo-card-tela">
            <h2>Automação no Mundo Físico</h2>
            <p>A robótica une a capacidade lógica da IA com atuadores físicos, criando sistemas que podem operar no mundo real, de fábricas de carros a salas de cirurgia.</p>
            
            <div class="container-flashcards-modular">
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">Sensores LiDAR</div>
                        <div class="face-modular-verso">Emitem lasers invisíveis em 360º para que carros autônomos e robôs "vejam" o mundo em 3D.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">Cobots</div>
                        <div class="face-modular-verso">Robôs Colaborativos. Diferente dos antigos, eles têm sensores de toque e param se esbarrarem em um humano.</div>
                    </div>
                </div>
            </div>
        </div>
    `,
    extras: `
        <div class="hero-modular-banner">
            <h1>Documentos & Acervo</h1>
            <div class="subtitulo-filosofico">"A história da tecnologia é a história da humanidade." — Perspectiva Analítica</div>
        </div>
        <div class="modulo-card-tela">
            <h2>Acervo Histórico: O Antes e o Depois</h2>
            <div class="jornal-grid">
                <div class="jornal-artigo">
                    <h4>📰 O Passado: Dados de Papel</h4>
                    <p>No início dos anos 90, o vazamento de dados significava que alguém roubou um arquivo físico de aço. A privacidade era garantida pela dificuldade logística de mover papéis. Apenas governos tinham capacidade de espionagem em massa.</p>
                </div>
                <div class="jornal-artigo">
                    <h4>🚨 O Presente: Mega Vazamentos</h4>
                    <p>Hoje, bases com 200 milhões de CPFs, senhas e endereços são vendidas na Dark Web em arquivos de texto de poucos megabytes. A facilidade de replicação digital tornou a LGPD e a criptografia não apenas leis, mas escudos de sobrevivência.</p>
                </div>
            </div>

            <div class="bloco-interativo-modulo" style="margin-top: 3rem;">
                <h3>🎮 Minigame: O Decodificador</h3>
                <p>Descubra o código do servidor. Dica: O número da porta padrão da web (HTTP) somado ao número de bits em um byte.</p>
                <input type="number" id="input-game" class="input-modular-campo" placeholder="Insira o código numérico...">
                <button class="btn-cta" style="padding: 0.5rem 1rem;" onclick="testarJogo()">Hackear Sistema</button>
                <div id="resultado-game" style="margin-top:10px; font-weight:bold;"></div>
            </div>
        </div>
    `
};

function navegar(paginaAlvo) {
    const container = document.getElementById('conteudo-principal');
    if (container && paginas[paginaAlvo]) {
        container.innerHTML = paginas[paginaAlvo];
        window.scrollTo({ top: 0, behavior: 'smooth' });
        topicosExplorados.add(paginaAlvo);
        progressoGlobal = Math.min(100, topicosExplorados.size * 15);
        atualizarInterfaceGamificacao();
    }
}

function atualizarInterfaceGamificacao() {
    const barra = document.getElementById('progresso-interno');
    const badge = document.getElementById('badge-atual');
    if (barra && badge) {
        barra.style.width = \`\${progressoGlobal}%\`;
        if (progressoGlobal >= 90) badge.innerText = "Arquiteto Chefe";
        else if (progressoGlobal >= 50) badge.innerText = "Engenheiro Sênior";
        else badge.innerText = "Analista de Dados";
    }
}

function responderQuiz(botao, eCorreto, moduloId) {
    const grupoAtual = botao.parentElement;
    const blocoQuiz = document.getElementById(\`quiz-\${moduloId}\`);
    const feedback = blocoQuiz.querySelector('.resultado-quiz');
    
    if (eCorreto) {
        botao.style.backgroundColor = "var(--verde-sucesso)";
        botao.style.color = "white";
        feedback.innerText = "✔️ Resposta Exata! Você dominou este conceito.";
        feedback.style.color = "var(--verde-sucesso)";
    } else {
        botao.style.backgroundColor = "var(--vermelho-alerta)";
        botao.style.color = "white";
        feedback.innerText = "❌ Dados incorretos. Analise novamente o texto acima.";
        feedback.style.color = "var(--vermelho-alerta)";
        setTimeout(() => {
            botao.style.background = "var(--cinza-limpo)";
            botao.style.color = "var(--texto-escuro)";
        }, 1500);
    }
}

function analisarSenhaProfunda(senha) {
    const output = document.getElementById('resultado-senha');
    const dicas = document.getElementById('dicas-senha');
    if (!output) return;
    
    if (senha.length === 0) {
        output.innerText = "Pronto para análise.";
        dicas.innerText = "";
        return;
    }

    let forca = 0;
    let sugestoes = [];

    if (senha.length < 8) sugestoes.push("Aumente o tamanho (mínimo 8 caracteres).");
    else forca++;

    if (!/[A-Z]/.test(senha)) sugestoes.push("Adicione letras maiúsculas.");
    else forca++;

    if (!/[0-9]/.test(senha)) sugestoes.push("Adicione números.");
    else forca++;

    if (!/[!@#$%^&*(),.?":{}|<>|]/.test(senha)) sugestoes.push("Adicione símbolos especiais (!@#).");
    else forca++;

    dicas.innerHTML = sugestoes.length > 0 ? "<b>Como melhorar:</b><br> " + sugestoes.join("<br> - ") : "Senha estruturalmente perfeita.";

    if (forca <= 1) { output.innerText = "🔴 Risco Crítico (Senha Fraca)"; output.style.color = "var(--vermelho-alerta)"; }
    else if (forca <= 3) { output.innerText = "🟡 Risco Moderado (Senha Média)"; output.style.color = "#d97706"; }
    else { output.innerText = "🟢 Impenetrável (Senha Forte)"; output.style.color = "var(--verde-sucesso)"; }
}

function resetarSenha() {
    const input = document.getElementById('input-senha');
    if (input) {
        input.value = "";
        analisarSenhaProfunda("");
    }
}

function testarJogo() {
    const palpite = document.getElementById('input-game').value;
    const res = document.getElementById('resultado-game');
    // HTTP (80) + Bits in Byte (8) = 88
    if (palpite == 88) {
        res.innerText = "🟢 ACESSO CONCEDIDO! Resposta correta: 88.";
        res.style.color = "var(--verde-sucesso)";
    } else {
        res.innerText = "🔴 ACESSO NEGADO. Tente novamente.";
        res.style.color = "var(--vermelho-alerta)";
    }
}

function togglePainelAcessibilidade() {
    const painel = document.getElementById('painel-acessibilidade');
    if (painel) painel.style.display = (painel.style.display === 'flex') ? 'none' : 'flex';
}

function alterarFonte(direcao) {
    tamanhoFonteBase += (direcao * 10);
    if (tamanhoFonteBase < 80) tamanhoFonteBase = 80;
    if (tamanhoFonteBase > 150) tamanhoFonteBase = 150;
    document.body.style.fontSize = \`\${tamanhoFonteBase}%\`;
}

function toggleAltoContraste() { document.body.classList.toggle('alto-contraste'); }
function toggleDislexia() { document.body.classList.toggle('fonte-dislexia'); }
function toggleDaltonismo() { document.body.classList.toggle('modo-daltonismo'); }

function iniciarLeitorTela() {
    if (!('speechSynthesis' in window)) {
        alert("Seu navegador não suporta leitura de tela nativa.");
        return;
    }
    const btn = document.getElementById('btn-leitor');
    if (leitorAtivo) {
        window.speechSynthesis.cancel();
        leitorAtivo = false;
        btn.innerText = "🔊 Narrar Página";
    } else {
        const texto = document.getElementById('conteudo-principal').innerText;
        const narracao = new SpeechSynthesisUtterance(texto);
        narracao.lang = 'pt-BR';
        window.speechSynthesis.speak(narracao);
        leitorAtivo = true;
        btn.innerText = "🛑 Parar Narração";
        narracao.onend = () => { leitorAtivo = false; btn.innerText = "🔊 Narrar Página"; };
    }
}

function rolarTopo() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
function rolarRodape() { document.getElementById('rodape-portal')?.scrollIntoView({ behavior: 'smooth' }); }

window.onscroll = function() {
    const btnSubir = document.getElementById('btn-subir');
    const btnDescer = document.getElementById('btn-descer');
    if (btnSubir && btnDescer) {
        if (window.scrollY > 300) {
            btnSubir.classList.add('visivel');
            btnDescer.classList.add('visivel');
        } else {
            btnSubir.classList.remove('visivel');
            btnDescer.classList.remove('visivel');
        }
    }
};

window.onload = () => { navegar('home'); };