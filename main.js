let progressoGlobal = 20;
let topicosExplorados = new Set(['home']);
let tamanhoFonteBase = 100;

const paginas = {
    home: `
        <section class="hero-dark-section">
            <h1>NEXUS<span class="logo-ponto">.</span></h1>
            <p>Infraestrutura analítica sobre a evolução da computação, inteligência integrada e segurança cibernética global.</p>
            <button class="btn-cta" onclick="navegar('ia')">Iniciar Análise Tecnológica</button>
        </section>

        <section class="secao-conteudo-clara">
            <div style="max-width:1200px; margin:0 auto;">
                <h2>A Convergência Digital e o Impacto Social</h2>
                <p>A tecnologia computacional contemporânea processa e dita a evolução estrutural do mercado e das relações humanas. De sistemas mecânicos isolados a redes de inteligência artificial de larga escala, mapeamos os caminhos lógicos que transformaram dados brutos em patrimônio de conhecimento global.</p>
                
                <div class="grid-nexus">
                    <div class="card-nexus-clean" onclick="navegar('ia')">
                        <h3>🤖 História da IA</h3>
                        <p>A arquitetura de redes neurais artificiais e sistemas generativos modernos.</p>
                    </div>
                    <div class="card-nexus-clean" onclick="navegar('computadores')">
                        <h3>💻 Evolução de Sistemas</h3>
                        <p>O percurso físico da miniaturização do hardware e processamento de dados.</p>
                    </div>
                    <div class="card-nexus-clean" onclick="navegar('seguranca')">
                        <h3>🔒 Matriz de Segurança</h3>
                        <p>Protocolos de segurança defensiva contra engenharia social e vulnerabilidades digitais.</p>
                    </div>
                    <div class="card-nexus-clean" onclick="navegar('deepfakes')">
                        <h3>🎭 Limiares da Mídia Sintética</h3>
                        <p>O impacto de simulações e deepfakes na validação de dados contemporâneos.</p>
                    </div>
                    <div class="card-nexus-clean" onclick="navegar('robotica')">
                        <h3>🦾 Engenharia Robótica</h3>
                        <p>A automação mecânica inteligente transformando indústrias e a medicina de precisão.</p>
                    </div>
                </div>

                <div style="background:var(--cinza-limpo); padding:2rem; border-radius:6px; margin-top:2rem; border:1px solid rgba(0, 102, 255, 0.15);">
                    <h3>📊 Indicador Histórico Diário</h3>
                    <p id="curiosidade-texto" style="margin-bottom:0; color:var(--texto-escuro);">O ENIAC ocupava aproximadamente 167 m² e pesava cerca de 27 toneladas em sua estrutura valvulada primordial.</p>
                </div>

                <div style="background:var(--cinza-limpo); padding:3rem; border-radius:6px; margin-top:3rem; text-align:center; border: 1px dashed var(--texto-cinza);">
                    <h3>Receber Boletins Técnicos</h3>
                    <p style="color:var(--texto-cinza); font-size:0.95rem;">Inscreva seu e-mail corporativo para análises conjunturais semanais sobre computação e segurança.</p>
                    <div style="display:flex; gap:12px; justify-content:center; max-width:550px; margin:1.5rem auto 0 auto; flex-wrap:wrap;">
                        <input type="email" placeholder="Endereço de e-mail institucional..." style="flex:1; padding:0.8rem; border-radius:4px; border:1px solid rgba(0,0,0,0.15); min-width:250px;" aria-label="E-mail profissional">
                        <button class="btn-cta" onclick="alert('Registro institucional efetuado no banco de dados.')">Cadastrar</button>
                    </div>
                </div>
            </div>
        </section>
    `,
    ia: `
        <section class="hero-dark-section">
            <h1>Inteligência Artificial</h1>
            <p>Mapeamento de modelos de processamento autônomo e ecossistemas cognitivos.</p>
        </section>

        <section class="secao-conteudo-clara">
            <h2>Inteligência Artificial Integrada</h2>
            <p>Modelos de processamento autônomo projetados para emular a capacidade cognitiva analítica de tomada de decisão, diagnósticos avançados e decodificação contextual.</p>
            
            <h3>Cronologia do Desenvolvimento</h3>
            <div class="timeline-nexus">
                <div class="timeline-item-nexus">
                    <h4>1950 — Formulação do Teste de Turing</h4>
                    <p>Alan Turing conceitua metodologias de validação de inteligência em sistemas artificiais através de jogos de imitação estruturados.</p>
                </div>
                <div class="timeline-item-nexus">
                    <h4>1956 — Convenção de Dartmouth</h4>
                    <p>Estabelecimento formal e acadêmico do termo inteligência artificial cunhado por John McCarthy.</p>
                </div>
                <div class="timeline-item-nexus">
                    <h4>1997 — Processamento de Alto Desempenho</h4>
                    <p>O supercomputador Deep Blue da IBM executa análises combinatórias complexas e vence o campeonato mundial de xadrez.</p>
                </div>
                <div class="timeline-item-nexus">
                    <h4>2010 — Expansão de Massas de Dados (Big Data)</h4>
                    <p>A abundância de dados de infraestrutura e o processamento paralelo aceleram o Machine Learning profundo.</p>
                </div>
                <div class="timeline-item-nexus">
                    <h4>Atualidade — Redes Autônomas Generativas</h4>
                    <p>Ecossistemas neurais de larga escala automatizam processos lógicos, revisões de código e desenvolvimento globais.</p>
                </div>
            </div>

            <h3>Aplicações Tecnológicas Reais</h3>
            <ul>
                <li><strong>Processamento de Linguagem Natural:</strong> Modelos integrados de conversação contextual analítica.</li>
                <li><strong>Biometria Computacional:</strong> Redes de segurança para reconhecimento e rastreamento em tempo real.</li>
                <li><strong>Sistemas Especialistas Clínicos:</strong> Algoritmos de mapeamento e predição de diagnósticos por imagem.</li>
            </ul>

            <blockquote>A inteligência artificial transformou-se no principal ativo de aceleração analítica em diagnósticos por imagens no setor de saúde global.</blockquote>

            <h3>Documentações Técnicas Rápidas (Toque para girar)</h3>
            <div class="container-flashcards">
                <div class="flashcard-wrapper" onclick="girarCard(this)">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">Definição de IA?</div>
                        <div class="flashcard-back">Simulação algorítmica de processos cognitivos humanos por sistemas de software.</div>
                    </div>
                </div>
                <div class="flashcard-wrapper" onclick="girarCard(this)">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">O que é Machine Learning?</div>
                        <div class="flashcard-back">Subcampo de computação focado no aprendizado estatístico por meio de volumes de dados.</div>
                    </div>
                </div>
                <div class="flashcard-wrapper" onclick="girarCard(this)">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">Origem do Termo?</div>
                        <div class="flashcard-back">O cientista John McCarthy durante a histórica Conferência de Dartmouth em 1956.</div>
                    </div>
                </div>
            </div>

            <div class="interactive-box-clean">
                <h3>Avaliação de Absorção Técnica</h3>
                <p>Em qual marco histórico a inteligência artificial validou sua superioridade em análises de lógica matemática complexa frente ao xadrez mundial?</p>
                <button class="opcao-clean" onclick="validarQuiz(this, false)">Conferência de Dartmouth em 1956</button>
                <button class="opcao-clean" onclick="validarQuiz(this, true)">Partida do Supercomputador Deep Blue em 1997</button>
                <button class="opcao-clean" onclick="validarQuiz(this, false)">Publicação do Teste de Turing em 1950</button>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:500;"></span>
            </div>
        </section>
    `,
    computadores: `
        <section class="hero-dark-section">
            <h1>Arquitetura de Computadores</h1>
            <p>A linha evolutiva dos hardwares e processadores em escala global.</p>
        </section>

        <section class="secao-conteudo-clara">
            <h2>Evolução e Arquitetura de Computadores</h2>
            <p>A história das máquinas de processamento é pautada pelo princípio da miniaturização de semicondutores e otimização de ciclos lógicos.</p>

            <h3>Gerações Estruturais de Hardware</h3>
            <div class="timeline-nexus">
                <div class="timeline-item-nexus">
                    <h4>Primeira Etapa — Válvulas Termoiônicas</h4>
                    <p>Sistemas macroestruturais com alto consumo térmico dedicados a fins puramente criptográficos ou militares.</p>
                </div>
                <div class="timeline-item-nexus">
                    <h4>Segunda Etapa — Transistores de Estado Sólido</h4>
                    <p>Substituição do vácuo por semicondutores físicos, reduzindo drasticamente as taxas de falha mecânica.</p>
                </div>
                <div class="timeline-item-nexus">
                    <h4>Terceira Etapa — Microcircuitos Integrados</h4>
                    <p>Impressão de múltiplos transistores em lâminas de silício, dando origem aos sistemas operacionais primitivos.</p>
                </div>
                <div class="timeline-item-nexus">
                    <h4>Quarta Etapa — Microprocessadores de Larga Escala</h4>
                    <p>Centralização de uma unidade lógica de processamento em um único invólucro (chip), viabilizando a computação pessoal.</p>
                </div>
            </div>

            <table style="width:100%; border-collapse: collapse; margin: 2rem 0; font-size:0.95rem;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--azul-vibrante); text-align: left; background: var(--cinza-limpo)">
                        <th style="padding: 12px;">Métrica Operacional</th>
                        <th style="padding: 12px;">Arquiteturas Primitivas (ENIAC)</th>
                        <th style="padding: 12px;">Sistemas Contemporâneos (Microchips)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid rgba(0,0,0,0.05);">
                        <td style="padding: 12px; font-weight:500;">Escala Espacial</td>
                        <td style="padding: 12px; color:var(--vermelho-alerta)">Macroestruturas (Salas dedicadas de 167m²)</td>
                        <td style="padding: 12px; color:var(--verde-sucesso)">Microscópica (Nanômetros incorporados)</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; font-weight:500;">Eficiência Energética</td>
                        <td style="padding: 12px; color:var(--vermelho-alerta)">Consumo massivo de energia térmica (Válvulas)</td>
                        <td style="padding: 12px; color:var(--verde-sucesso)">Baixa voltagem com alta estabilidade lógica</td>
                    </tr>
                </tbody>
            </table>

            <h3>Documentações Técnicas (Toque para girar)</h3>
            <div class="container-flashcards">
                <div class="flashcard-wrapper" onclick="girarCard(this)">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">O que foi o ENIAC?</div>
                        <div class="flashcard-back">O marco inicial dos computadores digitais operando em escala militar.</div>
                    </div>
                </div>
                <div class="flashcard-wrapper" onclick="girarCard(this)">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">O que é Microprocessador?</div>
                        <div class="flashcard-back">A CPU completa integrada de forma micrométrica em uma pastilha de silício.</div>
                    </div>
                </div>
            </div>

            <div class="interactive-box-clean">
                <h3>Validação Estrutural</h3>
                <p>Qual componente de hardware físico marca a transição direta para a Segunda Geração de computadores?</p>
                <button class="opcao-clean" onclick="validarQuiz(this, false)">Válvulas Eletrônicas</button>
                <button class="opcao-clean" onclick="validarQuiz(this, true)">Transistores</button>
                <button class="opcao-clean" onclick="validarQuiz(this, false)">Circuitos Integrados</button>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:500;"></span>
            </div>
        </section>
    `,
    seguranca: `
        <section class="hero-dark-section">
            <h1>Segurança Cibernética</h1>
            <p>Protocolos defensivos e blindagem contra vetores de vulnerabilidade ativos.</p>
        </section>

        <section class="secao-conteudo-clara">
            <h2>Matriz de Segurança Cibernética</h2>
            <p>Aplicação de metodologias defensivas ativas para blindar redes de dados contra infiltrações de códigos maliciosos e ações de engenharia social.</p>

            <h3>Vetores de Vulnerabilidade Comuns</h3>
            <ul>
                <li><strong>Phishing Estruturado:</strong> Dispersão de comunicados digitais fraudulentos estruturados para capturar chaves de acesso.</li>
                <li><strong>Malware Corporativo:</strong> Agentes de software hostis que infectam barramentos internos para sequestro de dados.</li>
                <li><strong>Engenharia Social:</strong> Manipulação comportamental focada em induzir o colaborador ao vazamento de dados confidenciais.</li>
            </ul>

            <div class="interactive-box-clean">
                <h3>Análise Preventiva: Força de Chaves de Acesso</h3>
                <p>Abaixo, insira um modelo de credencial fictícia para checagem algorítmica de entropia:</p>
                <input type="password" class="input-formal" oninput="analisarSenha(this.value)" placeholder="Inserir credencial analítica...">
                <div id="resultado-senha" style="margin-top:1rem; font-weight:500; color:var(--texto-cinza)">Insira dados para execução do algoritmo.</div>
            </div>

            <div class="interactive-box-clean">
                <h3>Validação de Protocolos</h3>
                <p>Se uma infraestrutura bancária solicita alteração urgente de dados cadastrais via links externos, o analista deve classificar o ato como possível:</p>
                <button class="opcao-clean" onclick="validarQuiz(this, true)">Phishing por Engenharia Social</button>
                <button class="opcao-clean" onclick="validarQuiz(this, false)">Injeção Direta de Criptografia</button>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:500;"></span>
            </div>
        </section>
    `,
    deepfakes: `
        <section class="hero-dark-section">
            <h1>Mídias Sintéticas</h1>
            <p>O impacto das redes adversariais generativas na veracidade documental.</p>
        </section>

        <section class="secao-conteudo-clara">
            <h2>Mídias Sintéticas e Deepfakes</h2>
            <p>Análise de inteligências generativas voltadas para a adulteração e criação contextual de arquivos de áudio e vídeo sob redes adversariais.</p>

            <div class="grid-nexus">
                <div class="card-nexus-clean">
                    <h4>🟢 Aplicação Comercial Legítima</h4>
                    <p>Dublagens dinâmicas automatizadas, restaurações de fitas históricas danificadas e efeitos cinematográficos de alta fidelidade.</p>
                </div>
                <div class="card-nexus-clean">
                    <h4>🔴 Vetores de Risco Estratégico</h4>
                    <p>Falsificação de declarações institucionais oficiais, fraudes por representação biométrica e desestabilização de veracidade informativa.</p>
                </div>
            </div>

            <div class="interactive-box-clean" style="text-align:center;">
                <h3>🕵️ Simulador Analítico de Mídia</h3>
                <p>Um arquivo de vídeo corporativo apresenta oscilações inexplicadas de iluminação ao redor do pescoço e uma taxa de piscada ocular nula em um anúncio financeiro de alta rentabilidade imediata. Qual o diagnóstico da análise?</p>
                <div style="display:flex; gap:1rem; justify-content:center; margin-top:1.5rem;">
                    <button class="btn-cta" onclick="alert('Análise Correta. Padrões inconsistentes e promessas fora da curva indicam manipulação sintética.')">Mídia Manipulada (Deepfake)</button>
                    <button class="btn-cta" style="background-color:var(--texto-cinza)" onclick="alert('Diagnóstico Incorreto. Falhas físicas estruturais apontam anomalias artificiais.')">Mídia Autêntica</button>
                </div>
            </div>
        </section>
    `,
    robotica: `
        <section class="hero-dark-section">
            <h1>Sistemas Robóticos</h1>
            <p>A integração entre barramentos lógicos e automação eletromecânica espacial.</p>
        </section>

        <section class="secao-conteudo-clara">
            <h2>Sistemas Robóticos Mecanizados</h2>
            <p>Fusão de hardware dinâmico e algoritmos lógicos para automação física e manipulação espacial controlada por software.</p>

            <h3>Eixos de Atuação Industrial e Civil</h3>
            <ul>
                <li><strong>Medicina de Alta Precisão:</strong> Sondas robóticas cirúrgicas guiadas de forma remota e micrométrica.</li>
                <li><strong>Automação Logística:</strong> Frotas autônomas e braços articulados de esteiras de montagem pesada.</li>
                <li><strong>Exploração Espacial:</strong> Veículos autônomos parametrizados para mapeamento topográfico planetário severo.</li>
            </ul>

            <div class="interactive-box-clean">
                <h3>Validação Operacional</h3>
                <p>Qual categoria de robôs inteligentes obteve adoção em larga escala nas rotinas civis residenciais nas últimas décadas?</p>
                <button class="opcao-clean" onclick="validarQuiz(this, true)">Sistemas Autônomos de Higienização (Aspiradores Robóticos)</button>
                <button class="opcao-clean" onclick="validarQuiz(this, false)">Androides Humanoides Industriais de Manuseio</button>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:500;"></span>
            </div>
        </section>
    `,
    extras: `
        <section class="hero-dark-section">
            <h1>Documentação Geral</h1>
            <p>Repositórios analíticos, glossário de termos e indicadores consolidados.</p>
        </section>

        <section class="secao-conteudo-clara">
            <h2>Documentação e Repositório de Dados</h2>
            <p>Clique sobre os conceitos estruturais para exibição da nota técnica descritiva:</p>
            
            <div class="glossario-termo" onclick="expandirTermo(this)" style="background:var(--cinza-limpo); padding:1rem; margin:0.5rem 0; border-radius:4px; cursor:pointer; border-left:3px solid var(--azul-escuro)">
                <strong>⚡ Algoritmo</strong>
                <p style="display:none; margin-top:0.5rem; color:var(--texto-cinza);">Estrutura finita de instruções lógicas sequenciais para tratamento e resolução de fluxos de dados.</p>
            </div>
            <div class="glossario-termo" onclick="expandirTermo(this)" style="background:var(--cinza-limpo); padding:1rem; margin:0.5rem 0; border-radius:4px; cursor:pointer; border-left:3px solid var(--azul-escuro)">
                <strong>🧠 Redes GANs (Adversariais)</strong>
                <p style="display:none; margin-top:0.5rem; color:var(--texto-cinza);">Arquitetura dupla de aprendizado profundo onde redes geradoras e discriminadoras disputam para refinar a fidelidade de mídias sintéticas.</p>
            </div>

            <h3 style="margin-top:3rem;">Indicadores Operacionais Globais</h3>
            <div class="grid-nexus">
                <div class="card-nexus-clean" style="border-top:3px solid var(--azul-vibrante)">
                    <h3 style="font-size:2.5rem;">85%</h3>
                    <p>Dos fluxos de infraestrutura fabril mundiais migraram para automações digitais de controle.</p>
                </div>
                <div class="card-nexus-clean" style="border-top:3px solid var(--azul-escuro)">
                    <h3 style="font-size:2.5rem;">+150B</h3>
                    <p>De nós de conexões ativas estimadas para o ecossistema global da internet das coisas (IoT).</p>
                </div>
            </div>

            <h3>Matriz de Conquistas Analíticas</h3>
            <div class="grid-nexus">
                <div class="card-conquista unlocked-mock" id="conq-1">
                    <span style="font-size:1.5rem;">📊</span>
                    <div>
                        <h4>Módulo Inicial Validado</h4>
                        <p>O ecossistema registrou sua primeira resposta correta em quizzes.</p>
                    </div>
                </div>
                <div class="card-conquista" id="conq-2">
                    <span style="font-size:1.5rem;">🌐</span>
                    <div>
                        <h4>Mapeamento Completo</h4>
                        <p>Visite todas as seções corporativas para liberar este registro.</p>
                    </div>
                </div>
                <div class="card-conquista" id="conq-3">
                    <span style="font-size:1.5rem;">🔐</span>
                    <div>
                        <h4>Analista de Criptografia</h4>
                        <p>Gere e teste uma senha de alta entropia no simulador de segurança.</p>
                    </div>
                </div>
            </div>
        </section>
    `
};

