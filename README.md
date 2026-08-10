# Mapa Ambiental

[Mapa Ambiental](https://mapaambiental.com) é uma plataforma cívica e independente que torna os processos de avaliação e consulta pública ambiental em Portugal mais fáceis de compreender.

O projeto transforma estudos extensos, linguagem técnica e dados dispersos em resumos acessíveis, mapas interativos e informação verificável. O objetivo é ajudar qualquer pessoa a perceber o que está em causa antes de participar numa consulta pública.

> Este projeto não substitui os documentos oficiais, a avaliação das autoridades competentes ou o processo formal de participação pública.

## Processos disponíveis

- **Parque Eólico do Paiva** — 45 aerogeradores entre Aguiar da Beira e Sátão, com análise detalhada do ruído e dos recetores avaliados no EIA.
- **Projeto BigBATT** — sistema de armazenamento de energia por baterias na Vala do Carregado, Alenquer.
- **Parque Eólico da Guarda** — proposta eólica nos concelhos da Guarda e Celorico da Beira.
- **Parque Eólico do Sudoeste** — projeto eólico com armazenamento para autoconsumo industrial em Santiago do Cacém.
- **Central Solar Fotovoltaica de Penedo** — proposta solar entre Trancoso e Penedono.
- **Central Solar Fotovoltaica de Cereiro** — proposta solar na região de Bemposta.
- **Zonas de Aceleração de Energias Renováveis (ZAER)** — visualização das áreas propostas para energia solar e eólica em Portugal Continental.

Cada processo tem uma página própria com os dados disponíveis, enquadramento, mapa e limitações conhecidas. O nível de detalhe varia consoante a fase do procedimento e a informação publicada pelas entidades oficiais.

## Destaques do mapa do Paiva

- Localização dos 45 aerogeradores, com coordenadas verificadas a partir do EIA.
- Representação dos 29 recetores oficiais avaliados no estudo acústico.
- Separação clara entre medições de referência no terreno, previsões oficiais do EIA e estimativas exploratórias do site.
- Comparação entre os níveis de referência medidos e os níveis previstos com o parque.
- Ferramenta para testar distâncias e estimativas de ruído em qualquer ponto do mapa.
- Simulação de velocidade e direção do vento.
- Cenário exploratório adicional para analisar a sensibilidade do modelo.
- Metodologia, pressupostos e limitações documentados na própria página.

## Fontes e critérios

Os dados são extraídos de documentação pública, incluindo Estudos de Impacte Ambiental, Propostas de Definição do Âmbito e elementos disponibilizados pelas entidades responsáveis pelos processos.

No caso do Parque Eólico do Paiva, as principais fontes são o **EIA, Volume II — Relatório Síntese**, os respetivos estudos acústicos e os documentos publicados no âmbito da AIA n.º 3853. Sempre que possível, a plataforma distingue:

- dados medidos no terreno;
- previsões apresentadas oficialmente pelo promotor ou pelo EIA;
- cálculos e representações exploratórias produzidos pelo site.

Os documentos formais devem ser consultados nos portais oficiais, nomeadamente no [Participa](https://participa.pt) e no [SIAIA](https://siaia.apambiente.pt).

## Tecnologia

O site é estático e não necessita de servidor aplicacional nem de base de dados.

- HTML, CSS e JavaScript sem framework.
- [Leaflet 1.9.4](https://leafletjs.com/) para os mapas interativos.
- CartoDB e Esri World Imagery como mapas base.
- Código e dados específicos de cada processo separados por página.
- Google Analytics e Microsoft Clarity carregados apenas depois do consentimento do visitante.

## Estrutura do projeto

```text
.
├── index.html                 # Página inicial e lista de processos
├── about.html                 # Apresentação do projeto
├── projeto*.html              # Mapas e informação de cada processo
├── limitacoes*.html           # Limitações e enquadramento de cada análise
├── zaer.html                  # Mapa das ZAER
└── assets/
    ├── css/style.css          # Estilos partilhados
    ├── images/                # Imagens e sobreposições cartográficas
    └── js/
        ├── scripts.js         # Funcionalidades comuns e consentimento
        └── *.js               # Dados e lógica dos mapas individuais
```

## Privacidade

A medição de audiência é opcional. Google Analytics e Microsoft Clarity não são carregados antes de o visitante aceitar a analítica. A preferência pode ser alterada posteriormente através do botão **Privacidade e cookies** disponível nas páginas do site.

## Limitações

O Mapa Ambiental é um protótipo independente. Os modelos simplificados não substituem software acústico especializado, levantamentos topográficos, medições no terreno ou a análise das entidades competentes.

As previsões de ruído de projetos ainda não construídos não são medições reais. Mesmo quando um cálculo do site é calibrado contra resultados oficiais, essa calibração aproxima-o do modelo usado no estudo e não garante que represente as condições futuras observadas no local.

## Contribuir

Correções factuais, melhorias de acessibilidade, novas fontes e propostas de visualização são bem-vindas através de issues ou pull requests. As contribuições devem indicar claramente a origem dos dados e distinguir factos publicados de estimativas próprias.

## Licença

O código está disponível sob a [licença MIT](LICENSE). Pode ser copiado, modificado e reutilizado, incluindo para fins comerciais, desde que seja mantido o aviso de autoria previsto na licença.

Os factos, dados públicos e pequenas citações provenientes dos documentos oficiais não ficam abrangidos pela licença do código.
