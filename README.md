# Enfoca — Estudos e Concursos (v1.0)

PWA mobile-first para preparação de concursos na área de enfermagem.

## Como testar
Abra `index.html` em um navegador para uma prévia local. Algumas funções PWA (instalação e cache offline) exigem HTTPS ou localhost.

## Publicar gratuitamente no GitHub Pages
1. Crie um repositório público no GitHub.
2. Extraia o ZIP e envie **todos os arquivos que aparecem diretamente na pasta extraída** para a raiz do repositório. Não crie subpastas.
3. Em Settings > Pages, escolha Deploy from a branch, selecione `main` e `/ (root)`.
4. Acesse o endereço HTTPS gerado e, no Android/Chrome, use o menu ⋮ > Instalar app ou Adicionar à tela inicial.

## O que funciona nesta versão
- Navegação responsiva com áreas Início, Plano, Disciplinas, Questões, Simulados, Leitura, Desempenho e Configurações.
- Cinco áreas de estudo.
- Plano diário inicial de 85 minutos e rotação semanal sugerida.
- 12 questões demonstrativas com correção comentada.
- Leituras introdutórias e links para portais oficiais.
- Registro local de respostas, leituras, tarefas e simulados.
- Exportação/importação de backup JSON.
- Manifest e service worker para instalação/cache.

## Limitações conhecidas da v1.0
- Notícias e alterações legislativas não são buscadas automaticamente. A biblioteca direciona às fontes originais; é preciso conferir a atualização oficial.
- O banco contém questões autorais demonstrativas, não questões oficiais de bancas.
- O cronômetro, simulados longos, flashcards, notificações, sincronização e atualização automática de conteúdo ficam para próximas versões.
- Os dados ficam no navegador/aparelho e não sincronizam entre dispositivos.
- O plano é inicial e deverá ser ajustado ao edital e à banca do concurso pretendido.

## Conteúdo legal
Os tópicos de legislação são trilhas de estudo, não parecer jurídico. Confira sempre o texto consolidado e vigente nas fontes oficiais antes de estudar alterações recentes ou aplicar normas profissionalmente.
