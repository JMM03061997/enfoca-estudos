const SUBJECTS = [
 {
  "id": "portugues",
  "name": "Português",
  "icon": "✍️",
  "color": "#eaf3fb",
  "desc": "Interpretação, gramática, sintaxe e redação oficial.",
  "topics": [
   "Interpretação de textos",
   "Ortografia e acentuação",
   "Classes de palavras",
   "Concordância verbal e nominal",
   "Regência e crase",
   "Pontuação e coesão"
  ]
 },
 {
  "id": "logica",
  "name": "Raciocínio lógico",
  "icon": "🧩",
  "color": "#f1edfb",
  "desc": "Proposições, equivalências, porcentagem e resolução de problemas.",
  "topics": [
   "Proposições e conectivos",
   "Tabela-verdade",
   "Equivalências e negações",
   "Argumentação lógica",
   "Razão, proporção e porcentagem",
   "Sequências e problemas"
  ]
 },
 {
  "id": "sus",
  "name": "Legislação do SUS",
  "icon": "🏥",
  "color": "#e8f6f1",
  "desc": "Princípios, organização, participação social e legislação sanitária.",
  "topics": [
   "Constituição Federal: arts. 196 a 200",
   "Lei nº 8.080/1990",
   "Lei nº 8.142/1990",
   "Decreto nº 7.508/2011",
   "Princípios e diretrizes do SUS",
   "Redes de Atenção à Saúde"
  ]
 },
 {
  "id": "ebserh",
  "name": "Legislação da EBSERH",
  "icon": "⚖️",
  "color": "#fff3e8",
  "desc": "Legislação, estrutura institucional e normas da empresa.",
  "topics": [
   "Lei nº 12.550/2011",
   "Estatuto Social da EBSERH",
   "Regimento Interno",
   "Código de Ética e Conduta",
   "Regulamento de Pessoal",
   "Normas institucionais vigentes"
  ]
 },
 {
  "id": "enfermagem",
  "name": "Conhecimentos específicos",
  "icon": "🩺",
  "color": "#e8f3f8",
  "desc": "Conteúdos técnicos e assistenciais para concursos de enfermeira.",
  "topics": [
   "Sistematização da Assistência de Enfermagem (SAE)",
   "Processo de Enfermagem",
   "Administração de medicamentos",
   "Segurança do paciente",
   "Controle de infecções",
   "Urgência e emergência",
   "Saúde da mulher, criança e idoso",
   "Ética e legislação profissional"
  ]
 }
];
const QUESTIONS = [
 {
  "id": 1,
  "subject": "portugues",
  "topic": "Interpretação de textos",
  "q": "Em uma questão de interpretação, a alternativa correta deve ser escolhida principalmente com base:",
  "opts": [
   "Na opinião pessoal do candidato sobre o tema.",
   "Nas informações explícitas e implícitas sustentadas pelo texto.",
   "No conhecimento externo, mesmo que contradiga o texto.",
   "Na alternativa mais abrangente, independentemente do texto."
  ],
  "a": 1,
  "why": "A interpretação deve respeitar as pistas linguísticas e o sentido global do texto.\nConhecimentos externos não podem contradizer o que está escrito."
 },
 {
  "id": 2,
  "subject": "portugues",
  "topic": "Concordância verbal",
  "q": "Assinale a frase em que a concordância verbal está adequada à norma-padrão:",
  "opts": [
   "Houveram muitas dúvidas durante a aula.",
   "Fazem dois anos que ela concluiu o curso.",
   "Existem protocolos que orientam a assistência.",
   "A equipe de profissionais chegaram cedo."
  ],
  "a": 2,
  "why": "O verbo existir concorda com o sujeito plural: “protocolos”. “Haver” com sentido de existir e “fazer” indicando tempo decorrido são impessoais."
 },
 {
  "id": 3,
  "subject": "logica",
  "topic": "Proposições",
  "q": "A negação lógica da proposição “Todos os profissionais participaram da capacitação” é:",
  "opts": [
   "Nenhum profissional participou.",
   "Todos os profissionais não participaram.",
   "Pelo menos um profissional não participou.",
   "Somente um profissional participou."
  ],
  "a": 2,
  "why": "A negação de “todos” é “existe pelo menos um que não”. Não significa que ninguém participou."
 },
 {
  "id": 4,
  "subject": "logica",
  "topic": "Porcentagem",
  "q": "Um material que custa R$ 200 recebeu desconto de 15%. Qual é o preço após o desconto?",
  "opts": [
   "R$ 160,00",
   "R$ 170,00",
   "R$ 175,00",
   "R$ 185,00"
  ],
  "a": 1,
  "why": "15% de R$ 200 corresponde a R$ 30. Portanto, R$ 200 − R$ 30 = R$ 170."
 },
 {
  "id": 5,
  "subject": "sus",
  "topic": "Lei nº 8.080/1990",
  "q": "De acordo com a organização do SUS, a iniciativa privada:",
  "opts": [
   "Não pode participar de ações e serviços de saúde.",
   "Pode participar do SUS em caráter complementar, segundo as diretrizes legais.",
   "Substitui obrigatoriamente a rede pública quando houver contrato.",
   "Define de forma independente as políticas nacionais de saúde."
  ],
  "a": 1,
  "why": "A Constituição Federal, art.\n199, §1º, e a Lei nº 8.080/1990 admitem a participação complementar da iniciativa privada, observadas as regras do sistema."
 },
 {
  "id": 6,
  "subject": "sus",
  "topic": "Princípios do SUS",
  "q": "A integralidade da assistência no SUS está relacionada:",
  "opts": [
   "À oferta exclusiva de atendimento hospitalar.",
   "À articulação contínua de ações preventivas e curativas, individuais e coletivas.",
   "Ao atendimento somente de pessoas contribuintes.",
   "À centralização de todos os serviços na União."
  ],
  "a": 1,
  "why": "A integralidade envolve um conjunto articulado e contínuo de ações e serviços preventivos e curativos, individuais e coletivos, conforme a Lei nº 8.080/1990."
 },
 {
  "id": 7,
  "subject": "ebserh",
  "topic": "Lei nº 12.550/2011",
  "q": "A Lei nº 12.550/2011 está diretamente relacionada:",
  "opts": [
   "À criação da Empresa Brasileira de Serviços Hospitalares (EBSERH).",
   "À regulamentação geral dos conselhos de enfermagem.",
   "À criação da Agência Nacional de Vigilância Sanitária.",
   "À instituição da Política Nacional de Atenção Básica."
  ],
  "a": 0,
  "why": "A Lei nº 12.550, de 15 de dezembro de 2011, autorizou o Poder Executivo a criar a EBSERH e disciplinou sua finalidade e atuação."
 },
 {
  "id": 8,
  "subject": "ebserh",
  "topic": "EBSERH",
  "q": "A atuação da EBSERH está especialmente vinculada à gestão de hospitais:",
  "opts": [
   "Militares estaduais exclusivamente.",
   "Universitários federais e instituições congêneres, no âmbito de sua finalidade legal.",
   "Privados com fins lucrativos em qualquer país.",
   "Municipais sem qualquer instrumento jurídico."
  ],
  "a": 1,
  "why": "A EBSERH presta serviços gratuitos de assistência médico-hospitalar, ambulatorial e de apoio diagnóstico e terapêutico, além de apoiar instituições públicas federais de ensino ou instituições congêneres, nos termos legais."
 },
 {
  "id": 9,
  "subject": "enfermagem",
  "topic": "Processo de Enfermagem",
  "q": "No Processo de Enfermagem, a etapa que envolve a identificação das respostas humanas e dos problemas de saúde que demandam intervenções de enfermagem é:",
  "opts": [
   "Implementação.",
   "Avaliação de Enfermagem.",
   "Diagnóstico de Enfermagem.",
   "Evolução administrativa."
  ],
  "a": 2,
  "why": "O diagnóstico de enfermagem corresponde ao julgamento clínico sobre respostas humanas a condições de saúde/processos de vida, orientando a seleção de intervenções."
 },
 {
  "id": 10,
  "subject": "enfermagem",
  "topic": "Segurança do paciente",
  "q": "Na administração segura de medicamentos, uma prática fundamental é:",
  "opts": [
   "Preparar medicamentos de vários pacientes juntos sem identificação.",
   "Conferir paciente, medicamento, dose, via, horário e demais verificações institucionais aplicáveis.",
   "Administrar medicamento sem checar alergias quando há prescrição.",
   "Registrar a administração antes de realizá-la."
  ],
  "a": 1,
  "why": "A conferência sistemática dos certos da administração e das barreiras de segurança reduz riscos.\nDevem ser seguidos também protocolos institucionais e condições clínicas."
 },
 {
  "id": 11,
  "subject": "enfermagem",
  "topic": "Controle de infecções",
  "q": "A higienização das mãos deve ser realizada:",
  "opts": [
   "Apenas ao final do plantão.",
   "Somente quando as mãos estiverem visivelmente sujas.",
   "Nos momentos indicados para interromper a transmissão de microrganismos, conforme recomendações da OMS/ANVISA.",
   "Apenas após contato com sangue."
  ],
  "a": 2,
  "why": "A higienização das mãos é medida central de prevenção de infecções relacionadas à assistência e deve ocorrer nos momentos recomendados, não apenas quando há sujidade visível."
 },
 {
  "id": 12,
  "subject": "enfermagem",
  "topic": "Ética profissional",
  "q": "Diante de uma situação que coloque em risco a segurança do paciente, a conduta profissional deve priorizar:",
  "opts": [
   "O silêncio para evitar conflitos na equipe.",
   "A comunicação responsável do risco e a adoção das medidas cabíveis de segurança.",
   "A divulgação pública imediata dos dados do paciente.",
   "A alteração informal do prontuário."
  ],
  "a": 1,
  "why": "A segurança do paciente exige comunicação adequada, registro fiel e adoção dos fluxos institucionais e ético-legais pertinentes."
 },
 {
  "id": 101,
  "subject": "sus",
  "topic": "História do SUS",
  "q": "Qual evento é considerado o principal marco da Reforma Sanitária e influenciou o texto constitucional sobre saúde?",
  "opts": [
   "A criação do INAMPS, em 1977.",
   "A 8ª Conferência Nacional de Saúde, em 1986.",
   "A Lei Eloy Chaves, em 1923.",
   "A criação do INPS, em 1966.",
   "A publicação do Decreto nº 7.508, em 2011."
  ],
  "a": 1,
  "why": "A 8ª Conferência, com ampla participação popular, defendeu a saúde como direito, base do texto de 1988."
 },
 {
  "id": 102,
  "subject": "sus",
  "topic": "História do SUS",
  "q": "A Lei Eloy Chaves, de 1923, está relacionada à criação das:",
  "opts": [
   "Conferências de Saúde.",
   "Comissões Intergestores.",
   "Redes de Atenção à Saúde.",
   "Secretarias Municipais de Saúde.",
   "Caixas de Aposentadoria e Pensões."
  ],
  "a": 4,
  "why": "As CAPs eram organizadas por empresa e são consideradas um marco inicial da previdência no país."
 },
 {
  "id": 103,
  "subject": "sus",
  "topic": "Constituição Federal",
  "q": "Segundo o art. 196 da Constituição, a saúde é:",
  "opts": [
   "Direito apenas dos contribuintes da Previdência.",
   "Dever exclusivo das famílias.",
   "Direito de todos e dever do Estado.",
   "Serviço prestado somente pela União.",
   "Benefício condicionado à renda."
  ],
  "a": 2,
  "why": "O acesso deve ser universal e igualitário, garantido por políticas sociais e econômicas."
 },
 {
  "id": 104,
  "subject": "sus",
  "topic": "Constituição Federal",
  "q": "NÃO é uma diretriz do SUS prevista no art. 198 da Constituição:",
  "opts": [
   "Centralização das decisões na União.",
   "Descentralização, com direção única em cada esfera.",
   "Atendimento integral.",
   "Participação da comunidade.",
   "Prioridade para atividades preventivas, sem prejuízo das assistenciais."
  ],
  "a": 0,
  "why": "A diretriz constitucional é a descentralização, não a centralização."
 },
 {
  "id": 105,
  "subject": "sus",
  "topic": "Constituição Federal",
  "q": "Na participação complementar de instituições privadas no SUS, têm preferência:",
  "opts": [
   "As empresas de capital estrangeiro.",
   "As instituições com maior lucro.",
   "As operadoras de planos de saúde.",
   "As entidades filantrópicas e as sem fins lucrativos.",
   "As clínicas particulares mais antigas."
  ],
  "a": 3,
  "why": "É a regra do art. 199, §1º."
 },
 {
  "id": 106,
  "subject": "sus",
  "topic": "Constituição Federal",
  "q": "Sobre a assistência à saúde e a iniciativa privada, é correto afirmar que:",
  "opts": [
   "A assistência é proibida à iniciativa privada.",
   "É vedado destinar recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos.",
   "A participação privada substitui o SUS.",
   "A comercialização de sangue é permitida mediante contrato.",
   "Capitais estrangeiros podem atuar sem qualquer restrição."
  ],
  "a": 1,
  "why": "Art. 199: a assistência é livre à iniciativa privada, com vedações como a do §2º."
 },
 {
  "id": 107,
  "subject": "sus",
  "topic": "Constituição Federal",
  "q": "É competência do SUS prevista no art. 200 da Constituição:",
  "opts": [
   "Conceder aposentadorias.",
   "Fixar o salário mínimo.",
   "Administrar o seguro-desemprego.",
   "Legislar sobre trânsito.",
   "Ordenar a formação de recursos humanos na área de saúde."
  ],
  "a": 4,
  "why": "A ordenação da formação de recursos humanos consta entre as atribuições do art. 200."
 },
 {
  "id": 108,
  "subject": "sus",
  "topic": "Lei nº 8.080/1990",
  "q": "É exemplo de determinante e condicionante da saúde citado no art. 3º da Lei nº 8.080/1990:",
  "opts": [
   "Filiação partidária.",
   "Contribuição previdenciária.",
   "Moradia.",
   "Posse de plano de saúde.",
   "Estado civil."
  ],
  "a": 2,
  "why": "A lei cita moradia, alimentação, saneamento, trabalho, renda, educação, transporte, lazer, entre outros."
 },
 {
  "id": 109,
  "subject": "sus",
  "topic": "Lei nº 8.080/1990",
  "q": "O conjunto de ações capazes de eliminar, diminuir ou prevenir riscos à saúde decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços define a:",
  "opts": [
   "Vigilância sanitária.",
   "Vigilância epidemiológica.",
   "Vigilância nutricional.",
   "Assistência farmacêutica.",
   "Atenção psicossocial."
  ],
  "a": 0,
  "why": "A chave é o controle de riscos ligados a bens, serviços e ambiente."
 },
 {
  "id": 110,
  "subject": "sus",
  "topic": "Lei nº 8.080/1990",
  "q": "Conhecer e detectar mudanças nos fatores determinantes da saúde, para recomendar medidas de prevenção e controle de doenças, é próprio da:",
  "opts": [
   "Vigilância sanitária.",
   "Saúde suplementar.",
   "Assistência terapêutica.",
   "Vigilância epidemiológica.",
   "Auditoria contábil."
  ],
  "a": 3,
  "why": "A vigilância epidemiológica acompanha doenças e agravos e orienta medidas de controle."
 },
 {
  "id": 111,
  "subject": "sus",
  "topic": "Lei nº 8.080/1990",
  "q": "Priorizar ações e alocar recursos com base no perfil de adoecimento da população corresponde ao princípio da:",
  "opts": [
   "Preservação da autonomia.",
   "Utilização da epidemiologia.",
   "Direito à informação.",
   "Participação da comunidade.",
   "Direção única."
  ],
  "a": 1,
  "why": "O art. 7º prevê o uso da epidemiologia para estabelecer prioridades e orientar a programação."
 },
 {
  "id": 112,
  "subject": "sus",
  "topic": "Lei nº 8.080/1990",
  "q": "Uma paciente é esclarecida sobre as opções e decide se aceita um procedimento. Isso se relaciona ao princípio da:",
  "opts": [
   "Hierarquização.",
   "Regionalização.",
   "Descentralização.",
   "Conjugação de recursos.",
   "Preservação da autonomia."
  ],
  "a": 4,
  "why": "A lei assegura a autonomia das pessoas na defesa de sua integridade física e moral."
 },
 {
  "id": 113,
  "subject": "sus",
  "topic": "Lei nº 8.080/1990",
  "q": "No âmbito dos Municípios, a direção única do SUS é exercida:",
  "opts": [
   "Pelo Ministério da Saúde.",
   "Pela Secretaria Estadual de Saúde.",
   "Pela Secretaria de Saúde ou órgão equivalente.",
   "Pelo Conselho Federal de Enfermagem.",
   "Pela Câmara de Vereadores."
  ],
  "a": 2,
  "why": "Art. 9º: cada esfera tem direção única."
 },
 {
  "id": 114,
  "subject": "sus",
  "topic": "Lei nº 8.080/1990",
  "q": "Executar a vigilância sanitária de portos, aeroportos e fronteiras compete originalmente à direção:",
  "opts": [
   "Nacional do SUS.",
   "Municipal do SUS.",
   "Regional privada.",
   "Dos Conselhos locais.",
   "Das unidades básicas."
  ],
  "a": 0,
  "why": "É competência da direção nacional, que pode ter a execução complementada por Estados e Municípios."
 },
 {
  "id": 115,
  "subject": "sus",
  "topic": "Lei nº 8.142/1990",
  "q": "Com que periodicidade se reúne a Conferência de Saúde?",
  "opts": [
   "Todos os anos.",
   "A cada dois anos.",
   "A cada cinco anos.",
   "A cada quatro anos.",
   "A cada oito anos."
  ],
  "a": 3,
  "why": "Art. 1º, §1º."
 },
 {
  "id": 116,
  "subject": "sus",
  "topic": "Lei nº 8.142/1990",
  "q": "O Conselho de Saúde tem caráter:",
  "opts": [
   "Temporário e consultivo.",
   "Permanente e deliberativo.",
   "Permanente e apenas consultivo.",
   "Eventual e deliberativo.",
   "Temporário e executivo."
  ],
  "a": 1,
  "why": "Ele formula estratégias e controla a execução da política de saúde."
 },
 {
  "id": 117,
  "subject": "sus",
  "topic": "Lei nº 8.142/1990",
  "q": "Em um Conselho de Saúde com 16 membros, quantos devem representar os usuários?",
  "opts": [
   "4",
   "5",
   "10",
   "12",
   "8"
  ],
  "a": 4,
  "why": "A representação dos usuários é paritária: metade do total."
 },
 {
  "id": 118,
  "subject": "sus",
  "topic": "Lei nº 8.142/1990",
  "q": "Dos recursos de que trata a Lei nº 8.142/1990 para cobertura das ações de saúde por Estados e Municípios, quanto, no mínimo, se destina aos Municípios?",
  "opts": [
   "30%.",
   "40%.",
   "70%.",
   "50%.",
   "90%."
  ],
  "a": 2,
  "why": "Art. 3º, §2º: pelo menos 70% aos Municípios, e o restante aos Estados."
 },
 {
  "id": 119,
  "subject": "sus",
  "topic": "Lei nº 8.142/1990",
  "q": "NÃO está entre os requisitos para o Município receber os recursos, segundo o art. 4º da Lei nº 8.142/1990:",
  "opts": [
   "Possuir hospital universitário próprio.",
   "Contar com Fundo de Saúde.",
   "Contar com plano de saúde.",
   "Ter Conselho de Saúde paritário.",
   "Apresentar relatórios de gestão."
  ],
  "a": 0,
  "why": "A lei não exige hospital próprio."
 },
 {
  "id": 120,
  "subject": "sus",
  "topic": "Decreto nº 7.508/2011",
  "q": "É Porta de Entrada do SUS, segundo o Decreto nº 7.508/2011:",
  "opts": [
   "A atenção hospitalar especializada.",
   "A cirurgia eletiva.",
   "A terapia intensiva.",
   "A atenção psicossocial.",
   "O transplante de órgãos."
  ],
  "a": 3,
  "why": "As portas são: atenção primária, urgência e emergência, psicossocial e especiais de acesso aberto."
 },
 {
  "id": 121,
  "subject": "sus",
  "topic": "Decreto nº 7.508/2011",
  "q": "Para ser instituída, uma Região de Saúde deve conter, no mínimo:",
  "opts": [
   "Apenas atenção primária e vigilância em saúde.",
   "Atenção primária, urgência e emergência, atenção psicossocial, ambulatorial especializada e hospitalar, e vigilância em saúde.",
   "Um hospital universitário e um laboratório central.",
   "Somente urgência e atenção hospitalar.",
   "Atenção primária e transplantes."
  ],
  "a": 1,
  "why": "É o conteúdo mínimo do art. 5º."
 },
 {
  "id": 122,
  "subject": "sus",
  "topic": "Decreto nº 7.508/2011",
  "q": "A relação que compreende todas as ações e serviços que o SUS oferece para a integralidade da assistência é a:",
  "opts": [
   "RENAME.",
   "COAP.",
   "CIT.",
   "CIR.",
   "RENASES."
  ],
  "a": 4,
  "why": "RENASES trata de ações e serviços; RENAME trata de medicamentos."
 },
 {
  "id": 123,
  "subject": "sus",
  "topic": "Decreto nº 7.508/2011",
  "q": "A RENAME é atualizada a cada:",
  "opts": [
   "Seis meses.",
   "Um ano.",
   "Dois anos.",
   "Quatro anos.",
   "Cinco anos."
  ],
  "a": 2,
  "why": "O Ministério da Saúde publica as atualizações a cada dois anos."
 },
 {
  "id": 124,
  "subject": "sus",
  "topic": "Decreto nº 7.508/2011",
  "q": "O acordo de colaboração firmado entre entes federativos para organizar a rede de atenção é o:",
  "opts": [
   "Contrato Organizativo da Ação Pública da Saúde (COAP).",
   "Mapa da Saúde.",
   "Protocolo Clínico e Diretriz Terapêutica.",
   "Plano de Carreira, Cargos e Salários.",
   "Formulário Terapêutico Nacional."
  ],
  "a": 0,
  "why": "O COAP define responsabilidades, metas, indicadores e recursos."
 },
 {
  "id": 125,
  "subject": "sus",
  "topic": "Decreto nº 7.508/2011",
  "q": "A comissão que pactua aspectos da gestão do SUS no âmbito do Estado é a:",
  "opts": [
   "CIT.",
   "CIR.",
   "CNS.",
   "CIB.",
   "RENASES."
  ],
  "a": 3,
  "why": "CIT: União; CIB: Estado; CIR: região."
 }
];
const READINGS = [
 {
  "id": "sae",
  "cat": "Enfermagem",
  "title": "Processo de Enfermagem: etapas e aplicação na prática",
  "desc": "Guia completo sobre avaliação, diagnóstico, planejamento, implementação e evolução.",
  "time": "5 min",
  "body": "<div class=\"callout\"><b>O que você vai dominar:</b> a norma atual, as cinco etapas, as competências de cada profissional e como a banca costuma confundir os conceitos.</div><h2>Conceito</h2><p>O Processo de Enfermagem (PE) é um método <b>deliberado e sistemático</b> que orienta o raciocínio crítico e o julgamento clínico do enfermeiro. Em vez de cuidar por rotina ou improviso, a equipe coleta dados, decide com base neles, age e verifica o resultado.</p><p>Deve ser realizado em <b>todo contexto socioambiental</b> onde ocorra cuidado de enfermagem: hospital, unidade básica, ambulatório, domicílio, escola, empresa ou instituição de longa permanência.</p><h2>Qual norma estudar</h2><p>A <b>Resolução Cofen nº 736/2024</b> regulamenta a implementação do PE e revogou a Resolução nº 358/2009.</p><div class=\"table-wrap\"><table><thead><tr><th>Ponto</th><th>Como aparece em material antigo</th><th>Como está na 736/2024</th></tr></thead><tbody><tr><td>1ª etapa</td><td>Coleta de dados ou Histórico</td><td>Avaliação de Enfermagem</td></tr><tr><td>5ª etapa</td><td>Avaliação</td><td>Evolução de Enfermagem</td></tr><tr><td>Norma</td><td>Resolução 358/2009</td><td>Revogada</td></tr></tbody></table></div><h2>Suporte teórico</h2><p>O PE precisa de uma base, que pode combinar:</p><ul><li>teorias e modelos de cuidado;</li><li>sistemas de linguagem padronizada (como NANDA-I, NIC, NOC e CIPE);</li><li>instrumentos validados de predição de risco (como Braden para lesão por pressão e Morse para quedas);</li><li>protocolos baseados em evidências.</li></ul><p>Teorias muito cobradas: <b>Wanda Horta</b> (necessidades humanas básicas), <b>Dorothea Orem</b> (autocuidado), <b>Florence Nightingale</b> (ambiente) e <b>Callista Roy</b> (adaptação).</p><h2>As cinco etapas</h2><p>São <b>inter-relacionadas, interdependentes, recorrentes e cíclicas</b>. O resultado da última alimenta novamente a primeira.</p><h3>1. Avaliação de Enfermagem</h3><p>Coleta <b>inicial e contínua</b> de dados.</p><ul><li><b>Subjetivos:</b> vêm da entrevista. Exemplos: dor, náusea, medo, dificuldade para dormir.</li><li><b>Objetivos:</b> vêm do exame físico e de medidas. Exemplos: pressão arterial, temperatura, edema, aspecto da ferida.</li></ul><p>Podem ser usados exames laboratoriais e de imagem, testes clínicos, escalas e protocolos. No exame físico, a sequência geral é inspeção, palpação, percussão e ausculta. <b>No abdome</b>, a ordem muda: inspeção, ausculta, percussão e palpação, para não alterar os ruídos intestinais.</p><h3>2. Diagnóstico de Enfermagem</h3><p>É o julgamento clínico sobre os dados. Identifica:</p><ul><li>problemas existentes;</li><li>condições de vulnerabilidade (riscos);</li><li>disposições para melhorar comportamentos de saúde.</li></ul><p>Não confunda com diagnóstico médico: o médico nomeia a doença (por exemplo, pneumonia); o enfermeiro nomeia a <b>resposta</b> da pessoa (por exemplo, troca de gases prejudicada).</p><p>Um diagnóstico com foco no problema costuma ter <b>título, fator relacionado e características definidoras</b>. Um diagnóstico de risco tem <b>título e fatores de risco</b>, pois o problema ainda não ocorreu.</p><h3>3. Planejamento de Enfermagem</h3><p>Plano assistencial compartilhado com a pessoa cuidada e com a equipe. Compreende:</p><ol><li><b>priorização</b> dos diagnósticos;</li><li>determinação de <b>resultados esperados e exequíveis</b>, quantitativos ou qualitativos;</li><li><b>tomada de decisão terapêutica</b>, declarada na prescrição de enfermagem.</li></ol><p>Para priorizar, pense primeiro no que ameaça a vida (via aérea, respiração e circulação), depois no risco à segurança e, em seguida, nas demais necessidades.</p><p>Uma boa meta diz <b>quem, o quê, quanto e quando</b>. \"Melhorar a dor\" é vago. \"Paciente relatará dor igual ou menor que 3 em uma hora\" é verificável.</p><h3>4. Implementação de Enfermagem</h3><p>Execução das intervenções pela equipe, respeitando a competência de cada profissional, com comunicação contínua e checagem da prescrição. Os cuidados podem ser:</p><ul><li><b>autônomos do enfermeiro:</b> prescritos por ele de forma independente;</li><li><b>interprofissionais:</b> feitos em colaboração com outras profissões;</li><li><b>em programas de saúde:</b> decorrentes de protocolos, como medicamentos padronizados e solicitação de exames de rotina.</li></ul><h3>5. Evolução de Enfermagem</h3><p>Avalia os resultados alcançados e permite analisar e <b>revisar todo o processo</b>. A meta pode ter sido alcançada, parcialmente alcançada ou não alcançada. Nos dois últimos casos, volta-se aos dados: o diagnóstico estava certo? A meta era possível? A intervenção foi feita?</p><h2>Caso completo</h2><p>Homem, 62 anos, primeiro dia após cirurgia abdominal.</p><div class=\"table-wrap\"><table><thead><tr><th>Etapa</th><th>No caso</th></tr></thead><tbody><tr><td>Avaliação</td><td>Dor 7 em 10, protege o abdome, evita tossir, frequência cardíaca 108, saturação 93%</td></tr><tr><td>Diagnóstico</td><td>Dor aguda; risco de infecção no sítio cirúrgico</td></tr><tr><td>Planejamento</td><td>Dor igual ou menor que 3 em uma hora; ferida sem sinais de infecção até a alta</td></tr><tr><td>Implementação</td><td>Analgésico prescrito, posicionamento, apoio do abdome ao tossir, curativo conforme protocolo</td></tr><tr><td>Evolução</td><td>Dor 2 após uma hora: meta alcançada. Manter vigilância da ferida</td></tr></tbody></table></div><h2>Quem faz o quê</h2><ul><li><b>Privativos do enfermeiro:</b> diagnóstico de enfermagem e prescrição de enfermagem.</li><li><b>Técnicos e auxiliares:</b> participam com anotações de enfermagem, implementação dos cuidados prescritos e checagem, sob supervisão e orientação do enfermeiro.</li></ul><h2>Registro e Consulta de Enfermagem</h2><p>A documentação deve ser feita no prontuário, físico ou eletrônico. O enfermeiro registra todas as etapas. A <b>Consulta de Enfermagem</b> deve ser organizada e registrada segundo o Processo de Enfermagem.</p><p>Um bom registro é claro, objetivo, cronológico, com data, hora e identificação profissional, sem rasuras e sem juízos de valor. Escreva o que foi observado (\"recusou o banho\") em vez de rótulos (\"paciente rebelde\").</p><h2>Pegadinhas de prova</h2><ul><li>As etapas não são isoladas nem acontecem uma única vez.</li><li>Definir resultados esperados faz parte do <b>planejamento</b>, não do diagnóstico.</li><li>Técnico participa do processo, mas <b>não</b> faz diagnóstico nem prescrição de enfermagem.</li><li>Evolução de enfermagem (avaliação de resultados) é diferente de anotação de enfermagem (registro de fatos e cuidados).</li></ul><h2>Teste-se</h2><ol><li>Quais são as cinco etapas, em ordem?</li><li>Quais atividades são privativas do enfermeiro?</li><li>Quais são os três componentes do planejamento?</li></ol><details class=\"answers\"><summary>Ver respostas</summary><p>(1) Avaliação, Diagnóstico, Planejamento, Implementação e Evolução. (2) Diagnóstico e prescrição de enfermagem. (3) Priorização, resultados esperados e decisão terapêutica.</p></details>",
  "icon": "🩺"
 },
 {
  "id": "seguranca",
  "cat": "Enfermagem",
  "title": "Segurança do paciente e cultura de segurança",
  "desc": "Conceitos essenciais sobre prevenção de danos, comunicação e melhoria dos processos assistenciais.",
  "time": "5 min",
  "body": "<div class=\"callout\"><b>O que você vai dominar:</b> os conceitos oficiais, a RDC 36/2013, as metas de segurança e os prazos de notificação.</div><h2>Por que isso importa</h2><p>Parte dos danos na assistência é evitável. A ideia central é que <b>errar é humano</b>, e por isso o sistema precisa de barreiras que impeçam a falha de chegar ao paciente. O modelo do \"queijo suíço\", de James Reason, ilustra isso: o dano acontece quando as falhas de várias barreiras se alinham.</p><h2>Marcos</h2><ul><li><b>Portaria GM/MS nº 529/2013:</b> institui o Programa Nacional de Segurança do Paciente (PNSP).</li><li><b>RDC Anvisa nº 36/2013:</b> institui ações para a segurança do paciente em serviços de saúde.</li></ul><h2>Conceitos oficiais</h2><div class=\"table-wrap\"><table><thead><tr><th>Termo</th><th>Significado</th></tr></thead><tbody><tr><td>Segurança do paciente</td><td>Redução, a um mínimo aceitável, do risco de dano desnecessário associado à atenção à saúde</td></tr><tr><td>Incidente</td><td>Evento ou circunstância que poderia ter resultado, ou resultou, em dano desnecessário</td></tr><tr><td>Evento adverso</td><td>Incidente que resulta em dano à saúde</td></tr><tr><td>Dano</td><td>Comprometimento de estrutura ou função do corpo, inclusive doença, lesão, sofrimento, morte ou disfunção, físico, social ou psicológico</td></tr><tr><td>Cultura de segurança</td><td>Valores e comportamentos que priorizam o aprendizado com as falhas em lugar da culpa e da punição</td></tr><tr><td>Gestão de risco</td><td>Aplicação sistêmica e contínua de políticas e recursos para identificar, analisar, avaliar, comunicar e controlar riscos</td></tr></tbody></table></div><h3>Tipos de incidente</h3><ul><li><b>Circunstância notificável:</b> havia potencial de dano, mas nada ocorreu. Exemplo: desfibrilador sem funcionar.</li><li><b>Quase erro (near miss):</b> o incidente não atingiu o paciente. Exemplo: dose errada percebida antes da administração.</li><li><b>Incidente sem dano:</b> atingiu o paciente, sem causar dano.</li><li><b>Evento adverso:</b> atingiu o paciente e causou dano.</li></ul><h2>RDC 36/2013</h2><h3>Núcleo de Segurança do Paciente (NSP)</h3><p>É a instância criada pela direção do serviço para promover ações de segurança. Entre suas competências:</p><ul><li>promover a gestão de risco e o trabalho multiprofissional;</li><li>identificar não conformidades em processos, equipamentos, medicamentos e insumos;</li><li>elaborar, implantar, divulgar e atualizar o Plano de Segurança;</li><li>implantar protocolos e acompanhar indicadores;</li><li>estabelecer barreiras e capacitar as equipes;</li><li>analisar os incidentes e dar retorno à direção e aos profissionais;</li><li>notificar os eventos adversos ao Sistema Nacional de Vigilância Sanitária.</li></ul><p>A regra não se aplica a consultórios individualizados, laboratórios clínicos e serviços móveis e de atenção domiciliar.</p><h3>Plano de Segurança do Paciente</h3><p>Aponta riscos e estratégias para preveni-los desde a admissão até a transferência, alta ou óbito. Abrange, entre outros:</p><ul><li>identificação do paciente, higiene das mãos e cirurgia segura;</li><li>prescrição, uso e administração segura de medicamentos, sangue e hemocomponentes;</li><li>uso seguro de equipamentos e materiais;</li><li>prevenção de quedas e de lesões por pressão;</li><li>prevenção de infecções relacionadas à assistência;</li><li>segurança em nutrição enteral e parenteral;</li><li>comunicação efetiva e participação do paciente e da família.</li></ul><h3>Notificação</h3><div class=\"table-wrap\"><table><thead><tr><th>Situação</th><th>Prazo</th></tr></thead><tbody><tr><td>Eventos adversos em geral</td><td>Mensalmente, até o 15º dia útil do mês seguinte</td></tr><tr><td>Evento adverso que evolui para óbito</td><td>Em até 72 horas</td></tr></tbody></table></div><h2>As seis metas internacionais</h2><ol><li>Identificar corretamente o paciente.</li><li>Melhorar a comunicação entre os profissionais.</li><li>Melhorar a segurança de medicamentos de alta vigilância.</li><li>Assegurar cirurgia no local, procedimento e paciente corretos.</li><li>Reduzir o risco de infecções associadas à assistência.</li><li>Reduzir o risco de quedas e lesões.</li></ol><h3>Meta 1: identificação</h3><p>Usar <b>pelo menos dois identificadores</b>, como nome completo e data de nascimento, conferidos na pulseira. <b>Número do quarto ou do leito não serve</b> como identificador.</p><h3>Meta 2: comunicação</h3><p>Em ordens verbais, usadas apenas em urgência, quem recebe repete em voz alta e espera a confirmação. Na passagem de plantão, um roteiro como o <b>SBAR</b> ajuda: Situação, Breve histórico, Avaliação e Recomendação.</p><h3>Meta 4: cirurgia segura</h3><p>A lista de verificação tem três momentos: <b>antes da indução anestésica</b>, <b>antes da incisão</b> e <b>antes de o paciente sair da sala</b>.</p><h3>Meta 5: os cinco momentos de higiene das mãos</h3><ol><li>Antes de tocar o paciente.</li><li>Antes de procedimento limpo ou asséptico.</li><li>Após risco de exposição a fluidos corporais.</li><li>Após tocar o paciente.</li><li>Após tocar superfícies próximas ao paciente.</li></ol><p>Preparação alcoólica leva cerca de 20 a 30 segundos; água e sabonete, 40 a 60. Com sujeira visível, use água e sabonete.</p><h3>Meta 6: quedas e lesão por pressão</h3><ul><li><b>Quedas:</b> avaliar risco (por exemplo, escala de Morse), cama baixa, grades, campainha ao alcance, piso seco e orientação.</li><li><b>Lesão por pressão:</b> avaliar risco (escala de Braden, em que <b>quanto menor a pontuação, maior o risco</b>), reposicionar, proteger a pele, controlar umidade e cuidar da nutrição.</li></ul><h2>Cultura justa</h2><p>Cultura de segurança não é ausência de responsabilidade. Diferencia o erro não intencional, que pede melhoria do sistema, da violação consciente e imprudente, que pede responsabilização.</p><h2>Pegadinhas de prova</h2><ul><li>Todo evento adverso é um incidente, mas nem todo incidente é um evento adverso.</li><li>Notificar não tem finalidade punitiva.</li><li>O prazo de 72 horas vale para eventos que levam a óbito.</li></ul><h2>Teste-se</h2><ol><li>Uma dose errada é percebida antes de ser dada. Que tipo de incidente é?</li><li>Qual o prazo para notificar um óbito por evento adverso?</li></ol><details class=\"answers\"><summary>Ver respostas</summary><p>(1) Quase erro. (2) Até 72 horas.</p></details>",
  "icon": "🛡️"
 },
 {
  "id": "medicacao",
  "cat": "Enfermagem",
  "title": "Administração segura de medicamentos",
  "desc": "Revisão de barreiras de segurança, checagens e registro.",
  "time": "4 min",
  "body": "<div class=\"callout\"><b>O que você vai dominar:</b> os nove certos, as vias, os medicamentos de alta vigilância e os cálculos que mais aparecem.</div><h2>Um processo em cadeia</h2><p>O uso de medicamentos passa por prescrição, dispensação, preparo, administração e monitoramento. A enfermagem costuma ser a <b>última barreira</b> antes de o erro chegar ao paciente.</p><h2>Os nove certos</h2><p>Referência do protocolo nacional de segurança. Cada instituição pode adaptar a lista.</p><div class=\"table-wrap\"><table><thead><tr><th>Certo</th><th>O que conferir</th></tr></thead><tbody><tr><td>Paciente</td><td>Dois identificadores e alergias</td></tr><tr><td>Medicamento</td><td>Nome conferido com a prescrição, atenção a nomes parecidos</td></tr><tr><td>Via</td><td>Via prescrita e compatível com a apresentação</td></tr><tr><td>Hora</td><td>Horário correto e intervalos</td></tr><tr><td>Dose</td><td>Cálculo e unidade; dupla checagem quando indicada</td></tr><tr><td>Registro</td><td>Checar e anotar depois de administrar</td></tr><tr><td>Ação</td><td>Saber para que serve e orientar o paciente</td></tr><tr><td>Forma</td><td>Forma farmacêutica adequada à via</td></tr><tr><td>Resposta</td><td>Monitorar efeito esperado e reações</td></tr></tbody></table></div><h2>Antes, durante e depois</h2><ul><li><b>Antes:</b> ler a prescrição completa, perguntar sobre alergias, higienizar as mãos, preparar um paciente por vez e identificar o que foi preparado.</li><li><b>Durante:</b> identificar o paciente, explicar o que será feito e não interromper a tarefa sem necessidade.</li><li><b>Depois:</b> checar, registrar, observar reações e registrar também a não administração, com o motivo.</li></ul><h2>Principais vias</h2><div class=\"table-wrap\"><table><thead><tr><th>Via</th><th>Ângulo usual</th><th>Observações</th></tr></thead><tbody><tr><td>Intradérmica</td><td>10 a 15 graus</td><td>Pequenos volumes; testes e BCG</td></tr><tr><td>Subcutânea</td><td>45 ou 90 graus</td><td>Insulina e heparina; alternar locais</td></tr><tr><td>Intramuscular</td><td>90 graus</td><td>Escolher o local pelo volume e pela massa muscular</td></tr><tr><td>Endovenosa</td><td>cerca de 15 a 30 graus na punção</td><td>Ação rápida; observar flebite e infiltração</td></tr></tbody></table></div><ul><li>Na <b>heparina subcutânea</b>, não se aspira nem se massageia o local.</li><li>Na via intramuscular, a região <b>ventroglútea</b> é considerada segura por ficar distante de grandes vasos e nervos.</li><li>Comprimidos de liberação prolongada ou com revestimento entérico, em regra, <b>não devem ser triturados</b>.</li></ul><h2>Medicamentos de alta vigilância</h2><p>São os que têm alto risco de causar danos significativos quando há falha. Exemplos: <b>insulina, heparina, cloreto de potássio concentrado, opioides e nutrição parenteral</b>.</p><p>Barreiras usuais:</p><ul><li>armazenamento separado e rótulo de destaque;</li><li>dupla checagem independente de cálculo, preparo e bomba de infusão;</li><li>padronização de concentrações;</li><li>evitar prescrições vagas, como \"se necessário\" sem dose, intervalo e condição de uso.</li></ul><p>O <b>cloreto de potássio concentrado nunca é administrado em bólus</b>: deve ser diluído e infundido com controle, pelo risco de parada cardíaca.</p><h2>Cálculos</h2><h3>Regra de três para dose</h3><p>Frasco de 1 g (1000 mg) diluído em 10 mL. Prescritos 250 mg.</p><ul><li>1000 mg está para 10 mL assim como 250 mg está para x.</li><li>x = 250 × 10 ÷ 1000 = <b>2,5 mL</b>.</li></ul><h3>Gotejamento</h3><p>Volume em mL e tempo em horas.</p><div class=\"table-wrap\"><table><thead><tr><th>Cálculo</th><th>Fórmula</th><th>Exemplo: 500 mL em 8 h</th></tr></thead><tbody><tr><td>Gotas por minuto</td><td>Volume ÷ (tempo × 3)</td><td>20,8, cerca de 21 gotas</td></tr><tr><td>Microgotas por minuto</td><td>Volume ÷ tempo</td><td>62,5, cerca de 63 microgotas</td></tr><tr><td>Bomba de infusão (mL/h)</td><td>Volume ÷ tempo</td><td>62,5 mL/h</td></tr></tbody></table></div><p>Lembre: 1 mL equivale a cerca de 20 gotas, e 1 gota a 3 microgotas.</p><h2>Ordens verbais e prescrição</h2><p>Ordem verbal só em urgência ou emergência: repetir em voz alta, aguardar confirmação e garantir a prescrição assim que a situação for controlada. Prescrição ilegível ou duvidosa <b>não se interpreta</b>: esclarece-se com o prescritor.</p><h2>Se houver erro</h2><ol><li>Avaliar o paciente imediatamente.</li><li>Comunicar o enfermeiro e o médico.</li><li>Fazer as intervenções necessárias e monitorar.</li><li>Registrar os fatos no prontuário.</li><li>Notificar ao Núcleo de Segurança do Paciente.</li></ol><h2>Pegadinhas de prova</h2><ul><li>Nunca registrar antes de administrar.</li><li>Não administrar medicamento preparado por outra pessoa sem identificação e conferência.</li><li>Número do leito não identifica o paciente.</li></ul><h2>Teste-se</h2><ol><li>Prescritos 1000 mL em 12 horas. Quantas gotas por minuto?</li><li>Cite três medicamentos de alta vigilância.</li></ol><details class=\"answers\"><summary>Ver respostas</summary><p>(1) 1000 ÷ 36 = 27,8, cerca de 28 gotas. (2) Insulina, heparina e cloreto de potássio concentrado.</p></details>",
  "icon": "💊"
 },
 {
  "id": "sus-historia",
  "cat": "Legislação do SUS",
  "title": "SUS: da Reforma Sanitária à criação do sistema",
  "desc": "Como era a assistência antes de 1988 e o que mudou.",
  "time": "3 min",
  "body": "<div class=\"callout\"><b>O que você vai dominar:</b> a linha do tempo que levou ao SUS e as pegadinhas sobre cada instituição.</div><h2>Início do século XX</h2><p>Predominava o <b>sanitarismo campanhista</b>: campanhas contra doenças como febre amarela, peste e varíola, importantes para a economia agroexportadora. Oswaldo Cruz liderou ações de forte caráter impositivo, e a vacinação obrigatória contra a varíola contribuiu para a <b>Revolta da Vacina (1904)</b>.</p><h2>Previdência e assistência médica</h2><h3>CAPs (1923)</h3><p>A <b>Lei Eloy Chaves</b> criou as Caixas de Aposentadoria e Pensões, organizadas <b>por empresa</b>, começando pelos ferroviários. É considerada o marco inicial da previdência social no país.</p><h3>IAPs (anos 1930)</h3><p>Os Institutos de Aposentadoria e Pensões passaram a se organizar <b>por categoria profissional</b> (marítimos, bancários, comerciários, industriários), com maior participação do Estado.</p><h3>INPS (1966)</h3><p>Unificou os institutos. Cresceu a compra de serviços do setor privado.</p><h3>INAMPS (1977)</h3><p>Passou a cuidar da assistência médica previdenciária.</p><h2>Saúde pública separada</h2><p>O <b>Ministério da Saúde</b> foi criado em 1953. Havia uma divisão: o Ministério cuidava principalmente de ações coletivas e preventivas; a Previdência, da assistência individual a quem contribuía. Essa fragmentação gerava desigualdade e duplicidade.</p><h2>O modelo antes do SUS</h2><ul><li>Centrado no hospital e na doença.</li><li>Acesso ligado ao vínculo formal de trabalho.</li><li>Grande contratação do setor privado.</li><li>Pouca participação social.</li><li>Quem não contribuía dependia de filantropia e de ações limitadas.</li></ul><h2>Reforma Sanitária</h2><p>Movimento dos anos 1970 e 1980, em um contexto de ditadura militar e redemocratização. Reuniu profissionais de saúde, universidades, sindicatos e movimentos populares. Entidades como o <b>Cebes</b> e a <b>Abrasco</b> tiveram papel importante. Defendia:</p><ul><li>saúde como direito;</li><li>conceito ampliado de saúde;</li><li>sistema único, público e descentralizado;</li><li>participação popular.</li></ul><p>Em 1978, a Conferência de <b>Alma-Ata</b> reforçou internacionalmente a atenção primária à saúde.</p><h2>8ª Conferência Nacional de Saúde (1986)</h2><p>Presidida por <b>Sergio Arouca</b>, foi a primeira com ampla participação popular. Seu relatório afirmou a saúde como direito e resultado de condições como alimentação, habitação, educação, renda, trabalho, transporte, lazer e acesso a serviços.</p><p>Em 1987 veio o <b>SUDS</b> (Sistemas Unificados e Descentralizados de Saúde), uma etapa de transição.</p><h2>Constituição de 1988</h2><p>Criou a <b>Seguridade Social</b>, formada por <b>saúde, previdência e assistência social</b>, e instituiu o SUS.</p><div class=\"table-wrap\"><table><thead><tr><th>Área</th><th>Quem tem acesso</th></tr></thead><tbody><tr><td>Saúde</td><td>Todos, sem contribuição direta</td></tr><tr><td>Previdência</td><td>Quem contribui</td></tr><tr><td>Assistência social</td><td>Quem dela necessitar</td></tr></tbody></table></div><h2>Depois de 1988</h2><div class=\"table-wrap\"><table><thead><tr><th>Ano</th><th>Marco</th></tr></thead><tbody><tr><td>1990</td><td>Leis 8.080 e 8.142</td></tr><tr><td>1991 a 1996</td><td>Normas Operacionais Básicas (NOB), avançando a descentralização</td></tr><tr><td>1993</td><td>Extinção do INAMPS</td></tr><tr><td>1994</td><td>Programa Saúde da Família</td></tr><tr><td>2001 e 2002</td><td>Normas Operacionais de Assistência à Saúde (NOAS), com foco na regionalização</td></tr><tr><td>2006</td><td>Pacto pela Saúde: pela Vida, em Defesa do SUS e de Gestão</td></tr><tr><td>2011</td><td>Decreto 7.508</td></tr><tr><td>2012</td><td>Lei Complementar 141</td></tr></tbody></table></div><h2>Pegadinhas de prova</h2><ul><li>CAPs eram por <b>empresa</b>; IAPs, por <b>categoria</b>.</li><li>O SUS não nasceu em 1990: foi instituído pela Constituição de 1988 e regulamentado em 1990.</li><li>O INAMPS não era um sistema universal.</li></ul><h2>Teste-se</h2><ol><li>Quais áreas compõem a Seguridade Social?</li><li>Qual conferência influenciou a Constituição?</li></ol><details class=\"answers\"><summary>Ver respostas</summary><p>(1) Saúde, previdência e assistência social. (2) A 8ª Conferência Nacional de Saúde, de 1986.</p></details>",
  "icon": "🕰️"
 },
 {
  "id": "sus-principios",
  "cat": "Legislação do SUS",
  "title": "Princípios doutrinários e organizativos do SUS",
  "desc": "Relembre universalidade, integralidade, equidade e diretrizes organizativas.",
  "time": "3 min",
  "body": "<div class=\"callout\"><b>O que você vai dominar:</b> a diferença entre princípios doutrinários e organizativos, com exemplos práticos.</div><h2>Visão geral</h2><p>O SUS é um <b>sistema único</b>: o mesmo conjunto de regras vale em todo o país, com gestão compartilhada entre União, Estados, Distrito Federal e Municípios. A literatura costuma dividir seus fundamentos em dois grupos.</p><div class=\"table-wrap\"><table><thead><tr><th>Doutrinários (o que o SUS defende)</th><th>Organizativos (como se organiza)</th></tr></thead><tbody><tr><td>Universalidade</td><td>Descentralização</td></tr><tr><td>Equidade</td><td>Regionalização e hierarquização</td></tr><tr><td>Integralidade</td><td>Participação da comunidade</td></tr></tbody></table></div><p>A Constituição, no art. 198, chama de <b>diretrizes</b> a descentralização, o atendimento integral e a participação da comunidade. A Lei 8.080, no art. 7º, lista tudo como princípios. Leia o enunciado com atenção.</p><h2>Universalidade</h2><p>Todos têm direito ao acesso, em todos os níveis, <b>sem exigência de contribuição</b>. Antes do SUS, a assistência previdenciária atendia principalmente trabalhadores formais.</p><p><b>Exemplo:</b> uma pessoa sem documentos ou um estrangeiro que precise de atendimento não pode ser recusado por não contribuir.</p><h2>Equidade</h2><p>Tratar de forma diferente quem tem necessidades diferentes, para reduzir desigualdades injustas. A palavra não aparece com esse nome no art. 7º da Lei 8.080, que fala em <b>igualdade</b> da assistência, sem preconceitos ou privilégios.</p><ul><li><b>Igualdade:</b> o mesmo direito para todos.</li><li><b>Equidade:</b> mais atenção a quem precisa mais.</li></ul><p><b>Exemplos:</b> classificação de risco na urgência; ações para população em situação de rua, população negra, LGBT, indígena e ribeirinha.</p><h2>Integralidade</h2><p>Conjunto articulado e contínuo de ações e serviços <b>preventivos e curativos, individuais e coletivos</b>, em todos os níveis de complexidade. A pessoa é vista como um todo.</p><p><b>Exemplo:</b> uma gestante tem pré-natal, vacinação, exames, saúde bucal, apoio psicossocial, parto e acompanhamento no puerpério.</p><h2>Descentralização</h2><p>Redistribuição de poder e responsabilidades, com <b>direção única em cada esfera</b> e ênfase na <b>municipalização</b>. A lógica: quem está mais perto conhece melhor os problemas.</p><div class=\"table-wrap\"><table><thead><tr><th>Esfera</th><th>Direção</th></tr></thead><tbody><tr><td>União</td><td>Ministério da Saúde</td></tr><tr><td>Estados e DF</td><td>Secretaria de Saúde ou equivalente</td></tr><tr><td>Municípios</td><td>Secretaria de Saúde ou equivalente</td></tr></tbody></table></div><h2>Regionalização</h2><p>Organização por territórios, com planejamento conjunto entre municípios vizinhos nas <b>Regiões de Saúde</b>.</p><h2>Hierarquização</h2><p>Serviços organizados em <b>níveis crescentes de complexidade</b>.</p><ul><li><b>Atenção primária:</b> unidades básicas e Saúde da Família; porta de entrada preferencial e coordenadora do cuidado.</li><li><b>Atenção secundária:</b> especialidades e serviços de média complexidade.</li><li><b>Atenção terciária:</b> procedimentos de alta complexidade, como transplantes e cirurgias cardíacas.</li></ul><p><b>Referência</b> é o encaminhamento para um nível mais complexo. <b>Contrarreferência</b> é o retorno com informações para continuidade do cuidado.</p><h2>Participação da comunidade</h2><p>Acontece formalmente pelas <b>Conferências</b> e pelos <b>Conselhos de Saúde</b>, regulados pela Lei 8.142/1990.</p><h2>Outros princípios do art. 7º</h2><ul><li>Autonomia das pessoas.</li><li>Direito à informação sobre a própria saúde.</li><li>Divulgação de informações sobre os serviços.</li><li>Epidemiologia para definir prioridades.</li><li>Integração entre saúde, meio ambiente e saneamento.</li><li>Conjugação de recursos das três esferas.</li><li>Capacidade de resolução.</li><li>Evitar duplicidade de meios para fins idênticos.</li><li>Atendimento humanizado.</li></ul><h2>Situações de prova</h2><div class=\"table-wrap\"><table><thead><tr><th>Situação</th><th>Princípio</th></tr></thead><tbody><tr><td>Idoso grave atendido antes de um caso leve</td><td>Equidade</td></tr><tr><td>Paciente recusa um tratamento após ser esclarecido</td><td>Autonomia</td></tr><tr><td>Prefeitura assume a gestão dos serviços locais</td><td>Descentralização</td></tr><tr><td>Atendimento que une vacina, prevenção e reabilitação</td><td>Integralidade</td></tr><tr><td>Moradores votam propostas na conferência</td><td>Participação da comunidade</td></tr></tbody></table></div><h2>Teste-se</h2><ol><li>Qual a diferença entre igualdade e equidade?</li><li>O que é contrarreferência?</li></ol><details class=\"answers\"><summary>Ver respostas</summary><p>(1) Igualdade garante o mesmo direito; equidade considera necessidades diferentes. (2) O retorno do paciente ao serviço de origem com as informações do cuidado.</p></details>",
  "icon": "🤝"
 },
 {
  "id": "sus-cf",
  "cat": "Legislação do SUS",
  "title": "Constituição Federal: arts. 196 a 200",
  "desc": "A base constitucional da saúde, artigo por artigo.",
  "time": "4 min",
  "body": "<div class=\"callout\"><b>O que você vai dominar:</b> os arts. 194 a 200, os percentuais mínimos e as vedações à iniciativa privada.</div><h2>Onde está</h2><p>A saúde está no Título VIII (Ordem Social), dentro da <b>Seguridade Social</b>.</p><h2>Arts. 194 e 195: seguridade</h2><p>A seguridade social é o conjunto integrado de ações para assegurar os direitos à <b>saúde, previdência e assistência social</b>. Entre seus objetivos: universalidade da cobertura e do atendimento, seletividade e distributividade, irredutibilidade do valor dos benefícios, equidade no custeio, diversidade das fontes e gestão democrática e descentralizada. É financiada por toda a sociedade, de forma direta e indireta (art. 195).</p><h2>Art. 196: direito e dever</h2><p>A saúde é <b>direito de todos e dever do Estado</b>, garantido por políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações de <b>promoção, proteção e recuperação</b>.</p><p>Perceba: o dever não se cumpre só com hospital. Envolve políticas <b>sociais e econômicas</b>.</p><h2>Art. 197: relevância pública</h2><p>Cabe ao poder público dispor sobre <b>regulamentação, fiscalização e controle</b>. A execução pode ser feita diretamente ou por terceiros, inclusive por pessoa física ou jurídica de direito privado.</p><h2>Art. 198: sistema único</h2><p>Rede <b>regionalizada e hierarquizada</b>, com as diretrizes:</p><ol><li>descentralização, com direção única em cada esfera de governo;</li><li>atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais;</li><li>participação da comunidade.</li></ol><h3>Financiamento</h3><p>Recursos da seguridade social, da União, dos Estados, do DF e dos Municípios, além de outras fontes.</p><div class=\"table-wrap\"><table><thead><tr><th>Ente</th><th>Aplicação mínima em saúde</th></tr></thead><tbody><tr><td>União</td><td>Não inferior a 15% da receita corrente líquida (Constituição)</td></tr><tr><td>Estados</td><td>12% da base de impostos (Lei Complementar 141)</td></tr><tr><td>Municípios</td><td>15% da base de impostos (Lei Complementar 141)</td></tr><tr><td>Distrito Federal</td><td>12% ou 15%, conforme a natureza da receita</td></tr></tbody></table></div><h3>Agentes de saúde e enfermagem</h3><ul><li>Agentes comunitários de saúde e de combate às endemias podem ser admitidos por <b>processo seletivo público</b>.</li><li>A <b>Emenda 124/2022</b> previu pisos salariais nacionais para enfermeiro, técnico de enfermagem, auxiliar de enfermagem e parteira, a serem fixados em lei federal.</li></ul><h2>Art. 199: iniciativa privada</h2><p>A assistência à saúde é <b>livre</b> à iniciativa privada.</p><div class=\"table-wrap\"><table><thead><tr><th>Regra</th><th>Conteúdo</th></tr></thead><tbody><tr><td>Participação no SUS</td><td>Complementar, por contrato de direito público ou convênio</td></tr><tr><td>Preferência</td><td>Entidades filantrópicas e sem fins lucrativos</td></tr><tr><td>Recursos públicos</td><td>Vedados auxílios ou subvenções a instituições com fins lucrativos</td></tr><tr><td>Capital estrangeiro</td><td>Vedado, salvo nos casos previstos em lei</td></tr><tr><td>Órgãos, tecidos e sangue</td><td>Vedada toda comercialização</td></tr></tbody></table></div><h2>Art. 200: competências do SUS</h2><ol><li>Controlar e fiscalizar procedimentos, produtos e substâncias de interesse para a saúde e participar da produção de medicamentos, equipamentos, imunobiológicos, hemoderivados e outros insumos.</li><li>Executar ações de vigilância sanitária e epidemiológica e de saúde do trabalhador.</li><li>Ordenar a formação de recursos humanos na saúde.</li><li>Participar da formulação da política e da execução das ações de saneamento básico.</li><li>Incrementar o desenvolvimento científico, tecnológico e a inovação.</li><li>Fiscalizar e inspecionar alimentos, inclusive o teor nutricional, bebidas e águas para consumo humano.</li><li>Participar do controle de substâncias psicoativas, tóxicas e radioativas.</li><li>Colaborar na proteção do meio ambiente, inclusive o do trabalho.</li></ol><h2>Como memorizar o art. 200</h2><p>Agrupe por temas: <b>produtos</b> (1 e 7), <b>vigilâncias</b> (2 e 6), <b>pessoas e ciência</b> (3 e 5) e <b>ambiente</b> (4 e 8).</p><h2>Pegadinhas de prova</h2><ul><li>Em saneamento, o SUS <b>participa</b>; não é o único responsável.</li><li>Participação privada é <b>complementar</b>, nunca substitutiva.</li><li>Prioridade preventiva <b>não</b> significa abandonar a assistência.</li><li>Preferência é das filantrópicas, não das empresas mais baratas.</li></ul><h2>Teste-se</h2><ol><li>Quais são as três diretrizes do art. 198?</li><li>Hospital privado lucrativo pode receber subvenção pública?</li></ol><details class=\"answers\"><summary>Ver respostas</summary><p>(1) Descentralização, atendimento integral e participação da comunidade. (2) Não; auxílios e subvenções são vedados. Contratação complementar é outra coisa.</p></details>",
  "icon": "📜"
 },
 {
  "id": "lei-8080",
  "cat": "Legislação do SUS",
  "title": "Lei nº 8.080/1990: o essencial",
  "desc": "Conceitos, princípios, direção e competências.",
  "time": "5 min",
  "body": "<div class=\"callout\"><b>O que você vai dominar:</b> conceitos, campo de atuação, princípios, competências, subsistemas, setor privado e financiamento.</div><h2>O que é</h2><p>A <b>Lei Orgânica da Saúde</b> (19 de setembro de 1990) trata das condições para promoção, proteção e recuperação da saúde e da organização e funcionamento dos serviços, em todo o território nacional.</p><h2>Disposições gerais (arts. 2º e 3º)</h2><ul><li>A saúde é direito fundamental; o Estado deve prover as condições para seu pleno exercício.</li><li>O dever do Estado <b>não exclui</b> o das pessoas, da família, das empresas e da sociedade.</li><li><b>Determinantes e condicionantes:</b> alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso a bens e serviços essenciais.</li></ul><h2>O que é o SUS (art. 4º)</h2><p>Conjunto de ações e serviços prestados por órgãos e instituições <b>públicas</b> federais, estaduais e municipais, da administração direta e indireta e das fundações mantidas pelo poder público. A iniciativa privada participa em <b>caráter complementar</b>.</p><h2>Campo de atuação (art. 6º)</h2><p>Inclui vigilâncias sanitária e epidemiológica, saúde do trabalhador, assistência terapêutica integral inclusive farmacêutica, saúde bucal, saneamento (participação), formação de recursos humanos, vigilância nutricional, meio ambiente, medicamentos e insumos, alimentos e água, sangue, informação toxicológica e ciência.</p><div class=\"table-wrap\"><table><thead><tr><th>Conceito</th><th>Ideia-chave</th></tr></thead><tbody><tr><td>Vigilância sanitária</td><td>Eliminar, diminuir ou prevenir <b>riscos</b> de bens, serviços e ambiente</td></tr><tr><td>Vigilância epidemiológica</td><td>Conhecer e detectar mudanças nos <b>determinantes</b> e recomendar controle de doenças</td></tr><tr><td>Saúde do trabalhador</td><td>Promover, proteger, recuperar e reabilitar quem está exposto a riscos do trabalho</td></tr></tbody></table></div><h2>Princípios (art. 7º)</h2><ul><li>Universalidade, integralidade e igualdade.</li><li>Autonomia e direito à informação.</li><li>Epidemiologia para definir prioridades e alocar recursos.</li><li>Participação da comunidade.</li><li>Descentralização, com ênfase nos municípios, regionalização e hierarquização.</li><li>Integração com meio ambiente e saneamento.</li><li>Conjugação de recursos e capacidade de resolução.</li><li>Sem duplicidade de meios para fins idênticos.</li><li>Atendimento especializado a mulheres vítimas de violência doméstica.</li><li>Proteção integral dos direitos humanos e atenção humanizada.</li></ul><h2>Organização e gestão (arts. 8º a 14-B)</h2><ul><li>Serviços organizados de forma <b>regionalizada e hierarquizada</b>.</li><li><b>Direção única</b> em cada esfera: Ministério e Secretarias de Saúde.</li><li>Municípios podem formar <b>consórcios</b>.</li><li><b>Comissões Intergestores</b> Bipartite e Tripartite são foros de negociação e pactuação entre gestores.</li></ul><h2>Competências comuns (art. 15)</h2><p>Todas as esferas fiscalizam e avaliam ações, administram o orçamento, organizam informações em saúde, elaboram o plano de saúde e participam da formação de recursos humanos. Em situação de perigo iminente, calamidade ou epidemia, a autoridade pode <b>requisitar bens e serviços</b>, com justa indenização.</p><h2>Competências por esfera (arts. 16 a 19)</h2><div class=\"table-wrap\"><table><thead><tr><th>Direção</th><th>Verbos e exemplos</th></tr></thead><tbody><tr><td>Nacional</td><td><b>Formula</b> e <b>coordena</b>: alimentação e nutrição, redes de alta complexidade, vigilâncias, sangue, portos e fronteiras, auditoria nacional</td></tr><tr><td>Estadual</td><td><b>Descentraliza</b> e <b>apoia</b>: acompanha redes, dá apoio técnico e financeiro, coordena hemocentros e laboratórios estaduais</td></tr><tr><td>Municipal</td><td><b>Executa</b>: planeja e gere os serviços, vigilâncias locais, contrata e fiscaliza prestadores</td></tr><tr><td>Distrito Federal</td><td>Acumula Estado e Município</td></tr></tbody></table></div><p>A União pode atuar diretamente em situações especiais, como agravos inusitados de saúde que escapem ao controle estadual ou representem risco de disseminação nacional.</p><h2>Subsistema de Atenção à Saúde Indígena</h2><ul><li>Componente do SUS, organizado em <b>Distritos Sanitários Especiais Indígenas (DSEI)</b>.</li><li>Financiamento próprio da <b>União</b>; Estados e Municípios podem complementar.</li><li>Considera a realidade local e a cultura dos povos indígenas.</li><li>O restante do SUS funciona como retaguarda e referência.</li></ul><h2>Atendimento e internação domiciliar</h2><p>Realizados por equipes multidisciplinares. Só podem ocorrer por <b>indicação médica</b>, com concordância expressa do paciente e da família.</p><h2>Direito a acompanhante</h2><p>A redação atual (Lei 14.737/2023) garante a <b>toda mulher</b> um acompanhante maior de idade em consultas, exames e procedimentos, em unidades <b>públicas ou privadas</b>, sem aviso prévio.</p><ul><li>Com sedação, a renúncia deve ser escrita, com <b>24 horas</b> de antecedência.</li><li>Em centro cirúrgico ou UTI com restrições justificadas, o acompanhante deve ser profissional de saúde.</li></ul><h2>Assistência terapêutica e tecnologias</h2><ul><li>Dispensação segue <b>protocolos clínicos</b>; na falta, as relações de medicamentos dos entes.</li><li>Incorporar, excluir ou alterar tecnologias cabe ao Ministério da Saúde, assessorado pela <b>Conitec</b>.</li><li>O processo deve terminar em <b>180 dias</b>, prorrogáveis por <b>90</b>.</li><li>É vedado o SUS pagar tratamento experimental ou produto sem registro na Anvisa, salvo exceções legais.</li></ul><h2>Setor privado (arts. 20 a 26)</h2><ul><li>A assistência é livre à iniciativa privada.</li><li>O capital estrangeiro é admitido nas hipóteses previstas na própria lei.</li><li>O SUS recorre ao privado quando sua capacidade for <b>insuficiente</b>, por contrato ou convênio, com preferência para filantrópicas e sem fins lucrativos.</li><li>Critérios e valores de remuneração: direção nacional, aprovados pelo <b>Conselho Nacional de Saúde</b>.</li><li>Dirigentes de entidades contratadas <b>não podem</b> exercer chefia ou função de confiança no SUS.</li></ul><h2>Telessaúde</h2><p>Atendimento remoto com autonomia do profissional, consentimento do paciente e confidencialidade. O paciente pode optar pelo presencial.</p><h2>Financiamento e planejamento (arts. 31 a 36)</h2><ul><li>Recursos em contas especiais, fiscalizados pelos Conselhos de Saúde; na União, pelo <b>Fundo Nacional de Saúde</b>.</li><li>Critérios de repasse combinam perfil demográfico e epidemiológico, rede existente, desempenho e plano de investimentos (art. 35).</li><li>Planejamento <b>ascendente</b>, do local ao federal.</li><li>É vedado transferir recursos para ações não previstas nos planos de saúde, salvo emergência ou calamidade.</li></ul><h2>Pegadinhas de prova</h2><ul><li>Saneamento: o SUS <b>participa</b>.</li><li>Internação domiciliar exige indicação <b>médica</b> e concordância.</li><li>Planejamento é ascendente, não descendente.</li></ul><h2>Teste-se</h2><ol><li>Quem assessora o Ministério na incorporação de tecnologias?</li><li>Quando o SUS pode contratar a iniciativa privada?</li></ol><details class=\"answers\"><summary>Ver respostas</summary><p>(1) A Conitec. (2) Quando sua disponibilidade for insuficiente para garantir a cobertura de uma área.</p></details>",
  "icon": "⚖️"
 },
 {
  "id": "lei-8142",
  "cat": "Legislação do SUS",
  "title": "Lei nº 8.142/1990: participação social e repasses",
  "desc": "Conferências, Conselhos e requisitos para receber recursos.",
  "time": "3 min",
  "body": "<div class=\"callout\"><b>O que você vai dominar:</b> as duas instâncias de participação, a paridade e as regras dos repasses.</div><h2>O que a lei trata</h2><p>A <b>Lei nº 8.142, de 28 de dezembro de 1990</b>, dispõe sobre a <b>participação da comunidade</b> na gestão do SUS e sobre as <b>transferências de recursos</b> entre as esferas. É curta, mas cai muito.</p><h2>Instâncias colegiadas (art. 1º)</h2><p>Em cada esfera de governo, sem prejuízo das funções do Poder Legislativo.</p><div class=\"table-wrap\"><table><thead><tr><th>Característica</th><th>Conferência</th><th>Conselho</th></tr></thead><tbody><tr><td>Funcionamento</td><td>A cada 4 anos</td><td>Permanente</td></tr><tr><td>Natureza</td><td>Avalia e propõe</td><td>Deliberativo</td></tr><tr><td>Papel</td><td>Avaliar a situação de saúde e propor diretrizes</td><td>Formular estratégias e controlar a execução</td></tr><tr><td>Composição</td><td>Vários segmentos sociais</td><td>Governo, prestadores, profissionais e usuários</td></tr></tbody></table></div><h3>Conferência</h3><p>É convocada pelo Poder Executivo ou, <b>extraordinariamente</b>, por ele ou pelo Conselho de Saúde.</p><h3>Conselho</h3><p>Atua inclusive nos <b>aspectos econômicos e financeiros</b>. Suas decisões são <b>homologadas pelo chefe do poder</b> legalmente constituído em cada esfera.</p><h2>Paridade</h2><p>A representação dos <b>usuários</b> nos Conselhos e Conferências é paritária em relação ao conjunto dos demais segmentos. A Resolução CNS nº 453/2012 detalha a divisão dos Conselhos:</p><div class=\"table-wrap\"><table><thead><tr><th>Segmento</th><th>Proporção</th></tr></thead><tbody><tr><td>Usuários</td><td>50%</td></tr><tr><td>Profissionais de saúde</td><td>25%</td></tr><tr><td>Gestores e prestadores de serviços</td><td>25%</td></tr></tbody></table></div><p>Em um conselho de 24 membros: 12 usuários, 6 trabalhadores e 6 representantes de governo e prestadores.</p><h2>Outras regras</h2><ul><li>O <b>Conass</b> (secretários estaduais) e o <b>Conasems</b> (secretários municipais) têm representação no Conselho Nacional de Saúde.</li><li>Conferências e Conselhos têm organização e normas definidas em <b>regimento próprio</b>, aprovado pelo respectivo Conselho.</li></ul><h2>Fundo Nacional de Saúde (art. 2º)</h2><p>Os recursos são alocados como:</p><ol><li>despesas de custeio e capital do Ministério da Saúde e de seus órgãos;</li><li>investimentos previstos em lei orçamentária;</li><li>investimentos previstos no Plano Quinquenal do Ministério;</li><li>cobertura das ações a serem implementadas por Municípios, Estados e DF (investimentos na rede, cobertura ambulatorial e hospitalar e demais ações).</li></ol><h2>Repasses (art. 3º)</h2><ul><li>Feitos de forma <b>regular e automática</b>, o chamado repasse fundo a fundo.</li><li>Seguem os critérios do art. 35 da Lei 8.080.</li><li>Pelo menos <b>70% aos Municípios</b>; o restante aos Estados.</li><li>Municípios podem formar <b>consórcios</b> e remanejar recursos entre si.</li></ul><h2>Requisitos para receber (art. 4º)</h2><p>Municípios, Estados e DF devem contar com:</p><ol><li>Fundo de Saúde;</li><li>Conselho de Saúde com composição paritária;</li><li>plano de saúde;</li><li>relatórios de gestão;</li><li>contrapartida de recursos para a saúde no orçamento;</li><li>comissão de elaboração do Plano de Carreira, Cargos e Salários (PCCS), com prazo de dois anos para implantação.</li></ol><p>O descumprimento faz com que os recursos sejam administrados <b>pelo Estado</b> (no caso do Município) ou <b>pela União</b> (no caso do Estado).</p><h2>Controle social na prática</h2><ul><li>Reuniões do Conselho são espaço para acompanhar contas, metas e queixas.</li><li>A população participa levando demandas e escolhendo representantes.</li><li>A Conferência define diretrizes que devem orientar os planos de saúde.</li></ul><h2>Memorize</h2><div class=\"callout\"><b>4</b> anos para a Conferência; Conselho <b>permanente e deliberativo</b>; <b>50%</b> de usuários; <b>70%</b> para os Municípios.</div><h2>Pegadinhas de prova</h2><ul><li>O Conselho <b>não</b> é apenas consultivo.</li><li>A Conferência <b>não</b> é permanente.</li><li>O requisito é a <b>comissão</b> de elaboração do PCCS.</li><li>Paridade não é um terço para cada segmento.</li></ul><h2>Teste-se</h2><ol><li>Quem pode convocar extraordinariamente a Conferência?</li><li>O que ocorre se o Município não cumprir os requisitos?</li></ol><details class=\"answers\"><summary>Ver respostas</summary><p>(1) O Poder Executivo ou o Conselho de Saúde. (2) Os recursos passam a ser administrados pelo Estado.</p></details>",
  "icon": "🗳️"
 },
 {
  "id": "dec-7508",
  "cat": "Legislação do SUS",
  "title": "Decreto nº 7.508/2011: regiões, redes e acesso",
  "desc": "Os conceitos que mais geram confusão, organizados.",
  "time": "4 min",
  "body": "<div class=\"callout\"><b>O que você vai dominar:</b> os conceitos do decreto, as Regiões de Saúde, as Portas de Entrada, as listas nacionais e o contrato entre os entes.</div><h2>Para que serve</h2><p>O <b>Decreto nº 7.508, de 28 de junho de 2011</b>, regulamenta a Lei 8.080 quanto à <b>organização do SUS, planejamento, assistência e articulação interfederativa</b>.</p><h2>Conceitos (art. 2º)</h2><div class=\"table-wrap\"><table><thead><tr><th>Termo</th><th>Definição resumida</th></tr></thead><tbody><tr><td>Região de Saúde</td><td>Espaço geográfico contínuo de municípios limítrofes, para integrar organização, planejamento e execução</td></tr><tr><td>COAP</td><td>Acordo de colaboração entre entes para organizar a rede, com responsabilidades, metas e recursos</td></tr><tr><td>Portas de Entrada</td><td>Serviços de atendimento inicial à saúde do usuário</td></tr><tr><td>Comissões Intergestores</td><td>Instâncias de pactuação consensual entre os gestores</td></tr><tr><td>Mapa da Saúde</td><td>Descrição geográfica da distribuição de recursos humanos e ações e serviços, públicos e privados</td></tr><tr><td>Rede de Atenção à Saúde</td><td>Ações e serviços articulados em níveis de complexidade crescente</td></tr><tr><td>Serviços Especiais de Acesso Aberto</td><td>Atendimento específico a quem, por agravo ou situação laboral, precisa de atenção especial</td></tr><tr><td>Protocolo Clínico e Diretriz Terapêutica</td><td>Critérios de diagnóstico, tratamento, medicamentos, doses e controle clínico</td></tr></tbody></table></div><h2>Regiões de Saúde (arts. 4º a 7º)</h2><p>São instituídas pelo <b>Estado, em articulação com os Municípios</b>. Podem existir regiões interestaduais e em áreas de fronteira.</p><p>Para existir, a região precisa ter no mínimo:</p><ol><li>atenção primária;</li><li>urgência e emergência;</li><li>atenção psicossocial;</li><li>atenção ambulatorial especializada e hospitalar;</li><li>vigilância em saúde.</li></ol><p>As regiões são referência para as <b>transferências de recursos</b>. As Redes de Atenção se organizam dentro de uma região ou de várias.</p><h2>Acesso (arts. 8º a 12)</h2><h3>Portas de Entrada</h3><ul><li>atenção primária;</li><li>urgência e emergência;</li><li>atenção psicossocial;</li><li>especiais de acesso aberto.</li></ul><p>Hospital especializado e ambulatório especializado são <b>referenciados</b> a partir das portas de entrada.</p><h3>Ordenamento</h3><p>A <b>atenção primária</b> ordena o acesso, com base na avaliação da <b>gravidade do risco</b> individual e coletivo e no <b>critério cronológico</b>, respeitadas as especificidades de pessoas com proteção especial.</p><ul><li>População indígena tem regramentos diferenciados.</li><li>O usuário tem direito à <b>continuidade do cuidado</b>.</li></ul><p><b>Exemplo:</b> pessoa com dor crônica é avaliada na unidade básica, encaminhada ao especialista conforme o risco e a fila, e retorna com orientações para acompanhamento.</p><h2>Planejamento (arts. 15 a 19)</h2><ul><li><b>Ascendente e integrado</b>, do local ao federal, ouvidos os Conselhos de Saúde.</li><li>Compatibiliza necessidades e recursos.</li><li>É <b>obrigatório para o setor público</b> e indutor para a iniciativa privada.</li><li>O Conselho Nacional de Saúde estabelece diretrizes para os planos.</li><li>O Mapa da Saúde ajuda a identificar necessidades e orientar investimentos.</li></ul><h2>Assistência (arts. 20 a 29)</h2><div class=\"table-wrap\"><table><thead><tr><th>Lista</th><th>Contém</th><th>Atualização</th></tr></thead><tbody><tr><td>RENASES</td><td>Ações e serviços que o SUS oferece</td><td>A cada 2 anos</td></tr><tr><td>RENAME</td><td>Medicamentos selecionados e padronizados</td><td>A cada 2 anos</td></tr></tbody></table></div><p>A RENAME é acompanhada do <b>Formulário Terapêutico Nacional</b>. Estados e Municípios podem adotar relações complementares.</p><h3>Acesso a medicamentos (art. 28)</h3><p>Exige, ao mesmo tempo:</p><ol><li>estar assistido por ações e serviços do SUS;</li><li>prescrição por profissional de saúde no exercício de suas funções no SUS;</li><li>prescrição em conformidade com a RENAME e os Protocolos Clínicos ou relações complementares;</li><li>dispensação em unidades indicadas pela direção do SUS.</li></ol><h2>Comissões Intergestores (arts. 30 a 32)</h2><div class=\"table-wrap\"><table><thead><tr><th>Sigla</th><th>Âmbito</th></tr></thead><tbody><tr><td>CIT</td><td>União (Tripartite)</td></tr><tr><td>CIB</td><td>Estado (Bipartite)</td></tr><tr><td>CIR</td><td>Região de Saúde, vinculada à CIB para efeitos administrativos</td></tr></tbody></table></div><p>Pactuam aspectos operacionais, financeiros e administrativos, diretrizes sobre Regiões de Saúde, referência e contrarreferência e responsabilidades. Competem <b>exclusivamente à CIT</b> as diretrizes gerais da RENASES, os critérios do planejamento integrado nas regiões e diretrizes nacionais de financiamento e fronteiras.</p><h2>COAP (arts. 33 a 41)</h2><p>Define responsabilidades individuais e solidárias, indicadores, metas, critérios de avaliação, recursos, formas de controle e fiscalização. O Ministério da Saúde define indicadores nacionais de acesso. A fiscalização envolve o <b>Sistema Nacional de Auditoria</b>.</p><h2>Pegadinhas de prova</h2><ul><li>RENASES é de <b>ações e serviços</b>; RENAME, de <b>medicamentos</b>.</li><li>Hospital especializado <b>não</b> é porta de entrada.</li><li>Quem institui a Região de Saúde é o <b>Estado</b> com os Municípios.</li></ul><h2>Teste-se</h2><ol><li>Quais são as quatro Portas de Entrada?</li><li>Quais critérios ordenam o acesso?</li></ol><details class=\"answers\"><summary>Ver respostas</summary><p>(1) Atenção primária, urgência e emergência, psicossocial e especiais de acesso aberto. (2) Gravidade do risco e ordem cronológica.</p></details>",
  "icon": "🗺️"
 }
];
const SOURCES = [
 {
  "name": "COFEN — Conselho Federal de Enfermagem",
  "url": "https://www.cofen.gov.br/",
  "desc": "Resoluções, pareceres, notícias e orientações profissionais."
 },
 {
  "name": "Ministério da Saúde",
  "url": "https://www.gov.br/saude/pt-br",
  "desc": "Políticas públicas, programas, protocolos e notícias do SUS."
 },
 {
  "name": "ANVISA",
  "url": "https://www.gov.br/anvisa/pt-br",
  "desc": "Normas sanitárias, alertas e segurança em serviços de saúde."
 },
 {
  "name": "EBSERH",
  "url": "https://www.gov.br/ebserh/pt-br",
  "desc": "Notícias institucionais, concursos, hospitais e documentos."
 },
 {
  "name": "Planalto — Legislação",
  "url": "https://www.planalto.gov.br/ccivil_03/",
  "desc": "Texto oficial de leis, decretos e legislação federal."
 },
 {
  "name": "Biblioteca SciELO",
  "url": "https://www.scielo.br/",
  "desc": "Artigos científicos e pesquisas em saúde."
 },
 {
  "name": "Fiocruz",
  "url": "https://portal.fiocruz.br/",
  "desc": "Pesquisa, educação, ciência e saúde pública."
 }
];
