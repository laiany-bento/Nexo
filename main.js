let progressoGlobal = 10;
let topicosExplorados = new Set(['home']);
let tamanhoFonteBase = 100;

const paginas = {
    home: `
        <div class="hero-modular-banner">
            <h1>NEXUS</h1>
            <div class="subtitulo-filosofico">"Só sei que nada sei, mas a máquina calcula o que eu mal posso conceber." — Adaptação Epistemológica</div>
            <button class="btn-cta" onclick="navegar('ia')">Iniciar Exploração do Conhecimento</button>
        </div>

        <div class="modulo-card-tela">
            <h2>A Convergência Digital e o Impacto Social</h2>
            <p>A tecnologia computacional contemporânea processa e dita a evolução estrutural do mercado e das relações humanas. De sistemas mecânicos isolados a redes de inteligência artificial de larga escala, mapeamos os caminhos lógicos que transformaram dados brutos em patrimônio de conhecimento global.</p>
            
            <div class="grid-blocos-wireframe">
                <div class="bloco-wireframe-item" onclick="navegar('ia')">
                    <h3>🤖 História da IA</h3>
                    <p>A arquitetura de redes neurais artificiais e sistemas generativos modernos.</p>
                </div>
                <div class="bloco-wireframe-item" onclick="navegar('computadores')">
                    <h3>💻 Evolução de Sistemas</h3>
                    <p>O percurso físico da miniaturização do hardware e processamento de dados.</p>
                </div>
                <div class="bloco-wireframe-item" onclick="navegar('seguranca')">
                    <h3>🔒 Matriz de Segurança</h3>
                    <p>Protocolos de segurança defensiva contra engenharia social e vulnerabilidades digitais.</p>
                </div>
                <div class="bloco-wireframe-item" onclick="navegar('deepfakes')">
                    <h3>🎭 Mídia Sintética</h3>
                    <p>O impacto de simulações e deepfakes na validação de dados contemporâneos.</p>
                </div>
                <div class="bloco-wireframe-item" onclick="navegar('robotica')">
                    <h3>🦾 Engenharia Robótica</h3>
                    <p>A automação mecânica inteligente transformando indústrias e a medicina de precisão.</p>
                </div>
            </div>
        </div>
    `,
    ia: `
        <div class="hero-modular-banner">
            <h1>Inteligência Artificial</h1>
            <div class="subtitulo-filosofico">"A inteligência é o que você usa quando não sabe o que fazer." — Jean Piaget</div>
        </div>

        <div class="modulo-card-tela">
            <h2>Inteligência Artificial Integrada</h2>
            <p>Modelos de processamento autônomo projetados para emular a capacidade cognitiva analítica de tomada de decisão, diagnósticos avançados e decodificação contextual.</p>
            
            <h3>Cronologia do Desenvolvimento</h3>
            <div class="timeline-modular">
                <div class="timeline-item-modular">
                    <h4>1950 — Formulação do Teste de Turing</h4>
                    <p>Alan Turing conceitua metodologias de validação de inteligência em sistemas artificiais através de jogos de imitação estruturados.</p>
                </div>
                <div class="timeline-item-modular">
                    <h4>1956 — Convenção de Dartmouth</h4>
                    <p>Cunhagem do termo oficial por John McCarthy, formalizando a IA como disciplina acadêmica.</p>
                </div>
                <div class="timeline-item-modular">
                    <h4>1997 — Vitória do Deep Blue</h4>
                    <p>O supercomputador da IBM vence Garry Kasparov no xadrez através de força bruta e algoritmos táticos avançados.</p>
                </div>
                <div class="timeline-item-modular">
                    <h4>2012 — Revolução da AlexNet (Deep Learning)</h4>
                    <p>A rede neural convolucional de Geoffrey Hinton demonstra o poder do aprendizado profundo usando GPUs para visão computacional.</p>
                </div>
                <div class="timeline-item-modular">
                    <h4>Atualidade — Modelos de Linguagem de Larga Escala (LLMs)</h4>
                    <p>Arquiteturas baseadas em Transformers processam exabytes de texto, gerando código e raciocínio contextual.</p>
                </div>
            </div>

            <h3>Documentações Técnicas Dinâmicas (Passe o mouse para revelar)</h3>
            <div class="container-flashcards-modular">
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">O que define uma Rede Neural?</div>
                        <div class="face-modular-verso">Modelos computacionais matemáticos inspirados na estrutura biológica do cérebro humano, capazes de aprender por padrões de repetição de dados.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">O que são Transformers?</div>
                        <div class="face-modular-verso">Arquiteturas de aprendizado profundo baseadas em mecanismos de atenção, que calculam o peso e a relação de todas as palavras em uma frase simultaneamente.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">Diferença entre IA Forte e Fraca?</div>
                        <div class="face-modular-verso">A IA fraca resolve tarefas específicas (jogar xadrez, classificar e-mails). A IA forte (AGI) possuiria autoconsciência e intelecto humano geral generalizado.</div>
                    </div>
                </div>
            </div>

            <div class="bloco-interativo-modulo" id="quiz-ia">
                <h3>Avaliação Técnica de IA (5 Questões)</h3>
                <div class="pergunta-grupo" data-index="1">
                    <p><strong>1. Quem propôs o famoso "Jogo da Imitação" para testar a capacidade de pensamento de uma máquina?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'ia')">Alan Turing</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'ia')">John McCarthy</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="2">
                    <p><strong>2. Qual evento de 1956 é considerado o berço oficial da Inteligência Artificial?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'ia')">Projeto Manhattan</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'ia')">Conferência de Dartmouth</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="3">
                    <p><strong>3. Que tipo de aprendizado depende de um conjunto de dados previamente rotulados por humanos?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'ia')">Aprendizado Supervisionado</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'ia')">Aprendizado por Reforço</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="4">
                    <p><strong>4. Qual componente de hardware acelerou o Deep Learning devido ao seu processamento paralelo massivo?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'ia')">CPUs Single-Core</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'ia')">GPUs (Placas Gráficas)</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="5">
                    <p><strong>5. O mecanismo de "Atenção" revolucionou qual área da inteligência artificial moderna?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'ia')">Processamento de Linguagem Natural (Transformers)</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'ia')">Sistemas Mecânicos Hidráulicos</button>
                </div>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:500;"></span>
            </div>
        </div>
    `,
    computadores: `
        <div class="hero-modular-banner">
            <h1>Arquitetura de Sistemas</h1>
            <div class="subtitulo-filosofico">"O computador é o equivalente a uma bicicleta para as nossas mentes." — Steve Jobs</div>
        </div>

        <div class="modulo-card-tela">
            <h2>Evolução e Engenharia de Semicondutores</h2>
            <p>O desenvolvimento da computação moderna é regido pelas mudanças físicas estruturais dos componentes elementares de comutação lógica.</p>

            <table>
                <thead>
                    <tr>
                        <th>Geração</th>
                        <th>Componente Base</th>
                        <th>Características Principais</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1ª Geração (1940-1956)</td>
                        <td>Válvulas Eletrônicas</td>
                        <td>Consumo elétrico massivo, quebras frequentes, tamanho gigantesco (ENIAC).</td>
                    </tr>
                    <tr>
                        <td>2ª Geração (1956-1963)</td>
                        <td>Transistores</td>
                        <td>Menores, mais rápidos, eficientes e de estado sólido estável.</td>
                    </tr>
                    <tr>
                        <td>3ª Geração (1964-1971)</td>
                        <td>Circuitos Integrados</td>
                        <td>Pastilhas de Silício aglomerando milhares de transistores miniaturizados.</td>
                    </tr>
                    <tr>
                        <td>4ª Geração (1971-Presente)</td>
                        <td>Microprocessadores</td>
                        <td>CPUs completas em um único chip (Arquiteturas x86 e ARM).</td>
                    </tr>
                </tbody>
            </table>

            <h3>Documentações Técnicas Rápidas</h3>
            <div class="container-flashcards-modular">
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">O que prega a Lei de Moore?</div>
                        <div class="face-modular-verso">Formulada por Gordon Moore, previa que o número de transistores em um chip dobraria a cada dois anos, barateando custos de processamento.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">O que é Memória Cache?</div>
                        <div class="face-modular-verso">Uma memória estática ultrarrápida (SRAM) embutida na CPU que armazena os dados mais utilizados para evitar o gargalo da memória RAM principal.</div>
                    </div>
                </div>
            </div>

            <div class="bloco-interativo-modulo" id="quiz-computadores">
                <h3>Avaliação Técnica de Sistemas (5 Questões)</h3>
                <div class="pergunta-grupo" data-index="1">
                    <p><strong>1. Qual arquitetura conceitual introduziu o armazenamento conjunto de programas e dados na memória principal?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'computadores')">Arquitetura de Von Neumann</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'computadores')">Arquitetura Harvard Pura</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="2">
                    <p><strong>2. Qual componente físico substituiu as válvulas, inaugurando a segunda geração de computadores?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'computadores')">Capacitores de Cerâmica</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'computadores')">Transistores</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="3">
                    <p><strong>3. Unidade Lógica e Aritmética (ULA) e Unidade de Controle (UC) são as partes básicas de qual componente?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'computadores')">Processador (CPU)</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'computadores')">Disco Rígido (HD)</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="4">
                    <p><strong>4. Por que as memórias RAM são descritas como voláteis?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'computadores')">Perdem todos os dados quando a energia é desligada</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'computadores')">São feitas de gases semicondutores instáveis</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="5">
                    <p><strong>5. Sistemas embarcados modernos de smartphones utilizam amplamente qual arquitetura focada em eficiência térmica?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'computadores')">RISC (como arquiteturas ARM)</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'computadores')">CISC (como Intel de alta voltagem)</button>
                </div>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:500;"></span>
            </div>
        </div>
    `,
    seguranca: `
        <div class="hero-modular-banner">
            <h1>Segurança Cibernética</h1>
            <div class="subtitulo-filosofico">"Quem quer que troque a liberdade essencial por segurança temporária não merece nenhuma das duas." — Benjamin Franklin</div>
        </div>

        <div class="modulo-card-tela">
            <h2>Matriz de Defesa Ativa e Criptografia</h2>
            <p>O gerenciamento de vulnerabilidades digitais exige uma abordagem proativa, blindando o perímetro de hardware e conscientizando as camadas operacionais humanas.</p>

            <div class="bloco-interativo-modulo">
                <h3>Análise Preventiva: Força de Chaves de Acesso</h3>
                <p>Insira uma credencial analítica hipotética para avaliar a entropia criptográfica:</p>
                <input type="password" class="input-modular-campo" oninput="analisarSenha(this.value)" placeholder="Digite a credencial corporativa para validação...">
                <div id="resultado-senha" style="margin-top:1rem; font-weight:500; color:var(--texto-cinza)">Aguardando entrada de dados estruturais.</div>
            </div>

            <div class="bloco-interativo-modulo" id="quiz-seguranca">
                <h3>Avaliação de Resiliência Cibernética (5 Questões)</h3>
                <div class="pergunta-grupo" data-index="1">
                    <p><strong>1. Qual ataque manipula psicologicamente o usuário para induzir a entrega voluntária de chaves de acesso?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'seguranca')">Engenharia Social</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'seguranca')">Ataque DDoS por Força Bruta</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="2">
                    <p><strong>2. Qual o protocolo de criptografia assimétrica utiliza uma chave pública para codificar e uma chave privada para decodificar?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'seguranca')">RSA</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'seguranca')">AES-256 Simétrico</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="3">
                    <p><strong>3. Um ataque que criptografa os dados de uma empresa e exige resgate em criptomoedas é chamado de:</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'seguranca')">Spyware Comercial</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'seguranca')">Ransomware</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="4">
                    <p><strong>4. O que caracteriza um ataque do tipo "Man-in-the-Middle"?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'seguranca')">Interceptação clandestina de tráfego entre duas partes legítimas</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'seguranca')">Queda forçada de servidores web por acessos simultâneos</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="5">
                    <p><strong>5. A política de segurança de "Zero Trust" estabelece como princípio básico:</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'seguranca')">Nunca confiar, sempre verificar qualquer dispositivo interno ou externo</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'seguranca')">Liberar privilégios irrestritos aos administradores de rede</button>
                </div>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:500;"></span>
            </div>
        </div>
    `,
    deepfakes: `
        <div class="hero-modular-banner">
            <h1>Mídias Sintéticas</h1>
            <div class="subtitulo-filosofico">"A tecnologia tornou-se uma faca de dois gumes, ampliando nossa visão e obscurecendo nossa verdade." — Crítica Midiática Contemporânea</div>
        </div>

        <div class="modulo-card-tela">
            <h2>Manipulação Avançada de Vetores de Imagem</h2>
            <p>Através de Redes Adversariais Generativas (GANs), algoritmos conseguem sobrepor expressões faciais com fidelidade assustadora, forçando a segurança da informação a criar barreiras de análise forense.</p>

            <div class="bloco-interativo-modulo" id="quiz-deepfakes">
                <h3>Avaliação de Autenticidade Digital (5 Questões)</h3>
                <div class="pergunta-grupo" data-index="1">
                    <p><strong>1. Qual a estrutura de inteligência artificial de duas redes concorrentes usada para forjar deepfakes ultra-realistas?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'deepfakes')">GANs (Redes Adversariais Generativas)</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'deepfakes')">Árvores de Decisão Puras</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="2">
                    <p><strong>2. Qual das alternativas aponta uma anomalia biométrica comum usada para identificar deepfakes de vídeo rudimentares?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'deepfakes')">Frequência e sincronia inconsistente do piscar de olhos</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'deepfakes')">Resolução estrita em preto e branco nativo</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="3">
                    <p><strong>3. No ecossistema das GANs, qual o papel específico da rede 'Discriminadora'?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'deepfakes')">Gerar novas imagens sintéticas do zero</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'deepfakes')">Avaliar se a imagem criada é falsa ou autêntica</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="4">
                    <p><strong>4. Qual termo define a técnica de clonar a voz de uma pessoa com precisão usando arquivos de áudio de IA?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'deepfakes')">Voice Cloning / Audio Deepfake</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'deepfakes')">Filtro de Passa-Faixa Analógico</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="5">
                    <p><strong>5. A técnica que substitui o rosto de uma pessoa em um vídeo por outra mantendo as expressões originais chama-se:</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'deepfakes')">Face Swapping</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'deepfakes')">Renderização Poligonal por Vetor</button>
                </div>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:500;"></span>
            </div>
        </div>
    `,
    robotica: `
        <div class="hero-modular-banner">
            <h1>Sistemas Robóticos Expansos</h1>
            <div class="subtitulo-filosofico">"Dar vida à matéria inanimada por meio da mecânica lógica é a maior audácia do intelecto humano." — Ensaio sobre Cibernética</div>
        </div>

        <div class="modulo-card-tela">
            <h2>Engenharia Robótica, Cinematica e Automação</h2>
            <p>A robótica moderna transcendeu as simples esteiras mecânicas de montagem industrial fixa. Trata-se da integração profunda entre robótica móvel, sensores proprioceptivos tridimensionais, atuadores hidráulicos lineares de alta resposta e algoritmos de controle em tempo real executados diretamente na borda (Edge Computing).</p>
            
            <h3>Métricas e Setores de Adoção de Alta Tecnologia</h3>
            <p>O mercado de automação mecatrônica é estruturado por dados expressivos de desempenho e precisão geométrica milimétrica:</p>
            <ul>
                <li><strong>Graus de Liberdade (DoF):</strong> Braços robóticos contemporâneos operam com estruturas de 6 a 7 eixos coordenados, imitando o braço humano com precisão de repetição cinemática menor que 0,02 mm.</li>
                <li><strong>Sensores LiDAR e Visão Computacional:</strong> Robôs móveis autônomos (AMRs) utilizam feixes de laser pulsados para gerar nuvens de pontos 3D, mapeando depósitos e hospitais em tempo real sem a dependência de trilhos físicos ou guias magnéticas.</li>
                <li><strong>Robótica Médica:</strong> O sistema cirúrgico Da Vinci executa incisões microscópicas convertendo os tremores naturais das mãos do cirurgião em movimentos perfeitamente lineares e estáveis.</li>
            </ul>

            <h3>Cronologia dos Sistemas Mecanizados Autônomos</h3>
            <div class="timeline-modular">
                <div class="timeline-item-modular">
                    <h4>1961 — Unimate na Indústria Automotiva</h4>
                    <p>O primeiro robô industrial mecânico assume a linha de produção pesada de fundição de metal da General Motors.</p>
                </div>
                <div class="timeline-item-modular">
                    <h4>2000 — Popularização dos Sistemas de Higienização Doméstica</h4>
                    <p>A introdução de robôs aspiradores autônomos movidos por algoritmos de navegação randômica e sensores infravermelhos antichoque introduz a robótica no cotidiano civil.</p>
                </div>
                <div class="timeline-item-modular">
                    <h4>2015 — Robôs Humanoides Dinâmicos</h4>
                    <p>Sistemas bípede passam a empregar sensores de equilíbrio giroscópico e controle preditivo de modelo para saltar e navegar terrenos acidentados.</p>
                </div>
                <div class="timeline-item-modular">
                    <h4>Atualidade — Cobots (Robôs Colaborativos)</h4>
                    <p>Sistemas dotados de sensores de torque nas articulações, projetados para interromper o movimento ao menor toque, permitindo o trabalho seguro lado a lado com humanos.</p>
                </div>
            </div>

            <h3>Módulos de Fixação Pedagógica (Passe o mouse)</h3>
            <div class="container-flashcards-modular">
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">O que é Cinemática Inversa?</div>
                        <div class="face-modular-verso">O cálculo matemático que determina as equações de ângulos necessários nas articulações para que a ferramenta na ponta do robô atinja uma coordenada espacial específica.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">O que define os Atuadores?</div>
                        <div class="face-modular-verso">Os componentes responsáveis por converter energia (elétrica, hidráulica ou pneumática) em movimento mecânico real, funcionando como os músculos do robô.</div>
                    </div>
                </div>
                <div class="wrapper-card-modular">
                    <div class="card-interno-modular">
                        <div class="face-modular-frente">Função dos Sensores de Torque?</div>
                        <div class="face-modular-verso">Medem a força de resistência e impacto sofrida nas juntas, cruciais para a segurança em robôs colaborativos trabalhando perto de operadores.</div>
                    </div>
                </div>
            </div>

            <div class="bloco-interativo-modulo" id="quiz-robotica">
                <h3>Avaliação de Engenharia Robótica (5 Questões)</h3>
                <div class="pergunta-grupo" data-index="1">
                    <p><strong>1. Que termo define a quantidade de eixos independentes nos quais o braço de um robô articulado pode se mover?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'robotica')">Graus de Liberdade (DoF)</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'robotica')">Taxa de Atualização de Clock</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="2">
                    <p><strong>2. Qual tecnologia de mapeamento espacial emite pulsos de laser para guiar robôs móveis autônomos?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'robotica')">Bluetooth de Baixa Energia</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'robotica')">LiDAR</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="3">
                    <p><strong>3. Como são classificados os robôs industriais modernos dotados de sensores de força sensíveis feitos para cooperar sem barreiras com os operários?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'robotica')">Cobots (Robôs Colaborativos)</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'robotica')">Sistemas Autônomos Hidráulicos Isolados</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="4">
                    <p><strong>4. Qual o componente mecânico realiza a conversão direta de comandos elétricos da CPU em movimentos físicos angulares precisos?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'robotica')">Servo-Motor / Atuador</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'robotica')">Barramento de Endereço Estático</button>
                </div>
                <div class="pergunta-grupo" style="display:none;" data-index="5">
                    <p><strong>5. As famosas Três Leis da Robótica, que influenciaram a ética de programação de sistemas reais, pertencem originalmente à literatura de qual autor?</strong></p>
                    <button class="opcao-modular" onclick="responderQuiz(this, true, 'robotica')">Isaac Asimov</button>
                    <button class="opcao-modular" onclick="responderQuiz(this, false, 'robotica')">Arthur C. Clarke</button>
                </div>
                <span class="resultado-quiz" style="display:block; margin-top:1rem; font-weight:500;"></span>
            </div>
        </div>
    `,
    extras: `
        <div class="hero-modular-banner">
            <h1>Documentação Geral</h1>
            <div class="subtitulo-filosofico">"Informação é dados dotados de relevância e propósito." — Peter Drucker</div>
        </div>

        <div class="modulo-card-tela">
            <h2>Repositório e Glossário de Dados</h2>
            <div class="bloco-wireframe-item" onclick="expandirTermo(this)" style="cursor:pointer; margin-bottom: 0.5rem;">
                <strong>⚡ Algoritmo</strong>
                <p style="display:none; margin-top:0.5rem; color:var(--texto-cinza);">Estrutura finita de instruções lógicas sequenciais para tratamento de fluxos de dados de forma determinística.</p>
            </div>
            <div class="bloco-wireframe-item" onclick="expandirTermo(this)" style="cursor:pointer; margin-bottom: 0.5rem;">
                <strong>🧠 Redes GANs (Adversariais)</strong>
                <p style="display:none; margin-top:0.5rem; color:var(--texto-cinza);">Arquitetura dupla de aprendizado profundo onde redes geradoras e discriminadoras disputam realismo estatístico de mídia.</p>
            </div>

            <h3 style="margin-top:2rem;">Matriz de Conquistas Analíticas</h3>
            <div class="grid-blocos-wireframe">
                <div class="bloco-wireframe-item" id="conq-1">
                    <h4>📊 Módulo Inicial Validado</h4>
                    <p>O ecossistema registrou sua primeira resposta correta em quizzes.</p>
                </div>
                <div class="bloco-wireframe-item" id="conq-2">
                    <h4>🌐 Mapeamento Completo</h4>
                    <p>Visite todas as seções corporativas para liberar este registro de auditoria.</p>
                </div>
                <div class="bloco-wireframe-item" id="conq-3">
                    <h4>🔐 Analista de Criptografia</h4>
                    <p>Gere e teste uma senha de alta entropia no simulador de segurança.</p>
                </div>
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
        
        if (progressoGlobal > 10 && paginaAlvo === 'extras') {
            const c1 = document.getElementById('conq-1');
            if (c1) c1.style.borderLeft = "4px solid var(--verde-sucesso)";
        }

        if (topicosExplorados.size >= 6) {
            const conq2 = document.getElementById('conq-2');
            if (conq2) conq2.style.borderLeft = "4px solid var(--verde-sucesso)";
            if (progressoGlobal < 60) {
                progressoGlobal = 60;
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
        if (progressoGlobal >= 100) badge.innerText = "Especialista";
        else if (progressoGlobal >= 60) badge.innerText = "Auditor";
        else badge.innerText = "Analista";
    }
}

// Mecânica de Quiz Multi-Estágio para 5 Perguntas Ordenadas por Tema
function responderQuiz(botao, eCorreto, moduloId) {
    const grupoAtual = botao.parentElement;
    const indexAtual = parseInt(grupoAtual.getAttribute('data-index'));
    const blocoQuiz = document.getElementById(`quiz-${moduloId}`);
    const feedback = blocoQuiz.querySelector('.resultado-quiz');
    
    if (eCorreto) {
        botao.style.backgroundColor = "var(--verde-sucesso)";
        botao.style.color = "white";
        
        setTimeout(() => {
            grupoAtual.style.display = "none";
            const proximoGrupo = blocoQuiz.querySelector(`[data-index="${indexAtual + 1}"]`);
            
            if (proximoGrupo) {
                proximoGrupo.style.display = "block";
                feedback.innerText = `Questão ${indexAtual} validada. Avance para a próxima fase.`;
                feedback.style.color = "var(--azul-royal)";
            } else {
                feedback.innerText = "🟢 Módulo de Quiz Concluído! 100% de precisão operacional alcançada.";
                feedback.style.color = "var(--verde-sucesso)";
                progressoGlobal += 20;
                if (progressoGlobal > 100) progressoGlobal = 100;
                atualizarInterfaceGamificacao();
            }
        }, 800);
    } else {
        botao.style.backgroundColor = "var(--vermelho-alerta)";
        botao.style.color = "white";
        feedback.innerText = "🔴 Inconsistência de dados. Tente responder novamente o parâmetro correto.";
        feedback.style.color = "var(--vermelho-alerta)";
        setTimeout(() => {
            botao.style.background = "var(--branco)";
            botao.style.color = "var(--texto-escuro)";
        }, 1200);
    }
}

function analisarSenha(senha) {
    const output = document.getElementById('resultado-senha');
    if (!output) return;
    
    if (senha.length === 0) {
        output.innerText = "Aguardando entrada de dados estruturais.";
        output.style.color = "var(--texto-cinza)";
        return;
    }
    const temLetras = /[a-zA-Z]/.test(senha);
    const temNumeros = /[0-9]/.test(senha);
    const temEspeciais = /[!@#$%^&*(),.?":{}|<>|]/.test(senha);

    if (senha.length >= 10 && temLetras && temNumeros && temEspeciais) {
        output.innerText = "🟢 Matriz de Segurança: ENTROPIA MÁXIMA DETECTADA.";
        output.style.color = "var(--verde-sucesso)";
        progressoGlobal = 100;
        atualizarInterfaceGamificacao();
    } else {
        output.innerText = "🔴 Matriz de Segurança: ALGORITMO FRÁGIL. Requer maior complexidade.";
        output.style.color = "var(--vermelho-alerta)";
    }
}

function expandirTermo(elemento) {
    const p = elemento.querySelector('p');
    if (p) p.style.display = (p.style.display === 'block') ? 'none' : 'block';
}

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

function rolarTopo() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
function rolarRodape() { document.getElementById('rodape-portal')?.scrollIntoView({ behavior: 'smooth' }); }

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