function navegar(paginaAlvo) {
    const container = document.getElementById('conteudo-principal');
    if (container && paginas[paginaAlvo]) {
        container.innerHTML = paginas[paginaAlvo];
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        topicosExplorados.add(paginaAlvo);
        
        // Garante que o estado visual da conquista 1 persista como desbloqueado na página extras
        if (progressoGlobal > 20 && paginaAlvo === 'extras') {
            const c1 = document.getElementById('conq-1');
            if (c1) c1.classList.add('desbloqueada');
        }

        if (topicosExplorados.size >= 5) {
            const conq2 = document.getElementById('conq-2');
            if (conq2) conq2.classList.add('desbloqueada');
            if (progressoGlobal < 70) {
                progressoGlobal = 70;
                atualizarInterfaceGamificacao();
            }
        }
    }
}

function atualizarInterfaceGamificacao() {
    const barra = document.getElementById('progresso-interno');
    const badge = document.getElementById('badge-atual');
    if (barra && badge) {
        barra.style.width = `${progressoGlobal}%`;
        if (progressoGlobal >= 100) {
            badge.innerText = "Especialista em Sistemas";
        } else if (progressoGlobal >= 70) {
            badge.innerText = "Auditor de Criptografia";
        } else if (progressoGlobal >= 40) {
            badge.innerText = "Analista de Redes";
        }
    }
}

