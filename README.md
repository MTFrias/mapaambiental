# Mapa Ambiental

Esta plataforma surge de um movimento cívico e independente que pretende tornar os processos de consulta pública ambiental em Portugal acessíveis a todos. Iremos começar pelo Parque Eólico do Paiva (AIA n.º 3853).

O principal objetivo é transformar documentos técnicos, com centenas de páginas e linguagem complexa e técnica, em dados compreensíveis e mapas interativos. Assim, qualquer cidadão poderá compreender melhor o impacto e as consequências, antes de participar.

## O que este projeto faz

- Mapa interativo com a localização real dos 45 aerogeradores do projeto (coordenadas verificadas contra o EIA)
- 29 recetores oficiais (habitações avaliadas), com os valores reais de ruído do EIA, antes e depois do parque
- Ferramenta para qualquer pessoa testar a distância e o ruído estimado em qualquer ponto do mapa, incluindo a sua própria casa
- Simulador de condições de vento e de velocidade do vento, com base em dados técnicos reais do EIA
- Modelo de estimativa de ruído calibrado e validado por regressão contra os 29 pontos reais, com metodologia totalmente documentada e transparente
- Secção de pontos críticos identificados na análise cuidada do documento (por exemplo, cláusulas de isenção legal, inconsistências de coordenadas)

## Fonte dos dados

Todos os dados técnicos (posições dos aerogeradores, especificações, valores de ruído) foram extraídos e verificados diretamente do **EIA do Parque Eólico do Paiva, Volume II, Relatório Síntese**, disponível publicamente no âmbito da consulta pública em [participa.pt](https://participa.pt).

## Tecnologia

Ficheiro único (HTML, CSS e JavaScript), sem dependências de servidor. Usa:
- [Leaflet](https://leafletjs.com/) para o mapa interativo
- Imagens de satélite [Esri World Imagery](https://www.esri.com/) e mapa base [CartoDB](https://carto.com/)
- [Open-Meteo](https://open-meteo.com/) para dados de elevação de terreno

## Como correr localmente

Basta abrir o ficheiro `index.html` num browser. Não precisa de instalação nem servidor.

## Limitações

Este é um protótipo desenvolvido por um grupo cívico e independente. Relativamente às estimativas de ruído para pontos sem dados oficial são calculadas por um modelo simplificado, calibrado mas não equivalente ao modelo oficial CNOSSOS-EU usado no EIA — a metodologia completa, incluindo margens de erro, está documentada na própria página do projeto. Não substitui os documentos oficiais nem o processo formal de participação pública.

## Licença

Este projeto está licenciado sob a [licença MIT](LICENSE) — pode ser livremente copiado, modificado e reutilizado, incluindo para fins comerciais, mantendo o aviso de autoria original.

Os dados extraídos do EIA citados neste projeto são factos e citações curtas de um documento público em consulta pública; não estão sujeitos a esta licença.
