const SUBJECTS = [
  {id:"portugues",name:"Português",icon:"✍️",color:"#eaf3fb",desc:"Interpretação, gramática, sintaxe e redação oficial.",topics:["Interpretação de textos","Ortografia e acentuação","Classes de palavras","Concordância verbal e nominal","Regência e crase","Pontuação e coesão"]},
  {id:"logica",name:"Raciocínio lógico",icon:"🧩",color:"#f1edfb",desc:"Proposições, equivalências, porcentagem e resolução de problemas.",topics:["Proposições e conectivos","Tabela-verdade","Equivalências e negações","Argumentação lógica","Razão, proporção e porcentagem","Sequências e problemas"]},
  {id:"sus",name:"Legislação do SUS",icon:"🏥",color:"#e8f6f1",desc:"Princípios, organização, participação social e legislação sanitária.",topics:["Constituição Federal: arts. 196 a 200","Lei nº 8.080/1990","Lei nº 8.142/1990","Decreto nº 7.508/2011","Princípios e diretrizes do SUS","Redes de Atenção à Saúde"]},
  {id:"ebserh",name:"Legislação da EBSERH",icon:"⚖️",color:"#fff3e8",desc:"Legislação, estrutura institucional e normas da empresa.",topics:["Lei nº 12.550/2011","Estatuto Social da EBSERH","Regimento Interno","Código de Ética e Conduta","Regulamento de Pessoal","Normas institucionais vigentes"]},
  {id:"enfermagem",name:"Conhecimentos específicos",icon:"🩺",color:"#e8f3f8",desc:"Conteúdos técnicos e assistenciais para concursos de enfermeira.",topics:["Sistematização da Assistência de Enfermagem (SAE)","Processo de Enfermagem","Administração de medicamentos","Segurança do paciente","Controle de infecções","Urgência e emergência","Saúde da mulher, criança e idoso","Ética e legislação profissional"]}
];
const QUESTIONS = [
  {id:1,subject:"portugues",topic:"Interpretação de textos",q:"Em uma questão de interpretação, a alternativa correta deve ser escolhida principalmente com base:",opts:["Na opinião pessoal do candidato sobre o tema.","Nas informações explícitas e implícitas sustentadas pelo texto.","No conhecimento externo, mesmo que contradiga o texto.","Na alternativa mais abrangente, independentemente do texto."],a:1,why:`A interpretação deve respeitar as pistas linguísticas e o sentido global do texto.
Conhecimentos externos não podem contradizer o que está escrito.`},
  {id:2,subject:"portugues",topic:"Concordância verbal",q:"Assinale a frase em que a concordância verbal está adequada à norma-padrão:",opts:["Houveram muitas dúvidas durante a aula.","Fazem dois anos que ela concluiu o curso.","Existem protocolos que orientam a assistência.","A equipe de profissionais chegaram cedo."],a:2,why:"O verbo existir concorda com o sujeito plural: “protocolos”. “Haver” com sentido de existir e “fazer” indicando tempo decorrido são impessoais."},
  {id:3,subject:"logica",topic:"Proposições",q:"A negação lógica da proposição “Todos os profissionais participaram da capacitação” é:",opts:["Nenhum profissional participou.","Todos os profissionais não participaram.","Pelo menos um profissional não participou.","Somente um profissional participou."],a:2,why:"A negação de “todos” é “existe pelo menos um que não”. Não significa que ninguém participou."},
  {id:4,subject:"logica",topic:"Porcentagem",q:"Um material que custa R$ 200 recebeu desconto de 15%. Qual é o preço após o desconto?",opts:["R$ 160,00","R$ 170,00","R$ 175,00","R$ 185,00"],a:1,why:"15% de R$ 200 corresponde a R$ 30. Portanto, R$ 200 − R$ 30 = R$ 170."},
  {id:5,subject:"sus",topic:"Lei nº 8.080/1990",q:"De acordo com a organização do SUS, a iniciativa privada:",opts:["Não pode participar de ações e serviços de saúde.","Pode participar do SUS em caráter complementar, segundo as diretrizes legais.","Substitui obrigatoriamente a rede pública quando houver contrato.","Define de forma independente as políticas nacionais de saúde."],a:1,why:`A Constituição Federal, art.
199, §1º, e a Lei nº 8.080/1990 admitem a participação complementar da iniciativa privada, observadas as regras do sistema.`},
  {id:6,subject:"sus",topic:"Princípios do SUS",q:"A integralidade da assistência no SUS está relacionada:",opts:["À oferta exclusiva de atendimento hospitalar.","À articulação contínua de ações preventivas e curativas, individuais e coletivas.","Ao atendimento somente de pessoas contribuintes.","À centralização de todos os serviços na União."],a:1,why:"A integralidade envolve um conjunto articulado e contínuo de ações e serviços preventivos e curativos, individuais e coletivos, conforme a Lei nº 8.080/1990."},
  {id:7,subject:"ebserh",topic:"Lei nº 12.550/2011",q:"A Lei nº 12.550/2011 está diretamente relacionada:",opts:["À criação da Empresa Brasileira de Serviços Hospitalares (EBSERH).","À regulamentação geral dos conselhos de enfermagem.","À criação da Agência Nacional de Vigilância Sanitária.","À instituição da Política Nacional de Atenção Básica."],a:0,why:"A Lei nº 12.550, de 15 de dezembro de 2011, autorizou o Poder Executivo a criar a EBSERH e disciplinou sua finalidade e atuação."},
  {id:8,subject:"ebserh",topic:"EBSERH",q:"A atuação da EBSERH está especialmente vinculada à gestão de hospitais:",opts:["Militares estaduais exclusivamente.","Universitários federais e instituições congêneres, no âmbito de sua finalidade legal.","Privados com fins lucrativos em qualquer país.","Municipais sem qualquer instrumento jurídico."],a:1,why:"A EBSERH presta serviços gratuitos de assistência médico-hospitalar, ambulatorial e de apoio diagnóstico e terapêutico, além de apoiar instituições públicas federais de ensino ou instituições congêneres, nos termos legais."},
  {id:9,subject:"enfermagem",topic:"Processo de Enfermagem",q:"No Processo de Enfermagem, a etapa que envolve a identificação das respostas humanas e dos problemas de saúde que demandam intervenções de enfermagem é:",opts:["Implementação.","Avaliação de Enfermagem.","Diagnóstico de Enfermagem.","Evolução administrativa."],a:2,why:"O diagnóstico de enfermagem corresponde ao julgamento clínico sobre respostas humanas a condições de saúde/processos de vida, orientando a seleção de intervenções."},
  {id:10,subject:"enfermagem",topic:"Segurança do paciente",q:"Na administração segura de medicamentos, uma prática fundamental é:",opts:["Preparar medicamentos de vários pacientes juntos sem identificação.","Conferir paciente, medicamento, dose, via, horário e demais verificações institucionais aplicáveis.","Administrar medicamento sem checar alergias quando há prescrição.","Registrar a administração antes de realizá-la."],a:1,why:`A conferência sistemática dos certos da administração e das barreiras de segurança reduz riscos.
Devem ser seguidos também protocolos institucionais e condições clínicas.`},
  {id:11,subject:"enfermagem",topic:"Controle de infecções",q:"A higienização das mãos deve ser realizada:",opts:["Apenas ao final do plantão.","Somente quando as mãos estiverem visivelmente sujas.","Nos momentos indicados para interromper a transmissão de microrganismos, conforme recomendações da OMS/ANVISA.","Apenas após contato com sangue."],a:2,why:"A higienização das mãos é medida central de prevenção de infecções relacionadas à assistência e deve ocorrer nos momentos recomendados, não apenas quando há sujidade visível."},
  {id:12,subject:"enfermagem",topic:"Ética profissional",q:"Diante de uma situação que coloque em risco a segurança do paciente, a conduta profissional deve priorizar:",opts:["O silêncio para evitar conflitos na equipe.","A comunicação responsável do risco e a adoção das medidas cabíveis de segurança.","A divulgação pública imediata dos dados do paciente.","A alteração informal do prontuário."],a:1,why:"A segurança do paciente exige comunicação adequada, registro fiel e adoção dos fluxos institucionais e ético-legais pertinentes."}
];
const READINGS = [
  {id:"sae",cat:"Artigo de estudo",title:"Processo de Enfermagem: etapas e aplicação na prática",desc:"Uma leitura introdutória sobre avaliação, diagnóstico, planejamento, implementação e evolução.",time:"8 min",body:`<h2>Processo de Enfermagem: uma prática organizada</h2><p>O Processo de Enfermagem organiza o cuidado profissional e orienta o raciocínio clínico.
Ele permite identificar necessidades, planejar intervenções e avaliar os resultados alcançados com a pessoa, família ou coletividade.</p><h3>Etapas fundamentais</h3><ol><li><b>Avaliação de Enfermagem:</b> coleta de dados subjetivos e objetivos sobre a pessoa e seu contexto.</li><li><b>Diagnóstico de Enfermagem:</b> julgamento clínico sobre respostas humanas e necessidades de cuidado.</li><li><b>Planejamento:</b> definição de resultados esperados e intervenções.</li><li><b>Implementação:</b> realização das intervenções planejadas.</li><li><b>Evolução de Enfermagem:</b> avaliação dos resultados e revisão do plano quando necessário.</li></ol><h3>Para lembrar na prova</h3><p>As etapas são inter-relacionadas, recorrentes e orientam a continuidade do cuidado.
A documentação deve ser clara, completa e compatível com as normas profissionais vigentes.</p><p><b>Revisão:</b> diferencie diagnóstico (julgamento clínico) de planejamento (resultados e intervenções).</p>`},
  {id:"seguranca",cat:"Leitura guiada",title:"Segurança do paciente e cultura de segurança",desc:"Conceitos essenciais sobre prevenção de danos, comunicação e melhoria dos processos assistenciais.",time:"7 min",body:`<h2>Segurança do paciente</h2><p>Segurança do paciente é a redução, a um mínimo aceitável, do risco de dano desnecessário associado ao cuidado de saúde.
Ela depende de processos confiáveis, comunicação efetiva e aprendizagem organizacional.</p><h3>Práticas importantes</h3><ul><li>Identificação correta do paciente.</li><li>Comunicação efetiva entre profissionais.</li><li>Segurança na prescrição, uso e administração de medicamentos.</li><li>Cirurgia segura, prevenção de infecções e prevenção de quedas.</li><li>Notificação e análise de incidentes para aprendizado.</li></ul><h3>Cultura de segurança</h3><p>Uma cultura de segurança incentiva a identificação de riscos e a comunicação responsável, sem substituir a apuração adequada de condutas.
O foco é aprender com falhas e fortalecer barreiras de prevenção.</p>`},
  {id:"sus-principios",cat:"Resumo de legislação",title:"Princípios doutrinários e organizativos do SUS",desc:"Relembre universalidade, integralidade, equidade e diretrizes organizativas.",time:"6 min",body:`<h2>Princípios do SUS</h2><h3>Universalidade</h3><p>A saúde é direito de todos e dever do Estado.
O acesso às ações e serviços de saúde deve ser garantido sem discriminação.</p><h3>Integralidade</h3><p>O cuidado deve considerar a pessoa em suas necessidades, articulando ações preventivas e curativas, individuais e coletivas, nos diferentes níveis de complexidade.</p><h3>Equidade</h3><p>Busca reduzir desigualdades injustas, reconhecendo necessidades diferentes e orientando a distribuição de esforços e recursos.</p><h3>Diretrizes organizativas</h3><p>Descentralização, regionalização, hierarquização e participação da comunidade são temas recorrentes em concursos.
Consulte sempre o texto legal e as normas atuais para aprofundar.</p>`},
  {id:"medicacao",cat:"Conhecimentos específicos",title:"Administração segura de medicamentos",desc:"Revisão de barreiras de segurança, checagens e registro.",time:"9 min",body:`<h2>Administração segura de medicamentos</h2><p>A administração de medicamentos é uma atividade que exige avaliação, conhecimento farmacológico, comunicação e cumprimento de protocolos institucionais.</p><h3>Barreiras de segurança</h3><ul><li>Conferir identificação do paciente e alergias conhecidas.</li><li>Verificar medicamento, dose, via, horário, indicação e registro, conforme protocolo adotado.</li><li>Observar condições clínicas, compatibilidade, diluição e velocidade de infusão quando aplicável.</li><li>Orientar o paciente e monitorar efeitos esperados e eventos adversos.</li><li>Registrar de forma fidedigna após a administração.</li></ul><p>Em situações de dúvida, interrompa o processo e esclareça a prescrição com o profissional responsável, seguindo o fluxo institucional.</p>`}
];
const SOURCES = [
  {name:"COFEN — Conselho Federal de Enfermagem",url:"https://www.cofen.gov.br/",desc:"Resoluções, pareceres, notícias e orientações profissionais."},
  {name:"Ministério da Saúde",url:"https://www.gov.br/saude/pt-br",desc:"Políticas públicas, programas, protocolos e notícias do SUS."},
  {name:"ANVISA",url:"https://www.gov.br/anvisa/pt-br",desc:"Normas sanitárias, alertas e segurança em serviços de saúde."},
  {name:"EBSERH",url:"https://www.gov.br/ebserh/pt-br",desc:"Notícias institucionais, concursos, hospitais e documentos."},
  {name:"Planalto — Legislação",url:"https://www.planalto.gov.br/ccivil_03/",desc:"Texto oficial de leis, decretos e legislação federal."},
  {name:"Biblioteca SciELO",url:"https://www.scielo.br/",desc:"Artigos científicos e pesquisas em saúde."},
  {name:"Fiocruz",url:"https://portal.fiocruz.br/",desc:"Pesquisa, educação, ciência e saúde pública."}
];