function validarQuiz(botao, eCorreto) {
    const container = botao.parentElement;
    const botoes = container.querySelectorAll('.opcao-clean');
    const feedback = container.querySelector('.resultado-quiz');
    
    botoes.forEach(btn => btn.disabled = true);
    
    if (eCorreto) {
        botao.style.backgroundColor = "var(--verde-sucesso)";
        botao.style.color = "white";
        feedback.innerText = "🟢 Validação Concluída. Resposta alinhada com as bases de dados históricas.";
        feedback.style.color = "var(--verde-sucesso)";
        
        progressoGlobal += 15;
        if (progressoGlobal > 100) progressoGlobal = 100;
        atualizarInterfaceGamificacao();
    } else {
        botao.style.backgroundColor = "var(--vermelho-alerta)";
        botao.style.color = "white";
        feedback.innerText = "🔴 Inconsistência identificada. Revise a documentação cronológica da seção.";
        feedback.style.color = "var(--vermelho-alerta)";
    }
}

function analisarSenha(senha) {
    const output = document.getElementById('resultado-senha');
    if (!output) return;
    
    if (senha.length === 0) {
        output.innerText = "Insira dados para execução do algoritmo.";
        output.style.color = "var(--texto-cinza)";
        return;
    }
    const temLetras = /[a-zA-Z]/.test(senha);
    const temNumeros = /[0-9]/.test(senha);
    const temEspeciais = /[!@#$%^&*(),.?":{}|<>|]/.test(senha);

    if (senha.length >= 10 && temLetras && temNumeros && temEspeciais) {
        output.innerText = "🟢 Matriz de Segurança: ALTA. Excelente padrão de proteção algorítmica.";
        output.style.color = "var(--verde-sucesso)";
        
        const conq3 = document.getElementById('conq-3');
        if (conq3) conq3.classList.add('desbloqueada');
        
        progressoGlobal = 100;
        atualizarInterfaceGamificacao();
    } else if (senha.length >= 6 && temLetras && temNumeros) {
        output.innerText = "🔵 Matriz de Segurança: MÉDIA. Recomendado adicionar caracteres especiais.";
        output.style.color = "var(--azul-vibrante)";
    } else {
        output.innerText = "🔴 Matriz de Segurança: VULNERÁVEL. Entropia inadequada.";
        output.style.color = "var(--vermelho-alerta)";
    }
}

// Mecânica do Efeito Flip Tridimensional nos Flashcards
function girarCard(cardWrapper) {
    cardWrapper.classList.toggle('flipped');
}

function expandirTermo(elemento) {
    const p = elemento.querySelector('p');
    if (p) p.style.display = (p.style.display === 'block') ? 'none' : 'block';
}

// Mecânica do Painel de Acessibilidade Retroatível
function togglePainelAcessibilidade() {
    const painel = document.getElementById('painel-acessibilidade');
    if (painel) painel.style.display = (painel.style.display === 'flex') ? 'none' : 'flex';
}

function alterarFonte(direcao) {
    tamanhoFonteBase += (direcao * 10);
    if (tamanhoFonteBase < 80) tamanhoFonteBase = 80;
    if (tamanhoFonteBase > 140) tamanhoFonteBase = 140;
    document.body.style.fontSize = `${tamanhoFonteBase}%`;
}

function toggleAltoContraste() { document.body.classList.toggle('alto-contraste'); }
function toggleDislexia() { document.body.classList.toggle('fonte-dislexia'); }
function toggleDaltonismo() { document.body.classList.toggle('modo-daltonismo'); }

// Mecânica de Rolagem Rápida Reativa
function rolarTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function rolarRodape() {
    const rodape = document.getElementById('rodape-portal');
    if (rodape) rodape.scrollIntoView({ behavior: 'smooth' });
}

// Evento para monitorar a rolagem e exibir a seta de voltar ao topo dinamicamente
window.onscroll = function() {
    const btnSubir = document.getElementById('btn-subir');
    if (btnSubir) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btnSubir.classList.add('visivel');
        } else {
            btnSubir.classList.remove('visivel');
        }
    }
};

window.onload = () => {
    navegar('home');
    atualizarInterfaceGamificacao();
};