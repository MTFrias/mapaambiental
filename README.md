# Mapa Ambiental

[Mapa Ambiental](https://mapaambiental.com) é uma plataforma cívica e independente que torna os processos de avaliação e consulta pública ambiental em Portugal mais fáceis de compreender.

O projeto transforma estudos extensos, linguagem técnica e dados dispersos em resumos acessíveis, mapas interativos e informação verificável. O objetivo é ajudar qualquer pessoa a perceber o que está em causa antes de participar numa consulta pública.

> Este projeto não substitui os documentos oficiais, a avaliação das autoridades competentes ou o processo formal de participação pública.

## O que pode ser explorado

O Mapa Ambiental acompanha projetos em diferentes fases. Alguns já têm Estudo de Impacte Ambiental (EIA); outros encontram-se ainda na fase de Proposta de Definição do Âmbito (PDA). Por isso, os mapas apresentam níveis de detalhe diferentes e identificam sempre as limitações dos dados disponíveis.

### Parque Eólico do Paiva

Projeto de 45 aerogeradores, até 7,2 MW por unidade, entre Aguiar da Beira e Sátão. É o processo com informação acústica mais desenvolvida na plataforma.

- Localização dos aerogeradores e dos 29 recetores oficiais avaliados no EIA.
- Comparação entre medições de referência e previsões de ruído com o parque.
- Ferramenta para testar distâncias e estimativas de ruído noutros pontos do mapa.
- Simulação das condições de vento e cenário exploratório de sensibilidade.
- Metodologia, pressupostos e limitações documentados.

### Projeto BigBATT

Sistema de armazenamento de energia em baterias previsto para os terrenos da antiga Central Termoelétrica do Carregado, em Alenquer. O projeto tem cerca de 195 MW de potência e 390 MWh de capacidade.

- Área de implantação aproximada de 2,81 hectares.
- Representação dos 83 contentores de baterias, subestação e restantes componentes principais.
- Dois recetores sensíveis medidos e modelados no EIA.
- Estimativa da propagação sonora das baterias e da subestação, comparada com os resultados oficiais disponíveis.

### Parque Eólico da Guarda

Proposta de 14 aerogeradores nos concelhos da Guarda e Celorico da Beira, com 100,8 MW de potência instalada e ligação à Subestação de Chafariz através de uma linha de 220 kV.

- Posições previstas dos aerogeradores, subestação e torre meteorológica.
- Alternativas de corredor para uma linha elétrica com cerca de 18 km.
- Simulação acústica meramente ilustrativa, porque o projeto ainda está em PDA e não possui previsões oficiais de ruído junto de recetores.

### Parque Eólico do Sudoeste

Projeto eólico em Santiago do Cacém destinado ao autoconsumo industrial do Data Center de Sines. Prevê 23 aerogeradores, 138 MW de potência e um sistema BESS de 50 MW / 200 MWh.

- Área de estudo com cerca de 1 098 hectares, distribuída por três núcleos.
- Representação da área indicativa e dos corredores de ligação elétrica.
- Identificação clara de que a localização é aproximada, pois não foi disponibilizado um ficheiro geográfico oficial nesta fase de PDA.

### Central Solar Fotovoltaica de Penedo

Proposta solar entre Trancoso e Penedono, em hibridização com a Central Hidroelétrica de Foz Tua. Prevê 142 MWp de potência e uma produção média anual estimada de 279 GWh.

- Área de estudo da central com aproximadamente 632 hectares.
- Zonas previstas para painéis e inversores.
- Alternativas de corredor para a linha elétrica de 400 kV até à Subestação de Armamar.

### Central Solar Fotovoltaica de Cereiro

Proposta solar nos concelhos de Miranda do Douro e Mogadouro, em hibridização com a Central Hidroelétrica de Bemposta. Prevê 104 MWp de potência e uma produção média anual estimada de 205 GWh.

- Área de estudo da central com aproximadamente 532 hectares.
- Representação da área da central e de dois corredores alternativos para a ligação elétrica.
- Ligação prevista em 220 kV à subestação da Central Hidroelétrica de Bemposta.

### Zonas de Aceleração de Energias Renováveis

Mapa nacional da proposta de Programa Setorial das ZAER para Portugal Continental.

- Visualização separada das áreas propostas para solar fotovoltaica e energia eólica.
- Cerca de 371 348 hectares mapeados para solar e 84 489 hectares para eólica.
- Explicação dos critérios técnicos e ambientais usados na seleção das áreas.
- Nota de fiabilidade sobre a georreferenciação das imagens oficiais e as limitações da sua utilização.

## Fontes e critérios

Os dados são extraídos de documentação pública, incluindo Estudos de Impacte Ambiental, Propostas de Definição do Âmbito, relatórios temáticos e elementos disponibilizados pelas entidades responsáveis pelos processos. Cada mapa identifica as fontes concretas usadas na respetiva análise.

Sempre que possível, a plataforma distingue:

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