// ===== SUS: leituras e questões =====
QUESTIONS.push(...[
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
]);
READINGS.push(...[
 {
  "id": "sus-historia",
  "cat": "SUS",
  "title": "SUS: da Reforma Sanitária à criação do sistema",
  "desc": "Como era a assistência antes de 1988 e o que mudou.",
  "time": "",
  "body": "<h2>Antes do SUS</h2><p>A assistência médica pública era ligada à Previdência: em regra, atendia quem contribuía. Quem estava fora do mercado formal dependia de instituições filantrópicas ou de ações pontuais.</p><ul><li><b>1923, Lei Eloy Chaves:</b> Caixas de Aposentadoria e Pensões (CAPs), organizadas por empresa.</li><li><b>Anos 1930:</b> Institutos de Aposentadoria e Pensões (IAPs), por categoria profissional.</li><li><b>1966:</b> unificação dos institutos no INPS.</li><li><b>1977:</b> criação do INAMPS, responsável pela assistência médica previdenciária.</li></ul><h3>Reforma Sanitária</h3><p>Movimento de profissionais, pesquisadores, estudantes e sociedade civil que, a partir dos anos 1970, defendeu a saúde como direito e um sistema público e universal.</p><p>Seu grande marco foi a <b>8ª Conferência Nacional de Saúde (1986)</b>, com ampla participação popular. Suas propostas influenciaram a Constituição.</p><h3>Marcos legais</h3><ul><li><b>1988:</b> Constituição Federal, arts. 196 a 200.</li><li><b>1990:</b> Lei nº 8.080 (organização e funcionamento) e Lei nº 8.142 (participação da comunidade e repasses).</li><li><b>2011:</b> Decreto nº 7.508 (regulamenta a Lei nº 8.080).</li><li><b>2012:</b> Lei Complementar nº 141 (valores mínimos aplicados em saúde).</li></ul><h3>Para a prova</h3><p>Não confunda: antes, o acesso dependia em grande parte da contribuição previdenciária; com o SUS, a saúde é <b>direito de todos</b>.</p>"
 },
 {
  "id": "sus-cf",
  "cat": "SUS",
  "title": "Constituição Federal: arts. 196 a 200",
  "desc": "A base constitucional da saúde, artigo por artigo.",
  "time": "",
  "body": "<h2>Saúde na Constituição</h2><h3>Art. 196: direito de todos</h3><p>A saúde é direito de todos e dever do Estado, garantido por políticas sociais e econômicas que reduzam o risco de doença e de outros agravos, com acesso universal e igualitário às ações de <b>promoção, proteção e recuperação</b>.</p><h3>Art. 197: relevância pública</h3><p>As ações e serviços de saúde são de relevância pública. O Poder Público regulamenta, fiscaliza e controla. A execução pode ser direta ou por terceiros, inclusive pessoas físicas ou jurídicas de direito privado.</p><h3>Art. 198: o sistema único</h3><p>Rede regionalizada e hierarquizada, com três diretrizes:</p><ul><li>Descentralização, com direção única em cada esfera de governo.</li><li>Atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais.</li><li>Participação da comunidade.</li></ul><p>O financiamento vem do orçamento da seguridade social, da União, dos Estados, do Distrito Federal e dos Municípios, além de outras fontes. A União deve aplicar no mínimo 15% da receita corrente líquida. A Emenda nº 124/2022 incluiu no art. 198 a previsão de piso salarial nacional da enfermagem.</p><h3>Art. 199: iniciativa privada</h3><ul><li>A assistência à saúde é livre à iniciativa privada.</li><li>Participação no SUS é <b>complementar</b>, por contrato de direito público ou convênio, com preferência para entidades filantrópicas e sem fins lucrativos.</li><li>É vedado destinar recursos públicos para auxílios ou subvenções a instituições privadas com fins lucrativos.</li><li>É vedada a participação de empresas ou capitais estrangeiros na assistência, salvo nos casos previstos em lei.</li><li>É vedado todo tipo de comercialização de órgãos, tecidos, sangue e derivados.</li></ul><h3>Art. 200: competências do SUS</h3><ul><li>Controlar e fiscalizar produtos e substâncias de interesse para a saúde e participar da produção de insumos.</li><li>Executar vigilância sanitária, epidemiológica e saúde do trabalhador.</li><li>Ordenar a formação de recursos humanos na saúde.</li><li>Participar da política e das ações de saneamento básico.</li><li>Incrementar o desenvolvimento científico, tecnológico e a inovação.</li><li>Fiscalizar alimentos, bebidas e águas para consumo humano.</li><li>Participar do controle de substâncias psicoativas, tóxicas e radioativas.</li><li>Colaborar na proteção do meio ambiente, inclusive o do trabalho.</li></ul>"
 },
 {
  "id": "lei-8080",
  "cat": "SUS",
  "title": "Lei nº 8.080/1990: o essencial",
  "desc": "Conceitos, princípios, direção e competências.",
  "time": "",
  "body": "<h2>Lei Orgânica da Saúde</h2><p>Trata das condições para promoção, proteção e recuperação da saúde e da organização e funcionamento dos serviços.</p><h3>Conceitos</h3><ul><li>A saúde é direito fundamental. O dever do Estado <b>não exclui</b> o das pessoas, da família, das empresas e da sociedade.</li><li><b>Determinantes e condicionantes</b> (art. 3º): alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso a bens e serviços essenciais.</li><li>O SUS é o conjunto de ações e serviços prestados por órgãos e instituições públicas federais, estaduais e municipais. A iniciativa privada participa em caráter complementar.</li></ul><h3>Campo de atuação (art. 6º)</h3><p>Inclui vigilância sanitária, vigilância epidemiológica, saúde do trabalhador, assistência terapêutica integral (inclusive farmacêutica) e saúde bucal, entre outras.</p><ul><li><b>Vigilância sanitária:</b> ações para eliminar, diminuir ou prevenir riscos à saúde ligados ao meio ambiente, à produção e circulação de bens e à prestação de serviços.</li><li><b>Vigilância epidemiológica:</b> ações para conhecer, detectar ou prevenir mudanças nos fatores determinantes e condicionantes, recomendando medidas de prevenção e controle de doenças e agravos.</li><li><b>Saúde do trabalhador:</b> promoção, proteção, recuperação e reabilitação da saúde de quem é exposto aos riscos do trabalho.</li></ul><h3>Principais princípios (art. 7º)</h3><ul><li>Universalidade de acesso em todos os níveis.</li><li>Integralidade da assistência.</li><li>Preservação da autonomia das pessoas.</li><li>Igualdade, sem preconceitos ou privilégios.</li><li>Direito à informação.</li><li>Uso da epidemiologia para definir prioridades e alocar recursos.</li><li>Participação da comunidade.</li><li>Descentralização, com ênfase nos municípios, regionalização e hierarquização.</li><li>Capacidade de resolução em todos os níveis.</li><li>Atendimento humanizado.</li></ul><h3>Direção única (art. 9º)</h3><ul><li>União: Ministério da Saúde.</li><li>Estados e Distrito Federal: Secretaria de Saúde ou órgão equivalente.</li><li>Municípios: Secretaria de Saúde ou órgão equivalente.</li></ul><h3>Quem faz o quê (arts. 16 a 19)</h3><ul><li><b>Nacional:</b> formula políticas e normas, coordena redes de alta complexidade e vigilâncias, controla portos, aeroportos e fronteiras.</li><li><b>Estadual:</b> promove a descentralização para os municípios, dá apoio técnico e financeiro e atua de forma complementar.</li><li><b>Municipal:</b> planeja, organiza, executa e avalia os serviços locais.</li><li><b>Distrito Federal:</b> acumula as competências de Estado e Município.</li></ul>"
 },
 {
  "id": "lei-8142",
  "cat": "SUS",
  "title": "Lei nº 8.142/1990: participação social e repasses",
  "desc": "Conferências, Conselhos e requisitos para receber recursos.",
  "time": "",
  "body": "<h2>Controle social no SUS</h2><p>Em cada esfera de governo há duas instâncias colegiadas: a <b>Conferência</b> e o <b>Conselho de Saúde</b>.</p><h3>Conferência de Saúde</h3><ul><li>Reúne-se a cada <b>4 anos</b>.</li><li>Tem representação de vários segmentos sociais.</li><li>Avalia a situação de saúde e propõe diretrizes para a política de saúde.</li><li>É convocada pelo Poder Executivo ou, extraordinariamente, por ele ou pelo Conselho.</li></ul><h3>Conselho de Saúde</h3><ul><li>Caráter <b>permanente e deliberativo</b>.</li><li>Composto por representantes do governo, prestadores de serviço, profissionais de saúde e usuários.</li><li>Atua na formulação de estratégias e no controle da execução da política de saúde, inclusive nos aspectos econômicos e financeiros.</li><li>Decisões homologadas pelo chefe do Poder Executivo.</li></ul><p>A representação dos <b>usuários é paritária</b> em relação ao conjunto dos demais segmentos: 50% usuários e 50% os outros somados.</p><h3>Repasses</h3><p>Os recursos para Estados e Municípios são transferidos de forma regular e automática. Pelo menos <b>70% vão para os Municípios</b>. Municípios podem formar consórcios.</p><h3>Requisitos para receber (art. 4º)</h3><ul><li>Fundo de Saúde.</li><li>Conselho de Saúde com composição paritária.</li><li>Plano de saúde.</li><li>Relatórios de gestão.</li><li>Contrapartida de recursos no orçamento.</li><li>Comissão de elaboração do Plano de Carreira, Cargos e Salários.</li></ul><p>Se os requisitos não forem atendidos, os recursos passam a ser administrados pelo Estado ou pela União, conforme o caso.</p>"
 },
 {
  "id": "dec-7508",
  "cat": "SUS",
  "title": "Decreto nº 7.508/2011: regiões, redes e acesso",
  "desc": "Os conceitos que mais geram confusão, organizados.",
  "time": "",
  "body": "<h2>Regulamentação da Lei nº 8.080</h2><h3>Conceitos</h3><ul><li><b>Região de Saúde:</b> espaço geográfico contínuo formado por agrupamento de municípios limítrofes, para integrar o planejamento e a execução das ações.</li><li><b>Portas de Entrada:</b> serviços de atendimento inicial.</li><li><b>Rede de Atenção à Saúde:</b> ações e serviços articulados em níveis crescentes de complexidade.</li><li><b>Mapa da Saúde:</b> descrição geográfica da distribuição de recursos humanos e de ações e serviços, públicos e privados.</li><li><b>COAP:</b> Contrato Organizativo da Ação Pública da Saúde, acordo de colaboração entre os entes.</li></ul><h3>Mínimo para existir uma Região de Saúde</h3><ul><li>Atenção primária.</li><li>Urgência e emergência.</li><li>Atenção psicossocial.</li><li>Atenção ambulatorial especializada e hospitalar.</li><li>Vigilância em saúde.</li></ul><h3>Portas de Entrada (art. 9º)</h3><ul><li>Atenção primária.</li><li>Urgência e emergência.</li><li>Atenção psicossocial.</li><li>Especiais de acesso aberto.</li></ul><p><b>Atenção:</b> atenção hospitalar especializada não é porta de entrada; o acesso a ela é referenciado. A atenção primária ordena o acesso, com base na gravidade do risco e na ordem cronológica.</p><h3>Listas nacionais</h3><ul><li><b>RENASES:</b> ações e serviços oferecidos pelo SUS.</li><li><b>RENAME:</b> medicamentos selecionados e padronizados.</li><li>Ambas são atualizadas a cada <b>2 anos</b>.</li></ul><h3>Acesso a medicamentos (art. 28)</h3><p>Pressupõe, cumulativamente: assistência por serviços do SUS; prescrição por profissional no exercício de suas funções no SUS; conformidade com a RENAME e os protocolos clínicos; e dispensação em unidades indicadas pela direção do SUS.</p><h3>Comissões Intergestores</h3><ul><li><b>CIT:</b> Tripartite, no âmbito da União.</li><li><b>CIB:</b> Bipartite, no âmbito do Estado.</li><li><b>CIR:</b> Regional, vinculada à CIB.</li></ul>"
 }
]);
// Tempo de leitura calculado pelo tamanho do texto (cerca de 180 palavras por minuto)
READINGS.forEach(r=>{r.time=Math.max(1,Math.ceil(r.body.replace(/<[^>]+>/g," ").trim().split(/\s+/).length/180))+" min"});
